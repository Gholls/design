---
version: "alpha"
name: "Editorial / Magazine"
description: "Editorial / Magazine visual system, translated from the Claude Artisan catalog for use in digital products. Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery"
colors:
  primary: "#8a2a1e"
  background: "#faf7f2"
  surface: "#ffffff"
  text: "#211d17"
  accent: "#1e4f4a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "3px"
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
  order: 338
  author: "designmd.app"
  source: "https://designmd.app/library/editorial-layout"
  tags: ["风格模板", "large imagery"]
---
## Overview

Editorial / Magazine visual system, translated from the Claude Artisan catalog for use in digital products. Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery

- **Category:** minimal-organic
- **Era:** Print heritage → web
- **Origin:** Magazine/print art direction adapted to screen.
- **Reference:** The New York Times; Kinfolk; editorial portfolio sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Strong typographic hierarchy, pull quotes
- Multi-column grids, large imagery
- Drop caps, captions, art-directed spreads
- Reading-first rhythm

## Colors

- **bg** — #faf7f2
- **surface** — #ffffff
- **surface-strong** — #f0ebe1
- **border** — #d8cfbe
- **text** — #211d17
- **text-muted** — #665c4a
- **primary** — #8a2a1e
- **accent** — #1e4f4a

## Typography

- Display: 'Playfair Display', 'Georgia', serif
- Body: 'Helvetica Neue', system-ui, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery; Drop caps, captions, art-directed spreads; Reading-first rhythm; sombras e elevação

## Shapes

- Radius scale: 2px, 3px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/editorial-layout · designmd.app -->
