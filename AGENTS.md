# Cabalgatas Cuatro Tiempos

Sitio web en Astro para una marca de experiencias de campo con caballos en Pachacámac (Lima). Contenido y copy en español.

## Contexto de producto y diseño

- Antes de trabajar en UI o copy, lee [PRODUCT.md](PRODUCT.md) (audiencia, propósito) y [design.md](design.md) (sistema de diseño).
- Usa solo los tokens de `src/styles/tokens.css`; no hardcodees colores, espaciados ni tipografías.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Verificación

Antes de dar una tarea por terminada:

- `npm run format` para formatear con Prettier (tabs, ancho 100).
- `npm run build` para confirmar que el sitio compila.

## Estructura

- `src/pages/`: rutas (`index`, `experiencias`, `nosotros`, `galeria`, `faq`).
- `src/components/`: `layout/`, `sections/` y `ui/`.
- `src/content/experiencias/`: content collection de experiencias (esquema en `src/content.config.ts`).
- `src/layouts/BaseLayout.astro`: layout base.
- `src/assets/`: imágenes procesadas por Astro.

## Convenciones

- Código en inglés; textos visibles al usuario en español.
- Commits con Conventional Commits: `feat(scope): ...`, `fix(scope): ...`.
- No hagas commits ni stagees cambios (`git add`/`git commit`): los commits los hace el usuario. Si pide "armar el commit", solo propón el mensaje y qué archivos incluir.
- No edites `dist/` ni `.astro/` (son generados).
- No agregues dependencias ni frameworks (React, Tailwind, etc.) sin consultar.

## Documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
