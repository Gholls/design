---
version: "alpha"
name: "Psychedelic Art"
description: "Psychedelic Art visual system, translated from the Claude Artisan catalog for use in digital products. Warped, melting, hand-drawn lettering; Intense vibrating complementary colors"
colors:
  primary: "#00c2a8"
  background: "#ff5f9e"
  surface: "#ffe14d"
  text: "#1a0b2e"
  accent: "#6a1fd0"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Cooper Black', 'Baloo 2', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cooper Black', 'Baloo 2', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cooper Black', 'Baloo 2', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "12px"
  md: "8px"
  lg: "16px"
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
  order: 651
  author: "designmd.app"
  source: "https://designmd.app/library/psychedelic"
  tags: ["风格模板", "melting"]
---
## Overview

Psychedelic Art visual system, translated from the Claude Artisan catalog for use in digital products. Warped, melting, hand-drawn lettering; Intense vibrating complementary colors

- **Category:** historical
- **Era:** 1965–1971
- **Origin:** San Francisco (Wes Wilson, Victor Moscoso).
- **Reference:** Fillmore concert posters (Wes Wilson).
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Warped, melting, hand-drawn lettering
- Intense vibrating complementary colors
- Swirling Art-Nouveau-derived forms
- Kaleidoscopic symmetry

## Colors

- **bg** — #ff5f9e
- **surface** — #ffe14d
- **surface-strong** — #ff8a3d
- **border** — #1a0b2e
- **text** — #1a0b2e
- **text-muted** — #4b2c63
- **primary** — #00c2a8
- **accent** — #6a1fd0
- **vibrate-a** — #ff5f9e
- **vibrate-b** — #00c2a8

## Typography

- Display: 'Cooper Black', 'Baloo 2', cursive
- Body: 'Cooper Black', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Warped, melting, hand-drawn lettering; Intense vibrating complementary colors; Swirling Art-Nouveau-derived forms; Kaleidoscopic symmetry; sombras e elevação

## Shapes

- Radius scale: 12px, 40% 60% 55% 45% / 50% 40% 60% 50%, 60% 40% 30% 70% / 60% 30% 70% 40%.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/psychedelic · designmd.app -->
