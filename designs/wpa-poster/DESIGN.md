---
version: "alpha"
name: "WPA / Vintage Poster"
description: "WPA / Vintage Poster visual system, translated from the Claude Artisan catalog for use in digital products. Flat screen-printed color areas; Bold simplified shapes and shadows"
colors:
  primary: "#c1502e"
  background: "#e8d9b5"
  surface: "#f0e6c8"
  text: "#1c1c1c"
  accent: "#1c3d5a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Bebas Neue', 'Futura', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Futura', 'Century Gothic', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Futura', 'Century Gothic', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 852
  author: "designmd.app"
  source: "https://designmd.app/library/wpa-poster"
  tags: ["风格模板"]
---
## Overview

WPA / Vintage Poster visual system, translated from the Claude Artisan catalog for use in digital products. Flat screen-printed color areas; Bold simplified shapes and shadows

- **Category:** historical
- **Era:** 1935–1943
- **Origin:** US Works Progress Administration Federal Art Project.
- **Reference:** WPA national park posters; vintage airline/travel posters.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Flat screen-printed color areas
- Bold simplified shapes and shadows
- Limited ink palette, gradient skies
- Optimistic public-service messaging

## Colors

- **bg** — #e8d9b5
- **surface** — #f0e6c8
- **surface-strong** — #dcc98f
- **border** — #1c3d5a
- **text** — #1c1c1c
- **text-muted** — #4a3f2c
- **primary** — #c1502e
- **accent** — #1c3d5a
- **mustard** — #d69c2f

## Typography

- Display: 'Bebas Neue', 'Futura', sans-serif
- Body: 'Futura', 'Century Gothic', sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flat screen-printed color areas; Bold simplified shapes and shadows; Limited ink palette, gradient skies; Optimistic public-service messaging; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/wpa-poster · designmd.app -->
