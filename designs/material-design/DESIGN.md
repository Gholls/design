---
version: "alpha"
name: "Material Design (M2)"
description: "Material Design (M2) visual system, translated from the Claude Artisan catalog for use in digital products. Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system"
colors:
  primary: "#6200ee"
  background: "#fafafa"
  surface: "#ffffff"
  text: "#212121"
  accent: "#03dac6"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Roboto', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Roboto', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Roboto', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "4px"
  lg: "8px"
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
  order: 540
  author: "designmd.app"
  source: "https://designmd.app/library/material-design"
  tags: ["风格模板"]
---
## Overview

Material Design (M2) visual system, translated from the Claude Artisan catalog for use in digital products. Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system

- **Category:** flat-platform
- **Era:** 2014–2021
- **Origin:** Google, introduced 2014.
- **Reference:** Android; Google apps (2014–2021).
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Material metaphor: paper and ink with real elevation
- Consistent shadow/elevation system
- Bold color, meaningful motion, grid-based
- Floating action button, ripple feedback

## Colors

- **bg** — #fafafa
- **surface** — #ffffff
- **surface-strong** — #eeeeee
- **border** — #e0e0e0
- **text** — #212121
- **text-muted** — #616161
- **primary** — #6200ee
- **accent** — #03dac6
- **primary-variant** — #3700b3
- **error** — #b00020

## Typography

- Display: 'Roboto', system-ui, sans-serif
- Body: 'Roboto', 'Segoe UI', system-ui, sans-serif
- Mono: 'Roboto Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system; Bold color, meaningful motion, grid-based; Floating action button, ripple feedback; sombras e elevação

## Shapes

- Radius scale: 4px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/material-design · designmd.app -->
