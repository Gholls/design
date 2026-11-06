---
version: "alpha"
name: "Terrazzo"
description: "Terrazzo visual system, translated from the Claude Artisan catalog for use in digital products. Speckled chip pattern on solid ground; Playful multicolor flecks"
colors:
  primary: "#e2574c"
  background: "#f7f3ec"
  surface: "#ffffff"
  text: "#221f1a"
  accent: "#2f9e8f"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Poppins', 'Fraunces', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Nunito', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Nunito', system-ui, sans-serif"
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
  order: 775
  author: "designmd.app"
  source: "https://designmd.app/library/terrazzo"
  tags: ["风格模板"]
---
## Overview

Terrazzo visual system, translated from the Claude Artisan catalog for use in digital products. Speckled chip pattern on solid ground; Playful multicolor flecks

- **Category:** texture
- **Era:** Ancient → 2018 revival
- **Origin:** Venetian composite flooring; graphic revival ~2018.
- **Reference:** 2018-era brand patterns; interior design.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Speckled chip pattern on solid ground
- Playful multicolor flecks
- Soft pastel or bold color chips
- Fresh, tactile, retro-modern

## Colors

- **bg** — #f7f3ec
- **surface** — #ffffff
- **surface-strong** — #efe8db
- **border** — #e0d6c2
- **text** — #221f1a
- **text-muted** — #5c564a
- **primary** — #e2574c
- **accent** — #2f9e8f
- **chip-a** — #f2b705
- **chip-b** — #7c5cff
- **chip-c** — #2f9e8f
- **chip-d** — #e2574c

## Typography

- Display: 'Poppins', 'Fraunces', system-ui, sans-serif
- Body: 'Poppins', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Speckled chip pattern on solid ground; Playful multicolor flecks; Soft pastel or bold color chips; Fresh, tactile, retro-modern; sombras e elevação

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

<!-- Source: https://designmd.app/library/terrazzo · designmd.app -->
