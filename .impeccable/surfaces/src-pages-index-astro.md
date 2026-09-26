---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Direction contract

THESIS: El home es una página de descubrimiento en 9 bloques con un rol psicológico claro cada uno (deseo → posicionamiento → elección → imaginación → alternativa → evidencia → prueba social → objeciones → conversión); revisión explícita del cliente sobre la v1 (que rechazaba el hero clásico) — aquí el hero clásico SÍ es la apertura, pero cada bloque siguiente dice lo suficiente para avanzar, nunca todo lo disponible (eso vive en /experiencias, /nosotros, /galeria, /faq).

OWN-WORLD: Paleta/tipografía de DESIGN.md sin cambios. Hero con nav superpuesta transparente (logo-mark.png transparente + scrim) que pasa a sólida chocolate al hacer scroll. El bloque "Así se vive Cuatro Tiempos" reutiliza el patrón DayMoment/DayRail ya construido (55/45, alternado, sin kicker). Experiencias usa jerarquía real (Full Day grande, Cabalgata/Pilates chicas) en vez de 4 cards iguales. Celebra a tu manera con fondo chocolate sólido, único bloque invertido de color en la página.

STORY: 01 Hero (deseo) → 02 Intro/manifiesto (posicionamiento) → 03 Experiencias (elección, con línea discreta hacia Celebra) → 04 Así se vive Cuatro Tiempos (imaginación) → 05 Celebra a tu manera (alternativa) → 06 Galería (evidencia visual) → 07 Testimonios (prueba social, contenido real pendiente de entrega) → 08 FAQ breve (objeciones) → 09 CTA final (conversión).

FIRST VIEWPORT: Hero a pantalla completa. Fondo: pieza gráfica propia (silueta ecuestre + degradado cálido de contraluz, no una foto) hasta contar con foto/video real — inspiración de mood explícitamente aprobada por el cliente (referencia "SPIRIT" template: oscuro, luz dorada de contraluz, silueta). Nav transparente arriba (logo + enlaces + un CTA). Titular Cormorant grande: "Vuelve a conectar con lo esencial." + subtítulo corto + un único CTA "Descubrir experiencias" (§10: un CTA dominante, no dos como en las referencias del cliente).

FORM: Discovery journey de 9 secciones jerarquizadas, no landing plana de bloques iguales. Reemplaza el FORM de la v1 (seed key 82d68649, "Un Día en Cuatro Tiempos" como home completo) — ese trabajo no se descarta, pasa a ser la sección 04 dentro de esta estructura mayor.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Notas de contenido (no son parte del contrato de dirección)

- Testimonios (07): el cliente confirmó que existen testimonios reales; pendientes de entrega. No construir con testimonios inventados — dejar la sección para cuando lleguen los reales.
- Hero: sin foto/video real todavía; placeholder gráfico (silueta + degradado), no foto de stock, hasta reemplazo.
- Fotos reales ya en uso (manana.jpg, cabalgata.png, almuerzo.png) y su tratamiento de color, más la tensión de marca de cabalgata.png (sombreros), siguen documentadas en PRODUCT.md § Evidence on Hand — sin cambios respecto a la v1.
