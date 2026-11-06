---
version: "alpha"
name: "Mallsoft"
description: "Mallsoft visual system, translated from the Claude Artisan catalog for use in digital products. Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette"
colors:
  primary: "#d98fae"
  background: "#2f3b3a"
  surface: "#3d4c48"
  text: "#f1ead9"
  accent: "#6fb8ae"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Copperplate', 'Trebuchet MS', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
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
  order: 532
  author: "designmd.app"
  source: "https://designmd.app/library/mallsoft"
  tags: ["风格模板"]
---
## Overview

Mallsoft visual system, translated from the Claude Artisan catalog for use in digital products. Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette

- **Category:** niche
- **Era:** 2014–present
- **Origin:** Vaporwave subgenre evoking dead shopping malls.
- **Reference:** Mallsoft album art; dead-mall photography.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Empty-mall photography, muzak nostalgia
- Faded teal/beige 90s retail palette
- Fountains, food courts, plants
- Melancholic consumer nostalgia

## Colors

- **bg** — #2f3b3a
- **surface** — #3d4c48
- **surface-strong** — #4a5c56
- **border** — rgba(212, 196, 168, 0.28)
- **text** — #f1ead9
- **text-muted** — #c9c0a8
- **primary** — #d98fae
- **accent** — #6fb8ae
- **fountain** — #7fa39c
- **marquee** — #e0b060

## Typography

- Display: 'Copperplate', 'Trebuchet MS', serif
- Body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette; Fountains, food courts, plants; Melancholic consumer nostalgia; sombras e elevação

## Shapes

- Radius scale: 3px, 6px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/mallsoft · designmd.app -->
