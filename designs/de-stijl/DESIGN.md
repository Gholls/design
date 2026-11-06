---
version: "alpha"
name: "De Stijl / Neoplasticism"
description: "De Stijl / Neoplasticism visual system, translated from the Claude Artisan catalog for use in digital products. Only horizontals and verticals; thick black rules; Primary colors + white/gray/black"
colors:
  primary: "#d40000"
  background: "#f7f7f2"
  surface: "#ffffff"
  text: "#0d0d0d"
  accent: "#0000c8"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Archivo Black', 'Futura', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Futura', 'Century Gothic', 'Poppins', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Futura', 'Century Gothic', 'Poppins', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "32px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "32px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "48px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "32px"

gallery:
  order: 318
  author: "designmd.app"
  source: "https://designmd.app/library/de-stijl"
  tags: ["风格模板"]
---
## Overview

De Stijl / Neoplasticism visual system, translated from the Claude Artisan catalog for use in digital products. Only horizontals and verticals; thick black rules; Primary colors + white/gray/black

- **Category:** historical
- **Era:** 1917–1931
- **Origin:** Netherlands (Theo van Doesburg, Piet Mondrian).
- **Reference:** Mondrian 'Composition' paintings; Rietveld Schröder House.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Only horizontals and verticals; thick black rules
- Primary colors + white/gray/black
- Asymmetric rectangular compositions
- Pure abstraction, universal harmony

## Colors

- **bg** — #f7f7f2
- **surface** — #ffffff
- **text** — #0d0d0d
- **text-muted** — #333333
- **primary** — #d40000
- **accent** — #0000c8
- **yellow** — #ffd500
- **black** — #0d0d0d

## Typography

- Display: 'Archivo Black', 'Futura', sans-serif
- Body: 'Futura', 'Century Gothic', 'Poppins', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Only horizontals and verticals; thick black rules; Primary colors + white/gray/black; Asymmetric rectangular compositions; Pure abstraction, universal harmony; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/de-stijl · designmd.app -->
