---
version: "alpha"
name: "Fauvism"
description: "Fauvism visual system, translated from the Claude Artisan catalog for use in digital products. Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube"
colors:
  primary: "#ff5e1a"
  background: "#fff8ee"
  surface: "#ffffff"
  text: "#1a1a1a"
  accent: "#1c3fab"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Fraunces', 'Playfair Display', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Fraunces', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Fraunces', 'Georgia', serif"
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
  order: 398
  author: "designmd.app"
  source: "https://designmd.app/library/fauvism"
  tags: ["风格模板", "non-naturalistic"]
---
## Overview

Fauvism visual system, translated from the Claude Artisan catalog for use in digital products. Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube

- **Category:** historical
- **Era:** 1904–1908
- **Origin:** Paris (Henri Matisse, Andre Derain, Maurice de Vlaminck); named after a critic called the painters 'les fauves' (wild beasts).
- **Reference:** Matisse 'Woman with a Hat' (1905); Derain's Collioure harbor paintings.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Wild, non-naturalistic, highly saturated clashing color
- Bold flat unmixed color fields applied straight from the tube
- Expressive, loose, brush-like edges and borders
- High-energy arbitrary palette: hot orange, cobalt, viridian, magenta

## Colors

- **bg** — #fff8ee
- **surface** — #ffffff
- **surface-2** — #ffe9d1
- **text** — #1a1a1a
- **text-muted** — #5c4a3a
- **primary** — #ff5e1a
- **accent** — #1c3fab
- **viridian** — #00a878
- **magenta** — #d6146b

## Typography

- Display: 'Fraunces', 'Playfair Display', serif
- Body: 'Fraunces', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube; Expressive, loose, brush-like edges and borders; High-energy arbitrary palette: hot orange, cobalt, viridian, magenta; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/fauvism · designmd.app -->
