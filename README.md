# Consultoría Social — sitio web

Sitio web responsive en español para una consultoría del ámbito social, con una estética inspirada en entidades del tercer sector.

## Incluye
- Página de inicio visual con fotografías y paleta verde teal, salvia, terracota y marfil.
- Secciones de presentación, servicios, metodología, recursos y contacto/reserva.
- Formulario de solicitud de cita con validación y guardado local de demostración.
- Ventana de acceso y registro de demostración.
- Diseño adaptable a móviles, tabletas y escritorio.

## Cómo verlo
Abre `index.html` en un navegador. Para desarrollo local, también puedes ejecutar un servidor estático desde esta carpeta, por ejemplo:

```bash
python -m http.server 8000
```

Y visitar `http://localhost:8000`.

## Importante antes de publicar
Esta entrega es un prototipo frontend funcional. Los formularios de reserva y las cuentas se guardan únicamente en el navegador mediante `localStorage`. **No es un sistema seguro de autenticación ni una agenda compartida**, y no envía correos ni confirma citas automáticamente.

Para producción:
1. Crear un proyecto Supabase.
2. Conectar Supabase Auth para registro, inicio de sesión y recuperación de contraseña.
3. Crear tablas de perfiles, servicios, disponibilidad y reservas, con políticas RLS.
4. Implementar control de disponibilidad en servidor para evitar reservas duplicadas.
5. Conectar un proveedor de correo para confirmaciones.
6. Añadir textos legales definitivos, consentimiento y política de privacidad conforme al RGPD/LOPDGDD. No solicitar datos sensibles innecesarios.
7. Configurar variables de entorno y desplegar en Vercel o un hosting equivalente.

## Publicar en GitHub
Crea un repositorio llamado `consultoria-social-web`, sube todos los archivos de esta carpeta y activa GitHub Pages desde **Settings → Pages → Deploy from a branch → main → /(root)**. Para la versión con backend, usa un despliegue compatible con Next.js (por ejemplo, Vercel), no GitHub Pages.

## Personalización pendiente
- Nombre comercial definitivo y logotipo.
- Correo, teléfono, WhatsApp y redes sociales.
- Dirección y datos fiscales, si corresponde.
- Tarifas, duración de citas, horarios y política de cancelación.
- Fotografías propias y textos definitivos.