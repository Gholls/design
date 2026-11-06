---
version: "alpha"
name: "Neon Sign / Tube"
description: "Neon Sign / Tube visual system, translated from the Claude Artisan catalog for use in digital products. Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom"
colors:
  primary: "#ff2ee0"
  background: "#0a0710"
  surface: "#150e22"
  text: "#fbeaff"
  accent: "#24f0ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Pacifico', 'Brush Script MT', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Futura', 'Poppins', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Futura', 'Poppins', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "14px"
  lg: "24px"
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
  order: 592
  author: "designmd.app"
  source: "https://designmd.app/library/neon-tube"
  tags: ["风格模板"]
---
## Overview

Neon Sign / Tube visual system, translated from the Claude Artisan catalog for use in digital products. Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom

- **Category:** texture
- **Era:** Signage heritage → web
- **Origin:** Neon-tube signage simulated with glow.
- **Reference:** Bar/nightlife branding; synthwave crossovers.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Glowing tube strokes on dark ground
- Saturated pink/cyan/orange light bloom
- Flicker and reflection
- Nightlife, retro, vivid

## Colors

- **bg** — #0a0710
- **surface** — #150e22
- **surface-strong** — #1f1530
- **border** — rgba(255, 79, 216, 0.35)
- **text** — #fbeaff
- **text-muted** — #c6a9d6
- **primary** — #ff2ee0
- **accent** — #24f0ff
- **orange** — #ff9d2e
- **glass-tube** — #2a1e3d

## Typography

- Display: 'Pacifico', 'Brush Script MT', cursive
- Body: 'Futura', 'Poppins', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom; Flicker and reflection; Nightlife, retro, vivid; sombras e elevação

## Shapes

- Radius scale: 6px, 14px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/neon-tube · designmd.app -->
