---
version: "alpha"
name: "Retro Americana / Diner"
description: "Retro Americana / Diner visual system, translated from the Claude Artisan catalog for use in digital products. Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type"
colors:
  primary: "#d62828"
  background: "#fdf6e3"
  surface: "#ffffff"
  text: "#1a1a1a"
  accent: "#1fb6b0"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Pacifico', 'Brush Script MT', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
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
  order: 663
  author: "designmd.app"
  source: "https://designmd.app/library/americana-diner"
  tags: ["风格模板", "red vinyl"]
---
## Overview

Retro Americana / Diner visual system, translated from the Claude Artisan catalog for use in digital products. Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type

- **Category:** niche
- **Era:** 1950s revival
- **Origin:** Nostalgic 1950s US diner/roadside culture.
- **Reference:** 50s diners; Route 66 signage; Coca-Cola retro.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Chrome, red vinyl, checkerboard floors
- Neon signage, script + bold slab type
- Cherry red, cream, turquoise
- Nostalgic, wholesome, kitsch

## Colors

- **bg** — #fdf6e3
- **surface** — #ffffff
- **surface-strong** — #fff8ea
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #5c5346
- **primary** — #d62828
- **accent** — #1fb6b0
- **chrome** — #c9ccd1

## Typography

- Display: 'Pacifico', 'Brush Script MT', cursive
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type; Cherry red, cream, turquoise; Nostalgic, wholesome, kitsch; sombras e elevação

## Shapes

- Radius scale: 4px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/americana-diner · designmd.app -->
