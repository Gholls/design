---
version: "alpha"
name: "Marble / Stone"
description: "Marble / Stone visual system, translated from the Claude Artisan catalog for use in digital products. Veined marble surfaces and swirls; Cream, black, green, gold veining"
colors:
  primary: "#1f3d33"
  background: "#f7f4ee"
  surface: "#fdfcf9"
  text: "#241f1a"
  accent: "#b08a3e"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Didot', 'Playfair Display', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', 'Georgia', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 536
  author: "designmd.app"
  source: "https://designmd.app/library/marble"
  tags: ["风格模板", "black", "green", "gold veining"]
---
## Overview

Marble / Stone visual system, translated from the Claude Artisan catalog for use in digital products. Veined marble surfaces and swirls; Cream, black, green, gold veining

- **Category:** texture
- **Era:** Timeless
- **Origin:** Natural stone as luxury material reference.
- **Reference:** Luxury/beauty branding; classical museum sites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Veined marble surfaces and swirls
- Cream, black, green, gold veining
- Premium, weighty, classical
- Fluid ink-marble variants

## Colors

- **bg** — #f7f4ee
- **surface** — #fdfcf9
- **surface-strong** — #efe9dd
- **border** — #d8cfbd
- **text** — #241f1a
- **text-muted** — #5c5346
- **primary** — #1f3d33
- **accent** — #b08a3e
- **vein** — #8a8272
- **vein-dark** — #38332b

## Typography

- Display: 'Didot', 'Playfair Display', 'Georgia', serif
- Body: 'Cormorant Garamond', 'Georgia', serif
- Mono: ui-monospace, 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Veined marble surfaces and swirls; Cream, black, green, gold veining; Premium, weighty, classical; Fluid ink-marble variants; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/marble · designmd.app -->
