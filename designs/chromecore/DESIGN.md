---
version: "alpha"
name: "Chromecore"
description: "Chromecore visual system, translated from the Claude Artisan catalog for use in digital products. Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections"
colors:
  primary: "#a78bfa"
  background: "#e8eaf0"
  surface: "#f4f5f9"
  text: "#1c1b2e"
  accent: "#f472b6"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Segoe UI', 'Trebuchet MS', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "16px"
  md: "28px"
  lg: "44px"
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
  order: 244
  author: "designmd.app"
  source: "https://designmd.app/library/chromecore"
  tags: ["风格模板", "mercury"]
---
## Overview

Chromecore visual system, translated from the Claude Artisan catalog for use in digital products. Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections

- **Category:** retrofuturism
- **Era:** 2020s (evokes Y2K)
- **Origin:** Revived Y2K metallic aesthetic.
- **Reference:** 2020s album covers; fashion (Balenciaga, Rui).
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Liquid/reflective chrome surfaces and type
- Silver, mercury, iridescent reflections
- Blobby metallic 3D forms
- Futuristic, sleek, cold

## Colors

- **bg** — #e8eaf0
- **surface** — #f4f5f9
- **surface-strong** — #ffffff
- **border** — #c3c8d6
- **text** — #1c1b2e
- **text-muted** — #4a4866
- **primary** — #a78bfa
- **accent** — #f472b6
- **mint** — #5eead4

## Typography

- Display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif
- Body: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections; Blobby metallic 3D forms; Futuristic, sleek, cold; sombras e elevação

## Shapes

- Radius scale: 16px, 28px, 44px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/chromecore · designmd.app -->
