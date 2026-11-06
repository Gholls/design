---
version: "alpha"
name: "Blueprint / Technical Drawing"
description: "Blueprint / Technical Drawing visual system, translated from the Claude Artisan catalog for use in digital products. White line-work on cyan/blue ground; Grid paper, dimension lines, callouts"
colors:
  primary: "#ffffff"
  background: "#0d3b66"
  surface: "#0f4a7d"
  text: "#eaf4ff"
  accent: "#ffb703"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Archivo', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Archivo', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Archivo', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 205
  author: "designmd.app"
  source: "https://designmd.app/library/blueprint"
  tags: ["风格模板", "dimension lines", "callouts"]
---
## Overview

Blueprint / Technical Drawing visual system, translated from the Claude Artisan catalog for use in digital products. White line-work on cyan/blue ground; Grid paper, dimension lines, callouts

- **Category:** texture
- **Era:** Drafting heritage
- **Origin:** Architectural/engineering cyanotype drawings.
- **Reference:** Product 'how it works' sections; engineering brand sites.
- **Structural base:** grade modular responsiva

**Defining traits:**
- White line-work on cyan/blue ground
- Grid paper, dimension lines, callouts
- Monospace annotations
- Precise, technical, honest

## Colors

- **bg** — #0d3b66
- **surface** — #0f4a7d
- **surface-strong** — #135a96
- **border** — #bcd9f0
- **text** — #eaf4ff
- **text-muted** — #9fc4e6
- **primary** — #ffffff
- **accent** — #ffb703

## Typography

- Display: 'Archivo', system-ui, sans-serif
- Body: 'Archivo', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'IBM Plex Mono', 'Courier New', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- White line-work on cyan/blue ground; Grid paper, dimension lines, callouts; Monospace annotations; Precise, technical, honest; sombras e elevação

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

<!-- Source: https://designmd.app/library/blueprint · designmd.app -->
