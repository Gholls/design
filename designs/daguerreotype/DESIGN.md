---
version: "alpha"
name: "Daguerreotype"
description: "Daguerreotype visual system, translated from the Claude Artisan catalog for use in digital products. Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges"
colors:
  primary: "#4a4238"
  background: "#d9d2c4"
  surface: "#eae5da"
  text: "#2b2621"
  accent: "#8a6d3a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Cormorant', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant', 'EB Garamond', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant', 'EB Garamond', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "40px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "16px"

gallery:
  order: 311
  author: "designmd.app"
  source: "https://designmd.app/library/daguerreotype"
  tags: ["风格模板"]
---
## Overview

Daguerreotype visual system, translated from the Claude Artisan catalog for use in digital products. Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges

- **Category:** historical
- **Era:** 1839–1860s
- **Origin:** Earliest commercially viable photographic process, invented by Louis Daguerre; formal studio portraiture in silver-plated copper.
- **Reference:** Southworth & Hawes studio portraits; early 1840s American daguerreotype cases.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Silvery monochrome tonal range with warm sepia-silver undertone
- Soft vignette falloff darkening toward the edges
- Oval or gilt-edge framing motifs around portraits and cards
- Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts

## Colors

- **bg** — #d9d2c4
- **surface** — #eae5da
- **surface-2** — #c9c0ac
- **text** — #2b2621
- **text-muted** — #5c5347
- **primary** — #4a4238
- **accent** — #8a6d3a
- **silver** — #b8b2a0
- **sepia** — #6b5a3f

## Typography

- Display: 'Playfair Display', 'Cormorant', serif
- Body: 'Cormorant', 'EB Garamond', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges; Oval or gilt-edge framing motifs around portraits and cards; Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 10px, 40px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/daguerreotype · designmd.app -->
