---
version: "alpha"
name: "Halftone"
description: "Halftone visual system, translated from the Claude Artisan catalog for use in digital products. Dot grids simulate tone via dot size; Comic/newsprint texture"
colors:
  primary: "#e0263b"
  background: "#fdf6e8"
  surface: "#ffffff"
  text: "#16130f"
  accent: "#1f6fd6"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Bangers', 'Anton', 'Archivo Black', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Archivo Black', 'Helvetica Neue', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Archivo Black', 'Helvetica Neue', sans-serif"
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
  order: 455
  author: "designmd.app"
  source: "https://designmd.app/library/halftone"
  tags: ["风格模板"]
---
## Overview

Halftone visual system, translated from the Claude Artisan catalog for use in digital products. Dot grids simulate tone via dot size; Comic/newsprint texture

- **Category:** texture
- **Era:** Print heritage
- **Origin:** Newspaper/comic printing technique as aesthetic.
- **Reference:** Comic books; Roy Lichtenstein; retro posters.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Dot grids simulate tone via dot size
- Comic/newsprint texture
- Bold with CMYK registration feel
- Retro print nostalgia

## Colors

- **bg** — #fdf6e8
- **surface** — #ffffff
- **surface-strong** — #fff2c9
- **border** — #16130f
- **text** — #16130f
- **text-muted** — #4d463a
- **primary** — #e0263b
- **accent** — #1f6fd6
- **yellow** — #f6c93b

## Typography

- Display: 'Bangers', 'Anton', 'Archivo Black', sans-serif
- Body: 'Archivo Black', 'Helvetica Neue', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dot grids simulate tone via dot size; Comic/newsprint texture; Bold with CMYK registration feel; Retro print nostalgia; sombras e elevação

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

<!-- Source: https://designmd.app/library/halftone · designmd.app -->
