---
version: "alpha"
name: "Streamline Moderne"
description: "Streamline Moderne visual system, translated from the Claude Artisan catalog for use in digital products. Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms"
colors:
  primary: "#16414d"
  background: "#f2efe9"
  surface: "#ffffff"
  text: "#1c2226"
  accent: "#c9a34b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Poppins', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Poppins', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "20px"
  lg: "40px"
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
  order: 743
  author: "designmd.app"
  source: "https://designmd.app/library/streamline-moderne"
  tags: ["风格模板"]
---
## Overview

Streamline Moderne visual system, translated from the Claude Artisan catalog for use in digital products. Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms

- **Category:** historical
- **Era:** 1930s
- **Origin:** Late Art Deco offshoot, US industrial design.
- **Reference:** Chrysler Airflow; diners; ocean-liner graphics.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Aerodynamic curves and horizontal speed lines
- Rounded corners, nautical/machine forms
- Silver, cream, chrome accents
- Sleek, futuristic-for-its-time

## Colors

- **bg** — #f2efe9
- **surface** — #ffffff
- **surface-strong** — #e6e2d8
- **border** — #b9c1c6
- **text** — #1c2226
- **text-muted** — #52605f
- **primary** — #16414d
- **accent** — #c9a34b
- **chrome** — #9aa7ac

## Typography

- Display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif
- Body: 'Century Gothic', 'Poppins', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms; Silver, cream, chrome accents; Sleek, futuristic-for-its-time; sombras e elevação

## Shapes

- Radius scale: 10px, 20px, 40px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/streamline-moderne · designmd.app -->
