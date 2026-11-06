---
version: "alpha"
name: "Talavera"
description: "Talavera visual system, translated from the Claude Artisan catalog for use in digital products. Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen"
colors:
  primary: "#0b2f52"
  background: "#f5f2ea"
  surface: "#ffffff"
  text: "#0b2f52"
  accent: "#d94f2b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Fraunces', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Fraunces', 'Playfair Display', system-ui, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Fraunces', 'Playfair Display', system-ui, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "28px"
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
  order: 766
  author: "designmd.app"
  source: "https://designmd.app/library/talavera"
  tags: ["风格模板"]
---
## Overview

Talavera visual system, translated from the Claude Artisan catalog for use in digital products. Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen

- **Category:** niche
- **Era:** 16th century-present
- **Origin:** Hand-painted, tin-glazed (majolica-style) ceramic tradition centered in Puebla, Mexico, blending Spanish-Moorish ceramic technique with Indigenous Mexican craft under a protected Denominación de Origen.
- **Reference:** Puebla's Talavera-tiled church façades and courtyards; Uriarte Talavera workshop pieces; hand-painted Talavera tableware.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Bold cobalt blue and white base with vivid multicolor floral/geometric motifs
- Glossy, glazed-tile surface sheen
- Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge

## Colors

- **bg** — #f5f2ea
- **surface** — #ffffff
- **surface-2** — #e7edf2
- **text** — #0b2f52
- **text-muted** — #3d5a75
- **primary** — #0b2f52
- **accent** — #d94f2b
- **yellow** — #f2b705
- **green** — #3f7d4c

## Typography

- Display: 'Playfair Display', 'Fraunces', serif
- Body: 'Fraunces', 'Playfair Display', system-ui, serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen; Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/talavera · designmd.app -->
