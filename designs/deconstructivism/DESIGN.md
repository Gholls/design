---
version: "alpha"
name: "Deconstructivism (Graphic)"
description: "Deconstructivism (Graphic) visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths"
colors:
  primary: "#ff2d1f"
  background: "#f0efe9"
  surface: "#ffffff"
  text: "#16151a"
  accent: "#1c3fff"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Univers', 'Franklin Gothic', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif"
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
  order: 320
  author: "designmd.app"
  source: "https://designmd.app/library/deconstructivism"
  tags: ["风格模板", "layered"]
---
## Overview

Deconstructivism (Graphic) visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths

- **Category:** brutalist
- **Era:** 1980s–1990s
- **Origin:** Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella.
- **Reference:** Cranbrook design work; Emigre magazine.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Fragmented, layered, exploded typography
- Rejection of the grid; ambiguous reading paths
- Overlap, rotation, and collision of elements
- Theory-driven, questions legibility

## Colors

- **bg** — #f0efe9
- **surface** — #ffffff
- **surface-strong** — #e6e3d8
- **border** — #16151a
- **text** — #16151a
- **text-muted** — #4a4854
- **primary** — #ff2d1f
- **accent** — #1c3fff

## Typography

- Display: 'Univers', 'Franklin Gothic', system-ui, sans-serif
- Body: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'OCR A Std', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths; Overlap, rotation, and collision of elements; Theory-driven, questions legibility; sombras e elevação

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

<!-- Source: https://designmd.app/library/deconstructivism · designmd.app -->
