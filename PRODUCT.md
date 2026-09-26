# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (ya scaffoldeado en el repo: `astro@^7`, minimal starter).

## Users

- **Primario — Limeño buscando una escapada de fin de semana**: pareja,
  amigos o familia, buscando un plan distinto a la oferta habitual de ocio
  en Lima. El producto se diseña pensando primero en esta audiencia.
- **Secundario — Turistas/visitantes de Lima** (nacionales o extranjeros)
  buscando una experiencia auténtica cerca de la ciudad (Pachacámac)
  dentro de su viaje.
- **Secundario — Grupos/empresas que celebran algo**: cumpleaños,
  despedidas, eventos corporativos o team building, vía la experiencia
  "Celebra a tu Manera".

## Product Purpose

Cuatro Tiempos ofrece experiencias de campo alrededor de los caballos, la
naturaleza y los momentos compartidos en Pachacámac. La web debe permitir
imaginar la experiencia, entenderla, y reservarla — en ese orden. Éxito es
que la persona sienta que puede "escapar de la rutina" antes de evaluar
detalles logísticos, y que la reserva sea simple y sin fricción.

## Positioning

El diferencial no es el lugar en sí ni ser "otra cabalgata en Lima": es la
**curaduría de experiencia premium editorial** — dirección, fotografía,
ritmo y cuidado del detalle en cada momento (llegada, actividad,
gastronomía, cierre) al nivel de una marca de slow-luxury (referencia
Belmond/Aman), sin recurrir a los códigos de lujo clásico. Un competidor
puede copiar la ubicación o el precio; no puede copiar fácilmente ese nivel
de curaduría.

## Operating Context

- Finca/estancia física en Pachacámac donde ocurren las experiencias.
- Cuatro experiencias-producto ya definidas (ver Evidence on Hand) que
  estructuran todo el sitio: listado, ficha de detalle, y el flujo de
  reserva parte de ellas.
- El flujo de reserva (selección → datos → pago → confirmación) es, por
  ahora, solo interfaz: no hay pasarela de pago ni sistema de
  disponibilidad reales conectados todavía (ver Capabilities and
  Constraints).

## Capabilities and Constraints

- El flujo de Reserva se construye primero como UI/UX con **datos y
  estados simulados** (disponibilidad, pago, confirmación); la
  integración real de backend/pasarela de pago llega después, sin
  rediseño. Todo lo que sea mock debe quedar señalado en el código.
- Fotografía: debe sentirse documental/editorial, nunca de stock. El
  usuario irá compartiendo fotos y copy reales página por página a medida
  que se construyen; hasta entonces se usa contenido de placeholder
  claramente señalado como tal, nunca precios, beneficios o afirmaciones
  inventadas.
- Precios y horarios exactos de cada experiencia: el usuario los
  confirmará caso por caso al construir cada página.

## Brand Commitments

- Nombre y estructura de marca: "Cuatro Tiempos", experiencias de campo
  en Pachacámac (naturaleza + gastronomía + bienestar + personas +
  celebración).
- **Dirección visual (decidida en sesión de shape, reinicio de marca):**
  se evaluaron mundos visuales nuevos (papelería/ledger de hacienda,
  cartel de viaje peruano de mitad de siglo) frente al estándar de
  categoría; el usuario eligió explícitamente el estándar de categoría
  — slow-luxury editorial cálido — ejecutado a máxima fidelidad, no una
  identidad nueva. Vara de artesanía fijada por el usuario: Belmond,
  Aman, Six Senses. Material fotográfico del hero: fotografía documental
  cinematográfica a contraluz dorado (real, no plantilla) — tratamiento
  inspirado en el mood de referencia "SPIRIT" ya citado en el brief del
  home, explícitamente el mood, nunca su layout de plantilla genérica.
  Esta preferencia queda fija salvo que el usuario la reabra.

## Evidence on Hand

- Cuatro experiencias-producto confirmadas como reales (nombres y
  estructura del sitemap, no inventados), preservadas explícitamente en
  este reinicio: Full Day a Caballo, Pilates & Horses, Cabalgata 2h por
  el Valle, Celebra a tu Manera.
- Precios, horarios exactos, capacidad, ubicación exacta, testimonios y
  redes sociales: no confirmados aún a nivel global; se confirman página
  por página junto con el copy y las fotos reales que el usuario irá
  compartiendo. No inventar estos datos mientras tanto.
- **Pendiente de foto (Inicio, sección Cabalgata):** la única foto real
  disponible de la cabalgata muestra a los jinetes con sombreros de ala
  ancha que leen como estética vaquera/western, en tensión directa con el
  guardrail de marca "NO ES: Western, Cowboy" (a reconfirmar en la nueva
  dirección visual). Se evaluó atenuarlo con grading de color (aplicado
  en el build previo) y con recorte (no viable sin eliminar a las
  personas del encuadre, perdiendo el lado humano/social de la
  experiencia). Decisión anterior del usuario: publicar con la foto real
  tal como está en vez de bloquear el lanzamiento. Reemplazar por una
  foto real sin sombreros de ala ancha en cuanto esté disponible.

## Product Principles

1. La experiencia se comunica antes que el servicio: primero se ayuda a
   imaginarla, después se detallan sus características.
2. Un protagonista por bloque: nunca competir con múltiples CTAs, exceso
   de cards o decoración.
3. La fotografía es interfaz, no decoración: cada imagen ayuda a contar
   la experiencia, nunca queda como relleno.
4. El caballo es el corazón, no todo el universo: naturaleza,
   gastronomía, bienestar, personas y celebración pesan tanto como la
   cabalgata misma.
5. Claridad nunca se sacrifica por estética en el flujo de reserva
   (Booking Mode): el usuario siempre entiende dónde está y qué sigue.
