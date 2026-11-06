---
version: "alpha"
name: "Decopunk"
description: "Decopunk visual system, translated from the Claude Artisan catalog for use in digital products. Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk"
colors:
  primary: "#e3b23c"
  background: "#12100a"
  surface: "#1c1811"
  text: "#f6ecd6"
  accent: "#6fd3c7"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Poiret One', 'Broadway', 'Futura', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Futura', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Futura', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
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
  order: 321
  author: "designmd.app"
  source: "https://designmd.app/library/decopunk"
  tags: ["风格模板"]
---
## Overview

Decopunk visual system, translated from the Claude Artisan catalog for use in digital products. Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk

- **Category:** retrofuturism
- **Era:** 2010s–present
- **Origin:** Sleeker, brighter offshoot of dieselpunk (1920s–40s).
- **Reference:** BioShock (Rapture); The Great Gatsby (2013).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Polished Art Deco chrome and glamour
- Brighter palette than gritty dieselpunk
- Streamlined luxury machine age
- Gold, cream, chrome, geometric

## Colors

- **bg** — #12100a
- **surface** — #1c1811
- **surface-strong** — #262019
- **border** — #caa24b
- **text** — #f6ecd6
- **text-muted** — #cbb98f
- **primary** — #e3b23c
- **accent** — #6fd3c7
- **chrome** — #e9e4d8

## Typography

- Display: 'Poiret One', 'Broadway', 'Futura', serif
- Body: 'Century Gothic', 'Futura', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk; Streamlined luxury machine age; Gold, cream, chrome, geometric; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/decopunk · designmd.app -->
