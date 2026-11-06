---
version: "alpha"
name: "Duotone"
description: "Duotone visual system, translated from the Claude Artisan catalog for use in digital products. Two-color gradient mapped onto photos; High-contrast bold pairings"
colors:
  primary: "#34d980"
  background: "#0e1f17"
  surface: "#133527"
  text: "#eafff2"
  accent: "#ff3e6c"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Gotham', 'Circular', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Circular', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Circular', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
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
  order: 336
  author: "designmd.app"
  source: "https://designmd.app/library/duotone"
  tags: ["风格模板"]
---
## Overview

Duotone visual system, translated from the Claude Artisan catalog for use in digital products. Two-color gradient mapped onto photos; High-contrast bold pairings

- **Category:** texture
- **Era:** Print heritage → 2015 web
- **Origin:** Spotify's 2015 rebrand mainstreamed digital duotone.
- **Reference:** Spotify 2015 identity; festival branding.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Two-color gradient mapped onto photos
- High-contrast bold pairings
- Unifies mixed imagery
- Punchy, modern, brand-forward

## Colors

- **bg** — #0e1f17
- **surface** — #133527
- **surface-strong** — #1a4732
- **border** — #2fae74
- **text** — #eafff2
- **text-muted** — #9fe3bd
- **primary** — #34d980
- **accent** — #ff3e6c
- **tone-shadow** — #0e1f17
- **tone-highlight** — #ff3e6c

## Typography

- Display: 'Gotham', 'Circular', system-ui, sans-serif
- Body: 'Circular', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Two-color gradient mapped onto photos; High-contrast bold pairings; Unifies mixed imagery; Punchy, modern, brand-forward; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/duotone · designmd.app -->
