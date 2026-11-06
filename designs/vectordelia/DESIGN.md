---
version: "alpha"
name: "Vectordelia"
description: "Vectordelia visual system, translated from the Claude Artisan catalog for use in digital products. Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes"
colors:
  primary: "#0ea5e9"
  background: "#eaf6ff"
  surface: "#ffffff"
  text: "#0b2545"
  accent: "#ec4899"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Myriad Pro', 'Segoe UI', -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Myriad Pro', 'Segoe UI', -apple-system, sans-serif"
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
  order: 813
  author: "designmd.app"
  source: "https://designmd.app/library/vectordelia"
  tags: ["风格模板", "floral flourishes"]
---
## Overview

Vectordelia visual system, translated from the Claude Artisan catalog for use in digital products. Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes

- **Category:** retrofuturism
- **Era:** 2004–2010
- **Origin:** Mid-2000s vector-art trend (part of Frutiger family).
- **Reference:** Mid-2000s tech ads; Windows Vista promo art.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Swooping vector swirls and 'wirebirds'
- Glossy gradients, floral flourishes
- Bright saturated color
- Adobe Illustrator flourish era

## Colors

- **bg** — #eaf6ff
- **surface** — #ffffff
- **surface-strong** — #f2fbff
- **text** — #0b2545
- **text-muted** — #45607e
- **primary** — #0ea5e9
- **accent** — #ec4899
- **lime** — #a3e635
- **violet** — #8b5cf6

## Typography

- Display: 'Trebuchet MS', 'Segoe UI', sans-serif
- Body: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes; Bright saturated color; Adobe Illustrator flourish era; sombras e elevação

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

<!-- Source: https://designmd.app/library/vectordelia · designmd.app -->
