---
version: "alpha"
name: "Mesh Gradient"
description: "Mesh Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions"
colors:
  primary: "#7c6bff"
  background: "#0b0b16"
  surface: "#0b0b16"
  text: "#f5f4fb"
  accent: "#ff8fd6"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cabinet Grotesk', 'Inter', sans-serif"
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
  sm: "10px"
  md: "16px"
  lg: "26px"
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
  order: 550
  author: "designmd.app"
  source: "https://designmd.app/library/mesh-gradient"
  tags: ["风格模板"]
---
## Overview

Mesh Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions

- **Category:** morphism
- **Era:** 2021–present
- **Origin:** Popularized by design tools (Mesh Gradient generators, Figma plugins).
- **Reference:** Stripe backgrounds; Apple event key art.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Multi-point smooth gradients that blend many hues
- Organic, cloud-like color transitions
- Used as hero backgrounds
- Often animated/shifting

## Colors

- **bg** — #0b0b16
- **surface** — rgba(255, 255, 255, 0.06)
- **surface-strong** — rgba(255, 255, 255, 0.11)
- **border** — rgba(255, 255, 255, 0.14)
- **text** — #f5f4fb
- **text-muted** — rgba(245, 244, 251, 0.70)
- **primary** — #7c6bff
- **accent** — #ff8fd6
- **mesh-a** — #4f46e5
- **mesh-b** — #06b6d4
- **mesh-c** — #f472b6
- **mesh-d** — #fbbf24

## Typography

- Display: 'Cabinet Grotesk', 'Inter', sans-serif
- Body: 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions; Used as hero backgrounds; Often animated/shifting; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 26px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/mesh-gradient · designmd.app -->
