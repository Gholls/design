---
version: "alpha"
name: "Chrome / Liquid Metal"
description: "Chrome / Liquid Metal visual system, translated from the Claude Artisan catalog for use in digital products. Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light"
colors:
  primary: "#c7cdd6"
  background: "#1c1e22"
  surface: "#2a2d33"
  text: "#f1f3f5"
  accent: "#7dd3fc"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Arial, system-ui, sans-serif"
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
  order: 243
  author: "designmd.app"
  source: "https://designmd.app/library/chrome-metal"
  tags: ["风格模板", "gradients top-light"]
---
## Overview

Chrome / Liquid Metal visual system, translated from the Claude Artisan catalog for use in digital products. Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light

- **Category:** texture
- **Era:** 1990s & 2020s revival
- **Origin:** 90s 3D chrome + Y2K revival (2020s).
- **Reference:** 90s metal logos; 2020s chrome typography trend.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Reflective mirror-metal surfaces and type
- Environment-map reflections, gradients top-light
- Cold silver/steel with rainbow edge
- Heavy, premium, futuristic

## Colors

- **bg** — #1c1e22
- **surface** — #2a2d33
- **surface-strong** — #383c44
- **border** — #6b727e
- **text** — #f1f3f5
- **text-muted** — #b7bec8
- **primary** — #c7cdd6
- **accent** — #7dd3fc

## Typography

- Display: 'Helvetica Neue', Arial, system-ui, sans-serif
- Body: 'Helvetica Neue', Arial, system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light; Cold silver/steel with rainbow edge; Heavy, premium, futuristic; sombras e elevação

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

<!-- Source: https://designmd.app/library/chrome-metal · designmd.app -->
