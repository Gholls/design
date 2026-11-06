---
version: "alpha"
name: "Cubism"
description: "Cubism visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)"
colors:
  primary: "#b5451f"
  background: "#e8dcc3"
  surface: "#f2e9d8"
  text: "#1c1610"
  accent: "#2b4c6f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, Helvetica Neue, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "4px"
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
  order: 287
  author: "designmd.app"
  source: "https://designmd.app/library/cubism"
  tags: ["风格模板", "Cubism visual system", "umber", "blue)"]
---
## Overview

Cubism visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)

- **Category:** historical
- **Era:** 1907–1920s
- **Origin:** Paris, Pablo Picasso and Georges Braque, developing from analytic cubism's monochrome fracturing into synthetic cubism's collaged, multi-colored planes.
- **Reference:** Picasso's Three Musicians and Still Life with Chair Caning; Braque's papier collé compositions.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives
- Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)
- Thin black contour lines separating each plane, planes overlapping at odd angles

## Colors

- **bg** — #e8dcc3
- **surface** — #f2e9d8
- **surface-2** — #d9c9a3
- **text** — #1c1610
- **text-muted** — #5c4f3a
- **primary** — #b5451f
- **accent** — #2b4c6f
- **ochre** — #c68a2e
- **ink** — #16130f

## Typography

- Display: Georgia, Times New Roman, serif
- Body: Arial, Helvetica Neue, sans-serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue); Thin black contour lines separating each plane, planes overlapping at odd angles; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/cubism · designmd.app -->
