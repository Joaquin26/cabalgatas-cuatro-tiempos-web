# Cabalgatas Cuatro Tiempos — Design System

## 01. Dirección de marca

Cuatro Tiempos es una marca de experiencias de campo alrededor de los
caballos, la naturaleza y los momentos compartidos.

No buscamos comunicar únicamente “cabalgatas”.
Buscamos transmitir la sensación de escapar de la rutina y vivir
Pachacámac a otro ritmo.

### Concepto visual

PREMIUM COUNTRYSIDE EXPERIENCE

La experiencia debe sentirse:

- Natural
- Cálida
- Editorial
- Cuidada
- Serena
- Humana
- Auténtica

El carácter premium debe provenir del espacio, la fotografía,
la composición y el cuidado de los detalles; no de recursos
tradicionalmente asociados al lujo.

## 02. Referencias de marca

### Belmond — Referencia principal

Inspiración:

- Storytelling de experiencias
- Slow luxury
- Fotografía protagonista
- Destino antes que producto
- Contenido editorial

### Ralph Lauren — Universo ecuestre

Inspiración:

- Elegancia ecuestre
- Tonos tierra
- Lifestyle
- Tradición
- Dirección fotográfica

Evitar trasladar la estética western o preppy americana.

### Aman — Sofisticación

Inspiración:

- Espacio
- Ritmo visual
- Simplicidad
- Grandes fotografías
- Pocos elementos compitiendo simultáneamente

### Six Senses — Bienestar

Inspiración:

- Naturaleza
- Wellness
- Gastronomía
- Experiencias
- Conexión con el entorno

---

## 03. Principios de diseño

### 01 — La experiencia antes que el servicio

No comunicar:

“Cabalgata de 2 horas + jugo + guía”

Comunicar primero la experiencia y posteriormente sus características.

La persona debe poder imaginarse allí antes de evaluar los detalles.

### 02 — Una idea por momento

Cada bloque debe tener un protagonista.

Evitar:

- múltiples CTAs compitiendo
- exceso de cards
- grandes cantidades de texto
- demasiados elementos decorativos

### 03 — La fotografía es parte de la interfaz

Las imágenes no deben funcionar únicamente como decoración.

Deben ayudar a contar la experiencia.

### 04 — Premium no significa lujo clásico

Evitar:

- dorados
- negro predominante
- efectos glossy
- sombras fuertes
- mármol
- ornamentos excesivos
- estética de hotel cinco estrellas tradicional

### 05 — El caballo es el corazón, no todo el universo

Cuatro Tiempos también es:

naturaleza + gastronomía + bienestar + personas + celebración + Pachacámac.

---

# 04. Color System

## Primary

Chocolate
#301713

Uso:

- fondos de alto impacto
- botones principales
- navegación
- footer
- títulos puntuales

## Secondary

Earth Brown
#594034

Uso:

- superficies secundarias
- elementos gráficos
- estados hover

## Accent

Camel
#A47F5E

Uso limitado:

- pequeños detalles
- líneas
- indicadores
- iconografía

## Neutral Warm

Sand
#D8C4A5

Cream
#F1E5D1

Ivory
#FAF6EE

Warm Charcoal
#28231F

## Distribución aproximada

60% — Ivory / Cream
25% — Chocolate / Brown
10% — Fotografía / tonos naturales
5% — Camel / Sand

No utilizar Camel como color principal.

---

# 05. Typography

## Display

Cormorant Garamond

Uso:

- Hero
- H1
- H2
- citas
- mensajes editoriales
- números destacados

## UI / Body

Manrope

Uso:

- navegación
- párrafos
- botones
- formularios
- sistema de reservas
- labels
- información funcional

## Desktop Scale

Display XL 80px
H1 64px
H2 48px
H3 32px
H4 24px

Body Large 18px
Body 16px
Small 14px
Eyebrow 12px

Card Title 20px — título dentro de una tarjeta de contenido (experiencia,
testimonio, etc.), no es un nivel de heading de documento. Vive entre
Body Large y H4 porque ninguno de los dos rinde bien para este uso:
Body Large se siente débil como título de tarjeta, H4 es demasiado
pesado. Token: `--text-card-title`.

### Eyebrow

Usar uppercase + letter spacing.

Ejemplo:

