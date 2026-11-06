---
version: "alpha"
name: "Afrofuturism"
description: "Afrofuturism visual system, translated from the Claude Artisan catalog for use in digital products. Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines"
colors:
  primary: "#f4b942"
  background: "#100c1b"
  surface: "#1d1630"
  text: "#fff8df"
  accent: "#2dd4bf"
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
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "12px"
  lg: "24px"
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
  order: 120
  author: "designmd.app"
  source: "https://designmd.app/library/afrofuturism"
  tags: ["风格模板", "constellations", "and orbit lines"]
---
## Overview

Afrofuturism visual system, translated from the Claude Artisan catalog for use in digital products. Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines

- **Category:** retrofuturism
- **Era:** 1950s-present
- **Origin:** A Black cultural and artistic movement connecting the African diaspora with speculative technology, myth, and future-making.
- **Reference:** Sun Ra's cosmic visual language; the Afrofuturist world-building of Wakanda.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Celestial black grounds with sun-gold and electric color
- Strong radial systems, constellations, and orbit lines
- A future that references lineage, craft, and celebration

## Colors

- **bg** — #100c1b
- **surface** — #1d1630
- **surface-2** — #2c2145
- **text** — #fff8df
- **text-muted** — #d3c6b2
- **primary** — #f4b942
- **accent** — #2dd4bf
- **violet** — #a78bfa

## Typography

- Display: Georgia, serif
- Body: Inter, system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines; A future that references lineage, craft, and celebration; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 12px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/afrofuturism · designmd.app -->
