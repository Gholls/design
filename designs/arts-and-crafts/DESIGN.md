---
version: "alpha"
name: "Arts & Crafts"
description: "Arts & Crafts visual system, translated from the Claude Artisan catalog for use in digital products. Intricate botanical patterns and repeats; Handcraft over machine production"
colors:
  primary: "#7a2e2e"
  background: "#ece2cd"
  surface: "#fbf5e6"
  text: "#2b2013"
  accent: "#4a6741"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'IM Fell English', 'Crimson Text', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Crimson Text', 'EB Garamond', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Crimson Text', 'EB Garamond', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "4px"
  lg: "6px"
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
  order: 158
  author: "designmd.app"
  source: "https://designmd.app/library/arts-and-crafts"
  tags: ["风格模板"]
---
## Overview

Arts & Crafts visual system, translated from the Claude Artisan catalog for use in digital products. Intricate botanical patterns and repeats; Handcraft over machine production

- **Category:** historical
- **Era:** 1880s–1910
- **Origin:** UK (William Morris, John Ruskin).
- **Reference:** Morris & Co wallpapers; Kelmscott Press.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Intricate botanical patterns and repeats
- Handcraft over machine production
- Earthy natural palettes
- Ornamental borders, medieval revival type

## Colors

- **bg** — #ece2cd
- **surface** — #fbf5e6
- **surface-strong** — #e3d3ac
- **border** — #6b4a2b
- **text** — #2b2013
- **text-muted** — #5c4a30
- **primary** — #7a2e2e
- **accent** — #4a6741

## Typography

- Display: 'IM Fell English', 'Crimson Text', Georgia, serif
- Body: 'Crimson Text', 'EB Garamond', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Intricate botanical patterns and repeats; Handcraft over machine production; Earthy natural palettes; Ornamental borders, medieval revival type; sombras e elevação

## Shapes

- Radius scale: 3px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/arts-and-crafts · designmd.app -->
