---
version: "alpha"
name: "VSCO Girl"
description: "VSCO Girl visual system, translated from the Claude Artisan catalog for use in digital products. Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells"
colors:
  primary: "#6fa8a3"
  background: "#f3ece1"
  surface: "#fbf7f0"
  text: "#4a4038"
  accent: "#e8a598"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Caveat', 'Poppins', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "18px"
  lg: "28px"
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
  order: 833
  author: "designmd.app"
  source: "https://designmd.app/library/vsco-girl"
  tags: ["风格模板", "Hydro Flasks", "seashells"]
---
## Overview

VSCO Girl visual system, translated from the Claude Artisan catalog for use in digital products. Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells

- **Category:** niche
- **Era:** 2019
- **Origin:** Summer-2019 teen aesthetic (named after VSCO app).
- **Reference:** 2019 VSCO/TikTok trend.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Faded warm film-filter photos
- Scrunchies, Hydro Flasks, seashells
- Beige/teal beachy palette
- Casual, sunny, laid-back

## Colors

- **bg** — #f3ece1
- **surface** — #fbf7f0
- **surface-strong** — #ece2d0
- **border** — #d8c9ae
- **text** — #4a4038
- **text-muted** — #8a7c68
- **primary** — #6fa8a3
- **accent** — #e8a598
- **shell** — #f0d9c0

## Typography

- Display: 'Caveat', 'Poppins', cursive
- Body: 'Poppins', 'Segoe UI', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells; Beige/teal beachy palette; Casual, sunny, laid-back; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/vsco-girl · designmd.app -->
