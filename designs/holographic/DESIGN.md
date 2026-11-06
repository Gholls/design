---
version: "alpha"
name: "Holographic / Iridescent"
description: "Holographic / Iridescent visual system, translated from the Claude Artisan catalog for use in digital products. Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence"
colors:
  primary: "#a0f0ff"
  background: "#0b0b12"
  surface: "#0b0b12"
  text: "#ffffff"
  accent: "#ff9ff3"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Space Grotesk', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', system-ui, sans-serif"
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
  order: 469
  author: "designmd.app"
  source: "https://designmd.app/library/holographic"
  tags: ["风格模板"]
---
## Overview

Holographic / Iridescent visual system, translated from the Claude Artisan catalog for use in digital products. Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence

- **Category:** texture
- **Era:** 2017–present
- **Origin:** Holographic foil / oil-slick trend.
- **Reference:** Holographic packaging; iridescent brand identities.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Rainbow gradient that shifts by angle
- Oil-slick / soap-bubble iridescence
- Metallic foil sheen on dark or white
- Futuristic, dreamy, premium

## Colors

- **bg** — #0b0b12
- **surface** — rgba(255,255,255,0.08)
- **text** — #ffffff
- **text-muted** — #c7c7d9
- **primary** — #a0f0ff
- **accent** — #ff9ff3
- **cyan** — #7cf9ff
- **pink** — #ff9ff3
- **lime** — #c8ff8f

## Typography

- Display: 'Space Grotesk', sans-serif
- Body: 'Space Grotesk', system-ui, sans-serif
- Mono: 'Space Mono', monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence; Metallic foil sheen on dark or white; Futuristic, dreamy, premium; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/holographic · designmd.app -->
