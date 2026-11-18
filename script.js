const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
$("#year").textContent = new Date().getFullYear();

const nav = $("#mainNav");
$("#menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
$$('#mainNav a').forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

function openModal(id){ const modal=$("#"+id); modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
function closeModal(modal){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
$$("[data-open]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();openModal(el.dataset.open)}));
$$(".modal").forEach(modal=>{
  $(".modal-close",modal).addEventListener("click",()=>closeModal(modal));
  modal.addEventListener("click",e=>{if(e.target===modal)closeModal(modal)});
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")$$(".modal.open").forEach(closeModal)});

const today = new Date(); today.setMinutes(today.getMinutes()-today.getTimezoneOffset());
$("#bookingForm [name=date]").min = today.toISOString().slice(0,10);

function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),3500)}
$("#bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.currentTarget).entries());
  data.createdAt=new Date().toISOString();
  const list=JSON.parse(localStorage.getItem("solicitudes_demo")||"[]");
  list.push(data);localStorage.setItem("solicitudes_demo",JSON.stringify(list));
  e.currentTarget.hidden=true;$("#bookingSuccess").hidden=false;
});
$$(".tab").forEach(tab=>tab.addEventListener("click",()=>{
  $$(".tab").forEach(t=>t.classList.toggle("active",t===tab));
  $("#loginForm").hidden=tab.dataset.tab!=="login";
  $("#registerForm").hidden=tab.dataset.tab!=="register";
  $("#accountMessage").hidden=true;
}));

// Demo only: localStorage is not secure authentication and must not be used for real customer accounts.
$("#registerForm").addEventListener("submit",e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(e.currentTarget).entries());
  const accounts=JSON.parse(localStorage.getItem("cuentas_demo")||"[]");
  if(accounts.some(a=>a.email.toLowerCase()===d.email.toLowerCase())){showAccount("Ya existe una cuenta de demostración con ese correo.");return;}
  accounts.push({name:d.name,email:d.email,password:d.password});
  localStorage.setItem("cuentas_demo",JSON.stringify(accounts));
  showAccount("Cuenta de demostración creada. Para producción, conecta un sistema de autenticación seguro.");
});
$("#loginForm").addEventListener("submit",e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(e.currentTarget).entries());
  const accounts=JSON.parse(localStorage.getItem("cuentas_demo")||"[]");
  const account=accounts.find(a=>a.email.toLowerCase()===d.email.toLowerCase()&&a.password===d.password);
  showAccount(account? `Hola, ${account.name}. Has iniciado sesión en la demostración.`:"No encontramos esa cuenta o la contraseña no coincide.");
});
function showAccount(message){const box=$("#accountMessage");box.textContent=message;box.hidden=false;}