NUESTRAS EXPERIENCIAS

        ↓

Encuentra tu próxima aventura

## Principio

La serif comunica emoción.
La sans comunica información.

No utilizar Cormorant para interfaces complejas o párrafos extensos.

---

# 06. Layout

Desktop max-width:
1280px

Content:
1200px

Grid:
12 columnas

Column gap:
24–32px

Section spacing:
56–104px (`clamp(3.5rem, 7vw, 6.5rem)`)

Header → contenido dentro de una sección:
`--space-header-gap` (48px)

Gap entre fotos de una grilla:
`--space-grid-gap` (24px)

Proporción de foto en grillas de 5 (Así se vive, Galería):
`--ratio-photo-tall` (7 / 8)

Horizontal padding:
64–80px

## Principio

Priorizar espacio negativo.

No llenar una sección simplemente porque exista espacio disponible.

---

# 07. Shape Language

La geometría principal nace del arco presente en el isotipo de
Cuatro Tiempos.

Puede utilizarse en:

- fotografías destacadas
- marcos
- números
- detalles gráficos
- transiciones editoriales

No todas las imágenes deben utilizar el arco.

La fotografía rectangular continúa siendo la forma predominante.

## Border Radius

Cards:
0–4px

Buttons:
0–4px

Inputs:
4–8px

Evitar componentes excesivamente redondeados o estilo “app”.

---

# 08. Photography

La fotografía debe sentirse documental/editorial, no publicitaria.

## Distribución deseada

40% Experiencia
Personas viviendo la actividad.

25% Entorno
Valle, estancia, caminos y naturaleza.

20% Detalles
Montura, manos, botas, comida, fuego, texturas.

15% Caballos
Retratos y momentos naturales.

## Tratamiento

- temperatura ligeramente cálida
- tonos tierra presentes
- verdes moderadamente desaturados
- contraste natural
- pieles naturales
- evitar filtros sepia fuertes

## Evitar

- fotografías de stock
- poses artificiales
- exceso de retratos de caballos
- saturación excesiva
- imágenes demasiado oscuras
- estética western

---

# 09. Iconography

Estilo:
Lineal / artesanal / fino.

Inspiración:
Los símbolos presentes en el isotipo.

Familias necesarias:

- Duración
- Personas
- Calendario
- Caballo
- Alimentación
- Traslado
- Fogata
- Ubicación
- Dificultad / requisitos

Mantener un mismo peso visual.

No mezclar diferentes familias de iconos.

---

# 10. Buttons

## Primary

Background:
Chocolate

Text:
Ivory

Ejemplo:

RESERVAR EXPERIENCIA →

## Secondary

Background:
Transparent

Border:
Chocolate

Text:
Chocolate

## Text CTA

DESCUBRIR EXPERIENCIA →

### Regla

Utilizar un único CTA dominante por bloque.

---

# 11. Cards

Las cards de experiencias deben sentirse editoriales,
no como cards de e-commerce.

Jerarquía:

Fotografía
Nombre
Información esencial
Precio
CTA

Ejemplo:

FULL DAY A CABALLO

6 HORAS · DOMINGOS

Un día entre caballos, naturaleza,
gastronomía y momentos para recordar.

Desde S/380 por persona

DESCUBRIR EXPERIENCIA →

# 12. Experience UI

La web posee dos modos visuales.

## DISCOVERY MODE

Utilizado en:

- Inicio
- Experiencias
- Detalle
- Nosotros
- Galería

Características:

Editorial
Emocional
Fotográfico
Mayor presencia de Cormorant
Composiciones más libres
Mucho espacio negativo

## BOOKING MODE

Utilizado desde que comienza la reserva.

Características:

Claro
Predecible
Funcional
Mayor presencia de Manrope
Menor decoración
Jerarquía evidente
Feedback inmediato

El usuario nunca debe sacrificar claridad por estética.

# 13. Booking Components

Diseñar estados para:

Calendar
Date
Time slot
Availability
Sold out
Guest selector
Price
Form fields
Validation
Booking summary
Payment
Loading
Success
Error

## Availability

No depender únicamente del color.

Ejemplo:

DISPONIBLE
ÚLTIMOS 3 CUPOS
AGOTADO

# 14. Motion

Las animaciones deben transmitir calma.

Permitido:

