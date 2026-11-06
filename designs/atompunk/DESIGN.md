---
version: "alpha"
name: "Atompunk"
description: "Atompunk visual system, translated from the Claude Artisan catalog for use in digital products. Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets"
colors:
  primary: "#e0692b"
  background: "#f7ecd2"
  surface: "#ffffff"
  text: "#14262b"
  accent: "#1c8c8c"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Futura', 'Poppins', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Futura', 'Poppins', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
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
  order: 167
  author: "designmd.app"
  source: "https://designmd.app/library/atompunk"
  tags: ["风格模板", "boomerangs", "atoms and rockets"]
---
## Overview

Atompunk visual system, translated from the Claude Artisan catalog for use in digital products. Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets

- **Category:** retrofuturism
- **Era:** 1998–present
- **Origin:** Retrofuturism of the atomic age (1945–1965).
- **Reference:** Fallout series UI; The Jetsons; mid-century ads.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Googie curves, boomerangs, starbursts
- Space-race optimism, atoms and rockets
- Teal, orange, chrome, formica
- Populuxe consumer futurism

## Colors

- **bg** — #f7ecd2
- **surface** — #ffffff
- **surface-strong** — #fdd9a5
- **border** — #1c3f4a
- **text** — #14262b
- **text-muted** — #3d5a61
- **primary** — #e0692b
- **accent** — #1c8c8c
- **chrome** — #9fb4b8

## Typography

- Display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif
- Body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets; Teal, orange, chrome, formica; Populuxe consumer futurism; sombras e elevação

## Shapes

- Radius scale: 4px, 40px 4px 40px 4px, 60px 8px 60px 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/atompunk · designmd.app -->
