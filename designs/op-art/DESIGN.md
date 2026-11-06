---
version: "alpha"
name: "Op Art"
description: "Op Art visual system, translated from the Claude Artisan catalog for use in digital products. Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping"
colors:
  primary: "#0a0a0a"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#0a0a0a"
  accent: "#e10600"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Futura', 'Helvetica Neue', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
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
  order: 611
  author: "designmd.app"
  source: "https://designmd.app/library/op-art"
  tags: ["风格模板", "Op Art visual system", "depth", "and warping"]
---
## Overview

Op Art visual system, translated from the Claude Artisan catalog for use in digital products. Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping

- **Category:** historical
- **Era:** 1960s
- **Origin:** Bridget Riley, Victor Vasarely.
- **Reference:** Bridget Riley 'Movement in Squares'; Vasarely.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Black-and-white (or vibrating color) geometric patterns
- Illusions of motion, depth, and warping
- Precise repetition of lines/shapes
- Perceptual, hypnotic effects

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f0f0f0
- **border** — #0a0a0a
- **text** — #0a0a0a
- **text-muted** — #4a4a4a
- **primary** — #0a0a0a
- **accent** — #e10600

## Typography

- Display: 'Futura', 'Helvetica Neue', sans-serif
- Body: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping; Precise repetition of lines/shapes; Perceptual, hypnotic effects; sombras e elevação

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

<!-- Source: https://designmd.app/library/op-art · designmd.app -->
