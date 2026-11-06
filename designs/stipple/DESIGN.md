---
version: "alpha"
name: "Stipple / Pointillism"
description: "Stipple / Pointillism visual system, translated from the Claude Artisan catalog for use in digital products. Tone built from dots of varying density; Fine detailed dotwork portraits"
colors:
  primary: "#2b2620"
  background: "#f7f5ef"
  surface: "#ffffff"
  text: "#1e1c17"
  accent: "#a1361c"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Georgia', 'Source Serif Pro', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Georgia', 'Source Serif Pro', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
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
  order: 738
  author: "designmd.app"
  source: "https://designmd.app/library/stipple"
  tags: ["风格模板"]
---
## Overview

Stipple / Pointillism visual system, translated from the Claude Artisan catalog for use in digital products. Tone built from dots of varying density; Fine detailed dotwork portraits

- **Category:** texture
- **Era:** Print/art heritage
- **Origin:** Engraving stipple and Seurat's pointillism.
- **Reference:** Wall Street Journal hedcuts; Seurat.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Tone built from dots of varying density
- Fine detailed dotwork portraits
- WSJ 'hedcut' style
- Refined, editorial, tactile

## Colors

- **bg** — #f7f5ef
- **surface** — #ffffff
- **surface-strong** — #ece8dc
- **border** — #cfc9b8
- **text** — #1e1c17
- **text-muted** — #5e594c
- **primary** — #2b2620
- **accent** — #a1361c
- **dot** — #1e1c17

## Typography

- Display: 'Playfair Display', 'Georgia', serif
- Body: 'Georgia', 'Source Serif Pro', serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Tone built from dots of varying density; Fine detailed dotwork portraits; WSJ 'hedcut' style; Refined, editorial, tactile; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/stipple · designmd.app -->
