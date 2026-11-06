---
version: "alpha"
name: "Samsung One UI"
description: "Samsung One UI visual system, translated from the Claude Artisan catalog for use in digital products. Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use"
colors:
  primary: "#1259e3"
  background: "#f5f6f8"
  surface: "#ffffff"
  text: "#1c1c1e"
  accent: "#0091ff"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'SamsungOne', -apple-system, system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "14px"
  md: "20px"
  lg: "28px"
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
  order: 694
  author: "designmd.app"
  source: "https://designmd.app/library/one-ui"
  tags: ["风格模板"]
---
## Overview

Samsung One UI visual system, translated from the Claude Artisan catalog for use in digital products. Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use

- **Category:** flat-platform
- **Era:** 2018–present
- **Origin:** Samsung, One UI (2018).
- **Reference:** Samsung Galaxy phones.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Large rounded content zones, reachable UI
- Bottom-weighted layouts for one-handed use
- Soft neutral surfaces, clear color
- Calm, spacious Android skin

## Colors

- **bg** — #f5f6f8
- **surface** — #ffffff
- **surface-strong** — #eef1f6
- **border** — #e1e5ec
- **text** — #1c1c1e
- **text-muted** — #6b7079
- **primary** — #1259e3
- **accent** — #0091ff

## Typography

- Display: 'SamsungOne', -apple-system, system-ui, sans-serif
- Body: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use; Soft neutral surfaces, clear color; Calm, spacious Android skin; sombras e elevação

## Shapes

- Radius scale: 14px, 20px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/one-ui · designmd.app -->
