---
version: "alpha"
name: "Gorpcore"
description: "Gorpcore visual system, translated from the Claude Artisan catalog for use in digital products. Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette"
colors:
  primary: "#3c5a3e"
  background: "#e8e4d8"
  surface: "#f2efe6"
  text: "#24221b"
  accent: "#e8630a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Bebas Neue', 'Oswald', Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', 'Inter', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', 'Inter', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
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
  order: 439
  author: "designmd.app"
  source: "https://designmd.app/library/gorpcore"
  tags: ["风格模板"]
---
## Overview

Gorpcore visual system, translated from the Claude Artisan catalog for use in digital products. Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette

- **Category:** niche
- **Era:** 2017–present
- **Origin:** Fashion trend elevating technical outdoor gear ('GORP').
- **Reference:** Arc'teryx/Salomon-driven fashion.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Technical outdoor apparel as everyday style
- Earthy + hi-vis accent palette
- Functional, rugged, utilitarian
- Trail/mountain aesthetic

## Colors

- **bg** — #e8e4d8
- **surface** — #f2efe6
- **surface-strong** — #ddd7c4
- **border** — #4a4638
- **text** — #24221b
- **text-muted** — #565243
- **primary** — #3c5a3e
- **accent** — #e8630a
- **hi-vis** — #d7ff3f

## Typography

- Display: 'Bebas Neue', 'Oswald', Arial, sans-serif
- Body: 'Helvetica Neue', 'Inter', Arial, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette; Functional, rugged, utilitarian; Trail/mountain aesthetic; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/gorpcore · designmd.app -->
