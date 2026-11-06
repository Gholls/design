---
version: "alpha"
name: "Circus / Carnival Poster"
description: "Circus / Carnival Poster visual system, translated from the Claude Artisan catalog for use in digital products. Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type)"
colors:
  primary: "#c81d25"
  background: "#f2e6c9"
  surface: "#fdf8ec"
  text: "#241812"
  accent: "#d4a017"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Josefin Sans', 'Oswald', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Josefin Sans', 'Oswald', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "14px"
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
  order: 248
  author: "designmd.app"
  source: "https://designmd.app/library/circus-carnival"
  tags: ["风格模板"]
---
## Overview

Circus / Carnival Poster visual system, translated from the Claude Artisan catalog for use in digital products. Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type)

- **Category:** niche
- **Era:** 1870s–1950s (revival ongoing)
- **Origin:** Vintage traveling-circus and carnival midway advertising posters and handbills, especially American circus lithography of the Strobridge / Barnum & Bailey era.
- **Reference:** Barnum & Bailey circus posters; Strobridge Lithographing Co. bills; state-fair midway signage.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Bold red/gold/cream striped and starburst backgrounds
- Tall theatrical condensed display lettering (bill/showman type)
- Ornate double-line scrolled borders
- High-energy showman excitement — 'step right up' urgency

## Colors

- **bg** — #f2e6c9
- **surface** — #fdf8ec
- **surface-2** — #e8d6a8
- **text** — #241812
- **text-muted** — #5c4429
- **primary** — #c81d25
- **accent** — #d4a017
- **navy** — #1c2a52
- **cream** — #f2e6c9

## Typography

- Display: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif
- Body: 'Josefin Sans', 'Oswald', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type); Ornate double-line scrolled borders; High-energy showman excitement — 'step right up' urgency; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 6px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/circus-carnival · designmd.app -->
