---
version: "alpha"
name: "Googie"
description: "Googie visual system, translated from the Claude Artisan catalog for use in digital products. Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers"
colors:
  primary: "#ff6b3d"
  background: "#f5ede0"
  surface: "#ffffff"
  text: "#1f2a44"
  accent: "#1fb6b0"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Broadway', 'Cooper Black', 'Futura', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Avant Garde', 'Futura', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Avant Garde', 'Futura', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
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
  order: 437
  author: "designmd.app"
  source: "https://designmd.app/library/googie"
  tags: ["风格模板", "Googie visual system", "boomerangs", "starbursts"]
---
## Overview

Googie visual system, translated from the Claude Artisan catalog for use in digital products. Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers

- **Category:** retrofuturism
- **Era:** 1945–1969
- **Origin:** Southern California car-culture architecture.
- **Reference:** LAX Theme Building; retro motel/diner signs.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Upswept roofs, boomerangs, starbursts, atoms
- Bold neon signage, cantilevers
- Space-age optimism
- Amoeba/kidney-bean shapes

## Colors

- **bg** — #f5ede0
- **surface** — #ffffff
- **surface-strong** — #fff2df
- **border** — #1f2a44
- **text** — #1f2a44
- **text-muted** — #4c5878
- **primary** — #ff6b3d
- **accent** — #1fb6b0
- **gold** — #f0b429

## Typography

- Display: 'Broadway', 'Cooper Black', 'Futura', sans-serif
- Body: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers; Space-age optimism; Amoeba/kidney-bean shapes; sombras e elevação

## Shapes

- Radius scale: 4px, 4px 24px 4px 24px, 8px 48px 8px 48px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/googie · designmd.app -->
