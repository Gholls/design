---
version: "alpha"
name: "Cluttercore"
description: "Cluttercore visual system, translated from the Claude Artisan catalog for use in digital products. Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space"
colors:
  primary: "#b23a48"
  background: "#e8d9c0"
  surface: "#fff8ec"
  text: "#2b1d14"
  accent: "#d99a2b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fraunces', 'DM Serif Display', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Nunito', 'Poppins', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Nunito', 'Poppins', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
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
  order: 264
  author: "designmd.app"
  source: "https://designmd.app/library/cluttercore"
  tags: ["风格模板", "books", "no empty space"]
---
## Overview

Cluttercore visual system, translated from the Claude Artisan catalog for use in digital products. Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Cozy maximalist embrace of visible stuff.
- **Reference:** Cluttercore home tours.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Densely layered objects, books, trinkets
- Warm eclectic clutter, no empty space
- Personal, lived-in, collected
- Comfort in abundance

## Colors

- **bg** — #e8d9c0
- **surface** — #fff8ec
- **surface-strong** — #f4e8d0
- **border** — #2b1d14
- **text** — #2b1d14
- **text-muted** — #5c4632
- **primary** — #b23a48
- **accent** — #d99a2b
- **teal** — #2f6f6a
- **forest** — #4c7a5e

## Typography

- Display: 'Fraunces', 'DM Serif Display', Georgia, serif
- Body: 'Nunito', 'Poppins', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space; Personal, lived-in, collected; Comfort in abundance; sombras e elevação

## Shapes

- Radius scale: 8px, 14px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/cluttercore · designmd.app -->