- fade
- reveal
- desplazamientos suaves
- image scale sutil
- parallax muy moderado
- transiciones editoriales

Evitar:

- elementos rebotando
- animaciones rápidas
- scroll hijacking
- exceso de parallax
- efectos que retrasen una reserva

Duración orientativa:
300–700ms

# 15. Accessibility

Contraste mínimo WCAG AA.

Body:
mínimo 16px.

Touch targets:
mínimo 44x44px.

Todos los inputs deben poseer label.

Los estados no pueden comunicarse únicamente mediante color.

Mantener focus states visibles.

# 16. Responsive

Diseñar Mobile First en componentes funcionales.

Breakpoints orientativos:

Mobile < 768px
Tablet 768–1023px
Desktop >= 1024px
Wide >= 1440px

La experiencia móvil no debe ser una reducción del desktop.

Especial atención a:

- navegación
- cards
- calendario
- selección de personas
- resumen de compra
- checkout

# 17. Brand Guardrails

CUATRO TIEMPOS SÍ ES:

Premium countryside
Editorial
Natural
Cálido
Experiencial
Ecuestre
Humano
Peruano

CUATRO TIEMPOS NO ES:

Western
Cowboy
Hotel de lujo clásico
Club ecuestre deportivo
Eco/hippie
Turismo extremo
Página turística genérica
E-commerce

# 18. Regla final

Antes de agregar cualquier elemento preguntarse:

1. ¿Ayuda a imaginar la experiencia?
2. ¿Ayuda a entender la información?
3. ¿Ayuda a reservar?

Si no cumple ninguna de las tres,
probablemente no es necesario.
---

# 19. Notas de implementación — Home (src/pages/index.astro)

Addendum, no reemplaza ni reordena las secciones 01–18. Registra decisiones
de implementación confirmadas en el build de Inicio (`src/pages/index.astro`,
`Nav.astro`, `Footer.astro`, `DayMoment.astro`, `DayRail.astro`,
`global.css`) para que páginas futuras (Experiencias, Detalle, Nosotros,
Galería, FAQ, Reserva) las reutilicen en vez de redescubrirlas.

## Kicker/eyebrow sobre título — prohibido, con resolución

`craft-floor.md` prohíbe sin excepción un kicker/eyebrow visible
directamente sobre un título, aunque la §05 de este documento describe el
rol tipográfico "Eyebrow" con un ejemplo kicker→titular. Ambas cosas son
ciertas a la vez y no se contradicen si se separan:

- El estilo Eyebrow (12px, uppercase, tracked, Manrope — clase `.eyebrow`
  en `global.css`) sigue siendo válido para labels independientes que **no**
  estén apilados justo encima de un título.
