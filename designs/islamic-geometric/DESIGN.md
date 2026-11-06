---
version: "alpha"
name: "Islamic Geometric"
description: "Islamic Geometric visual system, translated from the Claude Artisan catalog for use in digital products. Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment"
colors:
  primary: "#066c72"
  background: "#f6eddb"
  surface: "#fffaf0"
  text: "#173a3a"
  accent: "#c69332"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
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
  sm: "4px"
  md: "2px"
  lg: "4px"
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
  order: 490
  author: "designmd.app"
  source: "https://designmd.app/library/islamic-geometric"
  tags: ["风格模板", "lapis", "turquoise", "and warm parchment"]
---
## Overview

Islamic Geometric visual system, translated from the Claude Artisan catalog for use in digital products. Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment

- **Category:** historical
- **Era:** 8th century-present
- **Origin:** Geometric ornament traditions across the Islamic world, built through repeated stars, polygons, and interlaced bands.
- **Reference:** Girih tilework at the Darb-i Imam shrine and Moorish geometric decoration at the Alhambra.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Measured star and polygon tessellations
- Ink, lapis, turquoise, and warm parchment
- Symmetry and repetition used as structural rhythm

## Colors

- **bg** — #f6eddb
- **surface** — #fffaf0
- **surface-2** — #e6d9be
- **text** — #173a3a
- **text-muted** — #49625e
- **primary** — #066c72
- **accent** — #c69332
- **lapis** — #214f87

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment; Symmetry and repetition used as structural rhythm; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/islamic-geometric · designmd.app -->
