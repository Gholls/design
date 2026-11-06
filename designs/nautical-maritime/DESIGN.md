---
version: "alpha"
name: "Nautical / Maritime"
description: "Nautical / Maritime visual system, translated from the Claude Artisan catalog for use in digital products. Navy and white stripe fields as the primary pattern language; Rope-texture borders and brass/rope-tan accent color"
colors:
  primary: "#0b1f38"
  background: "#f4f6f8"
  surface: "#ffffff"
  text: "#0b1f38"
  accent: "#b3391f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Oswald', 'Helvetica Neue', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
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
  order: 586
  author: "designmd.app"
  source: "https://designmd.app/library/nautical-maritime"
  tags: ["风格模板"]
---
## Overview

Nautical / Maritime visual system, translated from the Claude Artisan catalog for use in digital products. Navy and white stripe fields as the primary pattern language; Rope-texture borders and brass/rope-tan accent color

- **Category:** niche
- **Era:** 1850s-present
- **Origin:** Visual language of sailing and coastal life: naval uniform stripes, signal-flag systems, rope craft, and brass ship fittings, later adopted by New England yacht clubs and coastal resort branding.
- **Reference:** International maritime signal flags; brass ship instruments and portholes; New England yacht club burgees and uniforms.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Navy and white stripe fields as the primary pattern language
- Rope-texture borders and brass/rope-tan accent color
- Anchor and signal-flag iconography with crisp deck-of-a-ship precision

## Colors

- **bg** — #f4f6f8
- **surface** — #ffffff
- **surface-2** — #e4e9ee
- **text** — #0b1f38
- **text-muted** — #51667e
- **primary** — #0b1f38
- **accent** — #b3391f
- **brass** — #b8873a
- **rope-tan** — #d9c49a

## Typography

- Display: 'Oswald', 'Helvetica Neue', sans-serif
- Body: 'Inter', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Navy and white stripe fields as the primary pattern language; Rope-texture borders and brass/rope-tan accent color; Anchor and signal-flag iconography with crisp deck-of-a-ship precision; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/nautical-maritime · designmd.app -->
