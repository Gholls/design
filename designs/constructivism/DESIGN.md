---
version: "alpha"
name: "Constructivism"
description: "Constructivism visual system, translated from the Claude Artisan catalog for use in digital products. Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type"
colors:
  primary: "#d7261e"
  background: "#f0ece1"
  surface: "#ffffff"
  text: "#141414"
  accent: "#141414"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Anton', 'Oswald', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Alternate Gothic', 'Oswald', 'Anton', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Alternate Gothic', 'Oswald', 'Anton', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "32px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "32px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "48px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "32px"

gallery:
  order: 268
  author: "designmd.app"
  source: "https://designmd.app/library/constructivism"
  tags: ["风格模板", "black"]
---
## Overview

Constructivism visual system, translated from the Claude Artisan catalog for use in digital products. Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type

- **Category:** historical
- **Era:** 1915–1930s
- **Origin:** Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers).
- **Reference:** Rodchenko posters; El Lissitzky 'Beat the Whites with the Red Wedge'.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Bold diagonals and dynamic asymmetry
- Red, black, cream; heavy sans/slab type
- Photomontage, geometric shapes as propaganda
- Industrial, purposeful, revolutionary

## Colors

- **bg** — #f0ece1
- **surface** — #ffffff
- **text** — #141414
- **text-muted** — #3a3a3a
- **primary** — #d7261e
- **accent** — #141414
- **cream** — #f0ece1

## Typography

- Display: 'Anton', 'Oswald', sans-serif
- Body: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type; Photomontage, geometric shapes as propaganda; Industrial, purposeful, revolutionary; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/constructivism · designmd.app -->
