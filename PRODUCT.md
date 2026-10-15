# Product
<!-- impeccable:product-schema 1 -->

## Platform
web

## Product Purpose
Sitio público de Diego García: perfil, gestión legislativa, proyectos, trabajo social, prensa, rendición de cuentas y contacto. La prioridad provisional de portada es perfil y gestión, inferida de la base existente; se ha consultado al usuario de forma opcional.

## Capabilities and Constraints
El usuario solicita mejorar profundamente el frontend sobre la base existente, conservar Next.js y el backend y trabajar en localhost:3000. App Router, React, TypeScript y Tailwind. No migrar ni publicar. La única ruta API presente en este checkout es /api/health; no existe receptor de solicitudes ciudadanas. El formulario prepara un correo para utl-diego.garcia@camara.gov.co y abre la aplicación de correo del visitante, quien confirma el envío desde su propia cuenta. HORO y SGP comparten un componente de línea de tiempo al final de su contenido desplegable; el ejemplo de nueve marcadores es decorativo hasta recibir las etapas reales. Las cabeceras de las tarjetas HORO y SGP usan las imágenes originales public/images/initiatives/horo.jpg y public/images/initiatives/sgp.jpg, respectivamente, con filtro oscuro y texto blanco con relieve mediante text-shadow hasta la línea superior de «Ver más información»; el resto conserva su superficie clara y los textos grises en #606060.

## Brand Commitments
Nombre Diego García; verde de la interfaz unificado en #007562, con superficies claras neutras y texto blanco sobre verde; azul presente en la base; amarillo de la interfaz unificado en #FFCB00 y textos grises en #606060 por petición del usuario. Logo oficial suministrado por el usuario, con «Diego García congresista» y «Hechos + Región», conservado en public/images/diego-garcia-logo.jpg. El footer usa la variante blanca y amarilla transparente suministrada en public/images/diego-garcia-logo-footer.png. Tipografía Poppins solicitada por el usuario, con títulos grandes en Bold (700). Fotografías reales existentes en public/images. Referencia visual indicada por el usuario: https://www.flaviobolsonaro.com.br/. El usuario autoriza editar fotografías y generar recursos nuevos. Las superficies claras antes verdosas usan #F4F4F4 y bordes neutros, el texto sobre amarillo usa #262626 y las imágenes originales JPG/PNG conservan sus colores.

## Evidence on Hand
Biografía y formación: contenido existente en AboutSection. Mensaje «¡Casanare! Aquí estoy para servirte» incorporado en diego_hero_cutout.png, que es un banner aplanado, no un recorte transparente. Tres fotografías originales. logo.png contiene una imagen de energía y no es un logo de Diego. Las noticias, proyectos e informes existentes carecen de documentos y enlaces verificables: preservar como borradores, sin elevar su estado a información comprobada. Las líneas de tiempo de HORO y SGP quedan con etapas, avance y fechas pendientes por instrucción del usuario; los puntos de la referencia son decorativos y no indican progreso confirmado. Redes sociales en src/config/site.ts. No inventar estadísticas, apoyos, logros ni eventos.

## Product Principles
- Conservar identidad, contenido de base y arquitectura.
- Priorizar fotografías auténticas y legibilidad en móviles.
- Las acciones deben funcionar o explicar honestamente su disponibilidad.
- No afirmar que una solicitud se envió si no existe receptor.

Las tres prioridades legislativas se identifican con iconos de agricultura, energía e inversión territorial en lugar de rótulos numéricos. El sitio incluye accesos flotantes a Facebook, Instagram y TikTok, enlazados a las cuentas configuradas en src/config/site.ts; son verticales en escritorio amplio y una fila compacta en pantallas menores, con el verde y amarillo de la marca.

En «Con nuestra gente», las tres previsualizaciones mantienen la proporción 9:16 y sus enlaces a Facebook. En móvil (hasta 700px) se recorren mediante desplazamiento horizontal nativo, con ajuste a cada imagen, parte de la siguiente a la vista y una indicación para deslizar. En escritorio se conservan las tres columnas centradas.
