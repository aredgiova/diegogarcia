# Product
<!-- impeccable:product-schema 1 -->

## Platform
web

## Product Purpose
Sitio público de Diego García: perfil, gestión legislativa, proyectos, trabajo social, prensa, rendición de cuentas y contacto. La prioridad provisional de portada es perfil y gestión, inferida de la base existente; se ha consultado al usuario de forma opcional.

## Capabilities and Constraints
El usuario solicita mejorar profundamente el frontend sobre la base existente, conservar Next.js y el backend y trabajar en localhost:3000. App Router, React, TypeScript y Tailwind. No migrar ni publicar. La única ruta API presente en este checkout es /api/health; no existe receptor de solicitudes ciudadanas.

## Brand Commitments
Nombre Diego García; verde, amarillo y azul presentes en la base. Fotografías reales existentes en public/images. Referencia visual indicada por el usuario: https://www.flaviobolsonaro.com.br/. El usuario autoriza editar fotografías y generar recursos nuevos.

## Evidence on Hand
Biografía y formación: contenido existente en AboutSection. Mensaje «¡Casanare! Aquí estoy para servirte» incorporado en diego_hero_cutout.png, que es un banner aplanado, no un recorte transparente. Tres fotografías originales. logo.png contiene una imagen de energía y no es un logo de Diego. Las noticias, proyectos e informes existentes carecen de documentos y enlaces verificables: preservar como borradores, sin elevar su estado a información comprobada. Redes sociales en src/config/site.ts. No inventar estadísticas, apoyos, logros ni eventos.

## Product Principles
- Conservar identidad, contenido de base y arquitectura.
- Priorizar fotografías auténticas y legibilidad en móviles.
- Las acciones deben funcionar o explicar honestamente su disponibilidad.
- No afirmar que una solicitud se envió si no existe receptor.
