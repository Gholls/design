---
version: "alpha"
name: "Film Grain / Noise"
description: "Film Grain / Noise visual system, translated from the Claude Artisan catalog for use in digital products. Subtle photographic grain over flat color; Analog warmth and texture"
colors:
  primary: "#d98c4a"
  background: "#211d1a"
  surface: "#2b2622"
  text: "#f2ece2"
  accent: "#7fa08f"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Canela', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Suisse Int\\'l', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Suisse Int\\'l', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
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
  order: 394
  author: "designmd.app"
  source: "https://designmd.app/library/film-grain"
  tags: ["风格模板"]
---
## Overview

Film Grain / Noise visual system, translated from the Claude Artisan catalog for use in digital products. Subtle photographic grain over flat color; Analog warmth and texture

- **Category:** texture
- **Era:** Analog film heritage
- **Origin:** Adding grain/noise to fight digital sterility.
- **Reference:** A24 film sites; premium editorial (grainy gradients).
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Subtle photographic grain over flat color
- Analog warmth and texture
- Reduces banding on gradients
- Cinematic, tactile

## Colors

- **bg** — #211d1a
- **surface** — #2b2622
- **surface-strong** — #35302a
- **border** — #4a423a
- **text** — #f2ece2
- **text-muted** — #bdb2a3
- **primary** — #d98c4a
- **accent** — #7fa08f

## Typography

- Display: 'Canela', 'Georgia', serif
- Body: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Subtle photographic grain over flat color; Analog warmth and texture; Reduces banding on gradients; Cinematic, tactile; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/film-grain · designmd.app -->
