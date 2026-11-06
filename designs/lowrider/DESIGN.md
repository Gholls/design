---
version: "alpha"
name: "Lowrider"
description: "Lowrider visual system, translated from the Claude Artisan catalog for use in digital products. Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type"
colors:
  primary: "#f05a9f"
  background: "#25071c"
  surface: "#3c0d30"
  text: "#fff1d6"
  accent: "#48d7df"
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
  md: "8px"
  lg: "18px"
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
  order: 526
  author: "designmd.app"
  source: "https://designmd.app/library/lowrider"
  tags: ["风格模板", "chrome", "ornamental frames"]
---
## Overview

Lowrider visual system, translated from the Claude Artisan catalog for use in digital products. Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type

- **Category:** niche
- **Era:** 1940s-present
- **Origin:** Chicano car culture and visual art, especially custom cars, pinstriping, murals, and Old English lettering.
- **Reference:** Southern California lowrider car shows, custom paint, and Chicano mural traditions.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Candy paint, chrome, and deep sunset color
- Pinstripes, ornamental frames, and hand-lettered display type
- Celebratory crafted detail rather than generic retro decoration

## Colors

- **bg** — #25071c
- **surface** — #3c0d30
- **surface-2** — #64143e
- **text** — #fff1d6
- **text-muted** — #e2b8c8
- **primary** — #f05a9f
- **accent** — #48d7df
- **gold** — #e6bc55

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type; Celebratory crafted detail rather than generic retro decoration; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 8px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/lowrider · designmd.app -->
