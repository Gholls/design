---
version: "alpha"
name: "Fantasy Cartography"
description: "Fantasy Cartography visual system, translated from the Claude Artisan catalog for use in digital products. Parchment with ink contours and terrain marks; Serif place names and compass geometry"
colors:
  primary: "#3f693f"
  background: "#e8d6ad"
  surface: "#f6e8c7"
  text: "#382b1b"
  accent: "#a94832"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "3px"
  lg: "8px"
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
  order: 390
  author: "designmd.app"
  source: "https://designmd.app/library/fantasy-cartography"
  tags: ["风格模板"]
---
## Overview

Fantasy Cartography visual system, translated from the Claude Artisan catalog for use in digital products. Parchment with ink contours and terrain marks; Serif place names and compass geometry

- **Category:** texture
- **Era:** contemporary
- **Origin:** Illustrated fantasy maps and tabletop-world guides that use parchment, contour lines, compass marks, and hand-inked terrain.
- **Reference:** Tabletop RPG campaign maps and illustrated fantasy atlases.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Parchment with ink contours and terrain marks
- Serif place names and compass geometry
- Routes, legends, and coordinate-like interfaces

## Colors

- **bg** — #e8d6ad
- **surface** — #f6e8c7
- **surface-2** — #d8c08c
- **text** — #382b1b
- **text-muted** — #755e3b
- **primary** — #3f693f
- **accent** — #a94832
- **ink** — #293e48

## Typography

- Display: Georgia, 'Times New Roman', serif
- Body: Georgia, serif
- Mono: 'Courier New', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Parchment with ink contours and terrain marks; Serif place names and compass geometry; Routes, legends, and coordinate-like interfaces; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 3px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/fantasy-cartography · designmd.app -->
