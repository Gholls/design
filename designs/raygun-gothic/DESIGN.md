---
version: "alpha"
name: "Raygun Gothic"
description: "Raygun Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age"
colors:
  primary: "#ff5a36"
  background: "#0b1e3d"
  surface: "#12315e"
  text: "#f2f6ff"
  accent: "#2ee6d0"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Broadway', 'Futura', 'Arial Black', sans-serif"
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
  md: "12px"
  lg: "999px"
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
  order: 657
  author: "designmd.app"
  source: "https://designmd.app/library/raygun-gothic"
  tags: ["风格模板", "ray guns"]
---
## Overview

Raygun Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age

- **Category:** retrofuturism
- **Era:** 1930s–1960s (revived)
- **Origin:** Term popularized by William Gibson; pulp sci-fi + Googie.
- **Reference:** The Jetsons; Forbidden Planet; Tomorrowland.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Sleek rockets, ray guns, chrome fins
- Streamlined optimistic space age
- Bold geometric sans + starbursts
- 1950s 'World of Tomorrow' futurism

## Colors

- **bg** — #0b1e3d
- **surface** — #12315e
- **surface-strong** — #1a4180
- **border** — #8fb4e6
- **text** — #f2f6ff
- **text-muted** — #aac2e8
- **primary** — #ff5a36
- **accent** — #2ee6d0
- **chrome** — #c9d6e8

## Typography

- Display: 'Broadway', 'Futura', 'Arial Black', sans-serif
- Body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age; Bold geometric sans + starbursts; 1950s 'World of Tomorrow' futurism; sombras e elevação

## Shapes

- Radius scale: 4px, 12px, 999px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/raygun-gothic · designmd.app -->
