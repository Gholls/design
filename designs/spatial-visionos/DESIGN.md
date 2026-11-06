---
version: "alpha"
name: "Spatial / visionOS"
description: "Spatial / visionOS visual system, translated from the Claude Artisan catalog for use in digital products. Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy"
colors:
  primary: "#4da3ff"
  background: "#05070c"
  surface: "#05070c"
  text: "#f5f7fa"
  accent: "#b98cff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'SF Pro Display', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "14px"
  md: "22px"
  lg: "32px"
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
  order: 728
  author: "designmd.app"
  source: "https://designmd.app/library/spatial-visionos"
  tags: ["风格模板", "parallax"]
---
## Overview

Spatial / visionOS visual system, translated from the Claude Artisan catalog for use in digital products. Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy

- **Category:** glass
- **Era:** 2023–present
- **Origin:** Apple visionOS (Vision Pro, 2023–2024).
- **Reference:** Apple Vision Pro visionOS UI.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Floating glass panels in 3D space
- Depth, parallax, and light-based hierarchy
- Eye/hand-driven interaction affordances
- Translucent materials over the real world

## Colors

- **bg** — #05070c
- **bg-gradient-a** — #0a1220
- **bg-gradient-b** — #141b2e
- **surface** — rgba(255, 255, 255, 0.08)
- **surface-strong** — rgba(255, 255, 255, 0.14)
- **border** — rgba(255, 255, 255, 0.16)
- **text** — #f5f7fa
- **text-muted** — rgba(245, 247, 250, 0.70)
- **primary** — #4da3ff
- **accent** — #b98cff
- **glow** — rgba(77, 163, 255, 0.35)

## Typography

- Display: 'SF Pro Display', system-ui, sans-serif
- Body: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy; Eye/hand-driven interaction affordances; Translucent materials over the real world; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 14px, 22px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/spatial-visionos · designmd.app -->
