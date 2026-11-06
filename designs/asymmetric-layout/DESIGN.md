---
version: "alpha"
name: "Asymmetric / Broken Grid"
description: "Asymmetric / Broken Grid visual system, translated from the Claude Artisan catalog for use in digital products. Intentional off-grid, overlapping elements; Dynamic tension and asymmetry"
colors:
  primary: "#ff3d1a"
  background: "#f5f4f0"
  surface: "#ffffff"
  text: "#101010"
  accent: "#1a1aff"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 165
  author: "designmd.app"
  source: "https://designmd.app/library/asymmetric-layout"
  tags: ["风格模板"]
---
## Overview

Asymmetric / Broken Grid visual system, translated from the Claude Artisan catalog for use in digital products. Intentional off-grid, overlapping elements; Dynamic tension and asymmetry

- **Category:** minimal-organic
- **Era:** 2017–present
- **Origin:** Reaction to templated symmetric layouts.
- **Reference:** Awwwards agency sites; fashion lookbooks.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Intentional off-grid, overlapping elements
- Dynamic tension and asymmetry
- Layered z-depth, diagonal flow
- Editorial, expressive

## Colors

- **bg** — #f5f4f0
- **surface** — #ffffff
- **surface-strong** — #101010
- **border** — #101010
- **text** — #101010
- **text-muted** — #55534c
- **primary** — #ff3d1a
- **accent** — #1a1aff

## Typography

- Display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
- Body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Intentional off-grid, overlapping elements; Dynamic tension and asymmetry; Layered z-depth, diagonal flow; Editorial, expressive; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/asymmetric-layout · designmd.app -->
