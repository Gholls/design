---
version: "alpha"
name: "Space Western"
description: "Space Western visual system, translated from the Claude Artisan catalog for use in digital products. Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details"
colors:
  primary: "#d56b3e"
  background: "#17151a"
  surface: "#272129"
  text: "#f5e5c8"
  accent: "#74bcc1"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "12px"
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
  order: 726
  author: "designmd.app"
  source: "https://designmd.app/library/space-western"
  tags: ["风格模板"]
---
## Overview

Space Western visual system, translated from the Claude Artisan catalog for use in digital products. Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details

- **Category:** retrofuturism
- **Era:** 1950s-present
- **Origin:** Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft.
- **Reference:** Cowboy Bebop, Firefly, and the lived-in machinery of frontier science fiction.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dusty desert neutrals against nocturnal space
- Stenciled utility type and star-map details
- Weathered panels, stamped labels, and frontier red

## Colors

- **bg** — #17151a
- **surface** — #272129
- **surface-2** — #44363a
- **text** — #f5e5c8
- **text-muted** — #c6ae91
- **primary** — #d56b3e
- **accent** — #74bcc1
- **dust** — #b58b61

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details; Weathered panels, stamped labels, and frontier red; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 6px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/space-western · designmd.app -->
