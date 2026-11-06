---
version: "alpha"
name: "Grainy Gradient"
description: "Grainy Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility"
colors:
  primary: "#ff8a5c"
  background: "#1c1626"
  surface: "#241d31"
  text: "#f4f1f8"
  accent: "#7c6cf0"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Söhne', 'Inter', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
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
  order: 449
  author: "designmd.app"
  source: "https://designmd.app/library/gradient-noise"
  tags: ["风格模板", "adds tactility"]
---
## Overview

Grainy Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility

- **Category:** texture
- **Era:** 2021–present
- **Origin:** Adding grain to smooth gradients for depth.
- **Reference:** Vercel/Linear backgrounds; A24-style sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Smooth color gradient overlaid with fine grain
- Reduces banding, adds tactility
- Soft dreamy color fields
- Premium editorial feel

## Colors

- **bg** — #1c1626
- **surface** — #241d31
- **surface-strong** — #2e2540
- **border** — rgba(255,255,255,0.10)
- **text** — #f4f1f8
- **text-muted** — #b8aec7
- **primary** — #ff8a5c
- **accent** — #7c6cf0
- **grad-a** — #2a1b3d
- **grad-b** — #6b3fa0
- **grad-c** — #ff8a5c

## Typography

- Display: 'Söhne', 'Inter', system-ui, sans-serif
- Body: 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility; Soft dreamy color fields; Premium editorial feel; sombras e elevação

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

<!-- Source: https://designmd.app/library/gradient-noise · designmd.app -->
