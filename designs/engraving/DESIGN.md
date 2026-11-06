---
version: "alpha"
name: "Engraving / Line Art"
description: "Engraving / Line Art visual system, translated from the Claude Artisan catalog for use in digital products. Fine hatching and cross-hatching for tone; Monochrome, high detail line work"
colors:
  primary: "#5a2e12"
  background: "#f2ead9"
  surface: "#ece1cb"
  text: "#1c140b"
  accent: "#8a6d3b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Didot', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Freight Text', 'Georgia', 'Iowan Old Style', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Freight Text', 'Georgia', 'Iowan Old Style', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "2px"
  lg: "3px"
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
  order: 358
  author: "designmd.app"
  source: "https://designmd.app/library/engraving"
  tags: ["风格模板"]
---
## Overview

Engraving / Line Art visual system, translated from the Claude Artisan catalog for use in digital products. Fine hatching and cross-hatching for tone; Monochrome, high detail line work

- **Category:** texture
- **Era:** Print heritage
- **Origin:** Old-master engraving/etching revival.
- **Reference:** Financial/whisky brand illustration; Ivan Ramen-style menus.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Fine hatching and cross-hatching for tone
- Monochrome, high detail line work
- Vintage currency/certificate feel
- Premium, heritage, editorial

## Colors

- **bg** — #f2ead9
- **surface** — #ece1cb
- **surface-strong** — #e4d5b8
- **border** — #2b2013
- **text** — #1c140b
- **text-muted** — #4a3a24
- **primary** — #5a2e12
- **accent** — #8a6d3b
- **ink** — #241a0e

## Typography

- Display: 'Playfair Display', 'Didot', 'Georgia', serif
- Body: 'Freight Text', 'Georgia', 'Iowan Old Style', serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Fine hatching and cross-hatching for tone; Monochrome, high detail line work; Vintage currency/certificate feel; Premium, heritage, editorial; sombras e elevação

## Shapes

- Radius scale: 2px, 2px, 3px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/engraving · designmd.app -->
