---
version: "alpha"
name: "Textile / Knit / Embroidery"
description: "Textile / Knit / Embroidery visual system, translated from the Claude Artisan catalog for use in digital products. Woven, knitted, or embroidered textures; Visible thread and stitch detail"
colors:
  primary: "#b5502f"
  background: "#efe6d8"
  surface: "#f7f1e6"
  text: "#3a2a20"
  accent: "#4a6b4d"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Fraunces', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "10px"
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
  order: 779
  author: "designmd.app"
  source: "https://designmd.app/library/textile"
  tags: ["风格模板", "knitted"]
---
## Overview

Textile / Knit / Embroidery visual system, translated from the Claude Artisan catalog for use in digital products. Woven, knitted, or embroidered textures; Visible thread and stitch detail

- **Category:** texture
- **Era:** Craft heritage
- **Origin:** Simulated fabric/stitch textures.
- **Reference:** Apparel brands; cozy holiday campaigns.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Woven, knitted, or embroidered textures
- Visible thread and stitch detail
- Warm tactile materiality
- Cozy, crafted

## Colors

- **bg** — #efe6d8
- **surface** — #f7f1e6
- **surface-strong** — #ece0cd
- **border** — #c9b28c
- **text** — #3a2a20
- **text-muted** — #6b5744
- **primary** — #b5502f
- **accent** — #4a6b4d
- **thread** — #d9c299

## Typography

- Display: 'Fraunces', 'Georgia', serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Woven, knitted, or embroidered textures; Visible thread and stitch detail; Warm tactile materiality; Cozy, crafted; sombras e elevação

## Shapes

- Radius scale: 6px, 10px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/textile · designmd.app -->