- Un marcador de hora/contexto que leería como kicker (p. ej. "07:00 ·
  LLEGADA" sobre un H1) no se muestra como texto visible sobre el título:
  se traslada a un elemento de UI de apoyo — aquí, el riel de progreso
  vertical (`DayRail.astro`) — y el texto equivalente vive solo para
  lectores de pantalla vía `.visually-hidden` (ver `DayMoment.astro`, el
  `<span class="visually-hidden">{time} · {label} —</span>` antes del
  título).

**La Regla Kicker→Riel.** Cuando el contenido pide un marcador de tiempo/
contexto que normalmente sería un kicker, resuélvelo en un componente de
navegación/progreso con equivalente accesible oculto, nunca como texto
visible apilado sobre el título.

## Utilidad `.visually-hidden`

Añadida a `global.css` (clip-rect estándar). Reutilizar para cualquier
texto que deba existir para lectores de pantalla pero no visualmente,
en vez de introducir `aria-label` ad hoc cuando el contenido es una frase
completa (más fácil de mantener junto al copy real).

## Contraste: Camel es decorativo, nunca texto sobre fondo claro

Medido (WCAG contrast ratio):

- `--color-camel` (#A47F5E) sobre `--color-ivory` (#FAF6EE): **~3.37:1** —
  no pasa AA para texto de tamaño normal (mínimo 4.5:1).
- `--color-camel` sobre `--color-cream` (#F1E5D1): **~2.92:1** — peor aún.
- `--color-earth-brown` (#594034) sobre `--color-ivory`: **~8.82:1** —
  pasa AA/AAA con holgura y es el sustituto correcto cuando se necesita
  un tono de acento en texto pequeño sobre fondo claro.

Esto confirma con números la guía ya existente en §04 ("uso limitado" para
Camel: líneas, puntos, iconografía). El build actual no usa Camel como
color de texto sobre fondo claro (donde aparece como `color`, es sobre
`--color-chocolate` en el footer, o como `border`/`background` decorativo
en Nav y DayRail).

**La Regla Camel-Decorativo.** Camel se usa en líneas, bordes, puntos e
iconografía — nunca como color de texto de tamaño body/label sobre Ivory o
Cream. Si un diseño futuro necesita un acento tierra en texto pequeño sobre
fondo claro, usar Earth Brown (#594034).

## Logo: usar `logo-mark.png`, no `logo.PNG`

El asset original (`public/brand/logo.PNG`) es el lockup completo
aplanado sobre fondo sólido `#291311`, sin transparencia — ese tono no
coincide exactamente con el Chocolate canónico (`#301713` de §04), y deja
una costura visible sobre superficies chocolate reales. Se generó
`public/brand/logo-mark.png` (chroma-key, transparente, recortado al
contenido); `Nav.astro` y `Footer.astro` ya lo usan. **Usar
`logo-mark.png` en toda página nueva; `logo.PNG` se conserva solo como
proveniencia del asset original, no para uso en pantalla.**

## Grading fotográfico unificador (fotografía real)

Aplicado a toda foto real (no solo a la que tensiona con §17), vía la
clase `.moment__image` en `DayMoment.astro`:

```css
filter: saturate(0.62) contrast(1.08) brightness(0.97) sepia(0.14);
```

más un wash de borde inferior:

```css
background: linear-gradient(180deg, rgba(48, 23, 19, 0) 55%, rgba(48, 23, 19, 0.32) 100%);
```

Su función es doble: unificar tonalmente fotos de procedencia mixta
(distintas cámaras/luz) y, como efecto secundario, atenuar (no resolver)
la lectura "western" del sombrero de ala ancha en `cabalgata.png`. Es un
tratamiento real y perceptible (más fuerte que un tinte cosmético), pero
la composición/grading no puede resolver un conflicto de guardrail a nivel
de forma cuando el elemento conflictivo ocupa el cuadro completo a la
altura del sujeto — eso requiere una foto distinta, y queda registrado
como deuda de contenido en `PRODUCT.md`, no como algo que la página
resuelve. **Aplicar el mismo filtro + wash a toda foto real nueva para
mantener consistencia tonal entre procedencias distintas.**

## Patrón reutilizable: sección split a pantalla completa (`DayMoment`)

- Dos columnas, `min-height: 100svh`, lado de la imagen alternado por
  sección vía `data-side="left"|"right"`.
- Split 55/45 en desktop (`≥1024px`): `grid-template-columns: 11fr 9fr`
  (imagen a la izquierda) o `9fr 11fr` (imagen a la derecha) — la imagen
  siempre lleva el peso visual mayor. El orden de columnas se fija
  explícitamente con `order` en ambos estados (no depender del orden del
  DOM).
- Imagen vía `object-fit: cover`, con `imagePosition` opcional para
  art-direction de encuadre por sección (usado en `cabalgata` para sesgar
  el foco lejos de los sombreros).
- El heading es un prop (`headingLevel: "h1" | "h2"`) — la primera sección
  de una página lleva `h1`, el resto `h2`, para que cada página tenga
  exactamente un `<h1>`.

## Reveal-on-scroll: nunca depender de JS para visibilidad por defecto

`.reveal` solo entra en estado `opacity: 0` bajo `html.has-js` (clase
añadida por un script inline temprano en `BaseLayout.astro`). Sin esa
guarda, contenido con no-JS, JS lento o pre-hidratación queda atrapado
invisible — bug real encontrado y corregido en este build. Además, un
timeout de 4s en el observer de `BaseLayout.astro` fuerza `is-visible`
como red de seguridad si el `IntersectionObserver` no dispara. **Cualquier
animación de entrada nueva debe seguir este mismo patrón de guarda +
fallback, no asumir que el JS siempre corre a tiempo.**

## devToolbar deshabilitado (config de proyecto, no decisión de diseño)

`astro.config.mjs` tiene `devToolbar: { enabled: false }` porque el overlay
contaminaba las capturas de pantalla de página completa tomadas contra
`astro dev` durante revisión. Sesiones futuras que tomen screenshots no
deben sorprenderse de no verlo.

## Accesibilidad: hallazgos y fixes confirmados en el build

- Un solo `<h1>` por página: resuelto vía el prop `headingLevel` en
  `DayMoment` (ver arriba).
- Enlaces dentro de un contenedor `aria-hidden="true"` (el riel de
  `DayRail.astro`) llevan `tabindex="-1"` en cada `<a>` para no quedar
  enfocables por teclado mientras están ocultos de lectores de pantalla.
- Contraste Camel-sobre-claro: ver regla arriba.

## No canonizado (defectos del build, no reglas del sistema)

- El tratamiento gráfico de placeholder en la sección "Atardecer" (arco +
  degradado, sin foto real) es un relleno explícito por falta de foto,
  señalado en el código y en `PRODUCT.md`. No es un patrón de "placeholder
  gráfico" a reutilizar en otras páginas — se reemplaza por fotografía real
  en cuanto esté disponible.
- La tensión del sombrero de ala ancha en `cabalgata.png` con el guardrail
  western de §17 es un defecto de contenido disponible, mitigado pero no
  resuelto por grading/encuadre; documentado como deuda en `PRODUCT.md`,
  no legitimado aquí como estética aceptable.
- Los datos de contacto en `Footer.astro` (teléfono, ubicación) son
  placeholder explícito sin confirmar — no tratar esos valores como
  contenido real al copiar el componente a otra página.

# 20. Notas de implementación — Home portado desde Figma (2026-09-24)

Build reiniciado desde cero (ver decisión del usuario) y reconstruido a
partir del archivo real de Figma "Cabalgata-Cuatro-Tiempos" (Dev Mode MCP).
Registra decisiones nuevas que páginas futuras (Nosotros, Galería, FAQ,
Full day y el resto de fichas de experiencia) deben reutilizar.

## Tokens de color reconciliados con Figma

Los valores de §04 quedaban desactualizados frente a las variables reales
del archivo (`get_variable_defs`). `src/styles/tokens.css` ahora usa los
valores de Figma como fuente de verdad, con nombres alineados a los
nombres de variable de Figma en vez de los nombres descriptivos previos:

| Token nuevo (`tokens.css`) | Valor     | Token antiguo (§04)        |
| -------------------------- | --------- | -------------------------- |
| `--color-chocolate`        | `#2c2017` | Chocolate `#301713`        |
| `--color-dark-chocolate`   | `#140f0b` | (nuevo)                    |
| `--color-brown`            | `#624b38` | Earth Brown `#594034`      |
| `--color-camel`            | `#b68a58` | Camel `#a47f5e`            |
| `--color-dark-sand`        | `#d8c4a5` | Sand `#d8c4a5` (igual)     |
| `--color-sand`             | `#d4cabf` | (nuevo — texto sobre foto) |
| `--color-main`             | `#f1eae2` | Cream `#f1e5d1`            |
| `--color-secundary`        | `#f7f2ec` | Ivory `#faf6ee`            |
| `--color-text-image`       | `#f7f1e9` | (nuevo — texto sobre foto) |

**Regla de ahora en adelante.** Si una página futura necesita un color que
no está en esta tabla ni en `tokens.css`, extraerlo con `get_variable_defs`
del nodo de Figma correspondiente antes de inventar un hex — no reutilizar
los valores viejos de §04, que ya no reflejan el archivo real.

## Patrón: sprite CSS para una foto-contact-sheet cortada en N tiles

`GalleryPreview.astro` (franja de galería en Home) usa una sola imagen
(`src/assets/galeria/tira.png`) mostrada en 5 tiles como si fueran 5 fotos
distintas. Intentar esto con `<img>` + `object-position` por tile falla
cuando el aspect-ratio del tile es mucho más angosto que el de la imagen
fuente (el `object-fit: cover` de cada tile termina mostrando ventanas muy
anchas que se solapan casi por completo entre tiles vecinos — se ven casi
idénticos). El patrón correcto es CSS sprite: `getImage()` en el
frontmatter para obtener una URL optimizada, `background-image` en cada
tile, y `background-size`/`background-position-x` calculados a mano.

**`tira.png` no es una panorámica continua — es un contact-sheet con
margen crema horneado alrededor de cada foto y entre ellas** (medido:
celdas de ~416px de ancho separadas por ~19px de margen, dentro de una
imagen de 2171×724px). Usar `background-size: 500% 100%` (la fórmula
genérica "N tiles ⇒ N00%") estira ese margen junto con la foto y lo deja
visible como un marco crema alrededor de cada tile — bug real, no cosmético,
reproducido igual en Chromium y WebKit. Los valores correctos
(`background-size: 521% 152%`, `background-position-y: center`, con tiles `7 / 8` — cada celda mide ~417×481px, así que no conviene un tile más alto que ~`1 / 1.15` sin que reaparezca el margen crema) se
derivaron ubicando los bordes exactos de cada celda por escaneo de píxeles
contra el color de fondo, y calculando el factor de escala que hace que el
ancho de la celda cubra el ancho del tile preservando el aspect ratio real
de la foto (sin distorsión) — las posiciones X ya existentes (0/25/50/75/
100%) resultaron casi exactas porque las celdas están casi uniformemente
espaciadas. **Si se reemplaza `tira.png` por un contact-sheet nuevo, hay
que re-medir los bordes de celda — no asumir que la fórmula N00% funciona
sin verificar contra el archivo real.**

## Espaciado entre secciones apiladas

`.section` usa `margin-block: var(--section-spacing)` (no `padding-block`).
Con `margin`, el navegador colapsa automáticamente los márgenes de dos
`<section>` hermanas adyacentes — el hueco resultante es el mayor de los
dos valores, no la suma — así que `--section-spacing` puede usarse tal
cual el valor de §06 (`clamp(3.5rem, 7vw, 6.5rem)`, 56–104px) sin
compensar nada a mano. Esto reemplaza un intento anterior (documentado
aquí y ya obsoleto) que usaba `padding-block` y compensaba la duplicación
bajando el token a la mitad — funcionaba, pero cualquiera que tocara
`--section-spacing` sin conocer esa razón terminaba con espaciado
impredecible. **Al portar una página nueva, usar `class="section"` para
cualquier bloque sin fondo propio — el margin-collapse hace el trabajo
solo.** Una sección con fondo propio (como `Celebrate`) no puede usar
`margin` para su espaciado externo (el fondo no lo cubriría), así que
sigue usando `padding` a mano vía `var(--gutter)`/valores propios.

## Assets de Home

Fotos descargadas del archivo de Figma (vía Dev Mode MCP) a
`src/assets/inicio/`, `src/assets/experiencias/{cabalgata-2h,pilates-horses,celebra-a-tu-manera}/`,
`src/assets/galeria/` y `src/assets/testimonios/`. El logo del nav
reutiliza `public/brand/logo-mark.png` (ya existente) en vez del export
raster del nav de Figma, seguiendo la regla ya fijada en §19. La foto de
"Un día, muchos momentos" (`inicio/momento.png`) se repite igual en los 5
pasos porque así está en el archivo de Figma fuente — no es un bug, es
contenido pendiente de fotos reales por paso (igual que otros placeholders
ya señalados en este documento).

# 21. Notas de implementación — Nav global, timing del Hero y consistencia de botones (2026-09-27)

## Nav: de `Hero.astro` a `BaseLayout.astro`, fijo y con fondo condicional

`Nav.astro` vivía importado únicamente dentro de `Hero.astro`, que a su vez
solo se usa en `index.astro`. Consecuencia real: **faq.astro, nosotros.astro,
galeria.astro y experiencias/[slug].astro no tenían navegación en absoluto**.
Además `.nav` usaba `position: absolute` respecto a `.hero`, así que
desaparecía al hacer scroll en vez de quedarse fijo.

Solución aplicada:

- `Nav` se movió a `BaseLayout.astro`, como hermano de `<slot />` — ahora
  aparece en toda página que use el layout base.
- `.nav` pasó a `position: fixed` con `z-index: 50`.
- El fondo es condicional, no siempre visible: transparente por defecto
  (para no romper el look flotante del Hero, que ya tiene su propio scrim
  oscuro), y gana `background` sólido + `backdrop-filter: blur()` vía la
  clase `.nav--solid` cuando (a) la página no tiene `[data-hero]`, o (b) el
  usuario hace scroll más allá del alto del hero. La lógica vive en un
  script inline en `Nav.astro` que compara `window.scrollY` contra
  `hero.offsetHeight - nav.offsetHeight`.
- Páginas sin hero full-bleed (`faq`, `nosotros`, `galeria`,
  `experiencias/[slug]`) usan una clase utilitaria `.page` en su `<main>`
  (`padding-top: 6rem` en `global.css`) para compensar el nav fijo — la
  home no la necesita porque `.hero__content` ya reserva ese espacio
  internamente.

**Regla de ahora en adelante.** Cualquier nav/header global debe vivir en
`BaseLayout.astro`, nunca dentro de una sección específica como `Hero` —
de lo contrario queda atado al ciclo de vida de esa sección y desaparece en
páginas que no la usan.

## Carrusel del Hero: un solo reloj, no dos

El fill bar y el avance de slide usaban dos mecanismos de timing
independientes (una `animation` CSS de `duration` ms + un `setInterval` de
JS con el mismo `duration` nominal). Al ser relojes distintos, se
desincronizaban: la barra llegaba a 100% y se quedaba visualmente "llena"
un rato hasta que el timer de JS por fin disparaba el cambio. Un primer
intento de arreglo (disparar el avance desde el evento `animationend` de la
barra, eliminando el `setInterval`) resolvió el desfase pero introdujo un
punto único de falla: si el navegador no emitía `animationend` de forma
confiable (pestaña en segundo plano, animación cancelada en vez de
completada), el carrusel se quedaba pegado para siempre sin red de
seguridad.

Solución final: un único loop de `requestAnimationFrame` en `Hero.astro`
que calcula el tiempo transcurrido con `performance.now()` y, del mismo
cálculo, deriva tanto el ancho de la barra (`fill.style.width`) como el
momento de avanzar de slide. No depende de ningún evento de animación CSS
ni de un segundo timer — es imposible que ambas cosas se desincronicen
porque las controla el mismo número. Verificado con muestreo continuo
(14s+) sin estancamientos y tras simular una pestaña en segundo plano.

**Regla de ahora en adelante.** Para cualquier UI con dos elementos que
deben avanzar en sincronía (barra + contenido, progreso + estado), usar un
único loop/temporizador como fuente de verdad — nunca una `animation` CSS y
un timer de JS con la misma duración nominal esperando coincidir.

## Pausa por hover: acotada a controles, no a toda la sección

El hero ocupa `min-height: 100vh`, así que pausar el autoplay en
`mouseenter`/`mouseleave` de toda `.hero` significaba que el carrusel
quedaba pausado casi todo el tiempo que alguien lo estuviera viendo (el
cursor casi nunca sale del área). Los listeners de pausa ahora están solo
en los controles interactivos (`.hero__cta`, `.hero__slider`), no en la
sección completa. `data-slide-duration` quedó en `15000` (15s).

**Regla de ahora en adelante.** En cualquier componente a pantalla
completa o de gran superficie, la pausa por hover debe acotarse a los
controles reales (botones, indicadores), no a todo el contenedor.

## Botones: `button--secondary` completo, no reinventar overrides parciales

El CTA del Nav (`RESERVAR →`) usaba solo la clase base `.button` sin
`.button--secondary`, reimplementando a mano `border-color`/`color` en
`.nav__cta`. Efecto: sin la clase de variante, tampoco heredaba
`.button--secondary:hover` — el botón no cambiaba visualmente al pasar el
mouse, a diferencia del CTA del Hero que sí usa `button button--secondary`.
Fix: `Nav.astro` ahora usa `class="button button--secondary nav__cta"`; los
overrides propios de `.nav__cta` (padding más compacto, font-size) se
mantienen porque el Nav es un contexto más chico, pero el comportamiento de
hover y los valores de `font-weight`/`letter-spacing` ya vienen heredados
de `.button--secondary` en vez de reescribirse.

**Regla de ahora en adelante.** Un botón que use la variante `--secondary`
o `--primary` en un componente debe llevar esa clase completa, aunque el
componente sobreescriba tamaño/padding después — nunca replicar a mano
solo el color/borde sin la clase, porque eso descarta silenciosamente el
estado `:hover` definido junto a la variante.
