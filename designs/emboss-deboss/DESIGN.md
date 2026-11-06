---
version: "alpha"
name: "Emboss / Deboss"
description: "Emboss / Deboss visual system, translated from the Claude Artisan catalog for use in digital products. Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair"
colors:
  primary: "#7a5a3a"
  background: "#dbd6cb"
  surface: "#d3cebf"
  text: "#4a4538"
  accent: "#a8763f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Caslon', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Georgia', 'Iowan Old Style', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Georgia', 'Iowan Old Style', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
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
  order: 360
  author: "designmd.app"
  source: "https://designmd.app/library/emboss-deboss"
  tags: ["风格模板"]
---
## Overview

Emboss / Deboss visual system, translated from the Claude Artisan catalog for use in digital products. Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair

- **Category:** morphism
- **Era:** 2000s–present
- **Origin:** Print letterpress heritage adapted to screen (text-shadow technique).
- **Reference:** Letterpress text effects on textured web headers (~2010).
- **Structural base:** grade modular responsiva

**Defining traits:**
- Type looks stamped into or raised from the surface
- Subtle 1px light/dark text-shadow pair
- Works on textured/tinted backgrounds
- Tactile, premium feel

## Colors

- **bg** — #dbd6cb
- **surface** — #d3cebf
- **surface-strong** — #c8c2b0
- **border** — #b8b1a0
- **text** — #4a4538
- **text-muted** — #6e6857
- **primary** — #7a5a3a
- **accent** — #a8763f
- **shadow-lo** — rgba(60, 55, 40, 0.45)
- **shadow-hi** — rgba(255, 255, 250, 0.65)

## Typography

- Display: 'Caslon', 'Georgia', serif
- Body: 'Georgia', 'Iowan Old Style', serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair; Works on textured/tinted backgrounds; Tactile, premium feel; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/emboss-deboss · designmd.app -->
