---
version: "alpha"
name: "Balletcore"
description: "Balletcore visual system, translated from the Claude Artisan catalog for use in digital products. Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic"
colors:
  primary: "#c98a9c"
  background: "#fdf3f1"
  surface: "#fffbfa"
  text: "#5a3a3f"
  accent: "#b9a6d9"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif"
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
  order: 175
  author: "designmd.app"
  source: "https://designmd.app/library/balletcore"
  tags: ["风格模板", "cream", "tulle", "ribbon; Delicate"]
---
## Overview

Balletcore visual system, translated from the Claude Artisan catalog for use in digital products. Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic

- **Category:** niche
- **Era:** 2022–present
- **Origin:** Ballet-inspired soft feminine aesthetic.
- **Reference:** Balletcore fashion moodboards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Soft pinks, cream, tulle, ribbon
- Delicate, graceful, romantic
- Serif/script accents
- Ethereal femininity

## Colors

- **bg** — #fdf3f1
- **surface** — #fffbfa
- **surface-strong** — #fbe4e3
- **border** — #e7b8bd
- **text** — #5a3a3f
- **text-muted** — #8a6266
- **primary** — #c98a9c
- **accent** — #b9a6d9

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Nunito', 'Quicksand', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic; Serif/script accents; Ethereal femininity; sombras e elevação

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

<!-- Source: https://designmd.app/library/balletcore · designmd.app -->
