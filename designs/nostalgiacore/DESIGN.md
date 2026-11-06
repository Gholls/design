---
version: "alpha"
name: "Nostalgiacore"
description: "Nostalgiacore visual system, translated from the Claude Artisan catalog for use in digital products. Faded photos of childhood/00s ephemera; Warm degraded color, timestamps"
colors:
  primary: "#c17a4e"
  background: "#e8dcc8"
  surface: "#f2e9d8"
  text: "#4a3d2c"
  accent: "#8a9a6b"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Courier New', 'Trebuchet MS', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
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
  order: 603
  author: "designmd.app"
  source: "https://designmd.app/library/nostalgiacore"
  tags: ["风格模板", "timestamps"]
---
## Overview

Nostalgiacore visual system, translated from the Claude Artisan catalog for use in digital products. Faded photos of childhood/00s ephemera; Warm degraded color, timestamps

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Broad nostalgia for the recent past.
- **Reference:** Nostalgiacore compilations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Faded photos of childhood/00s ephemera
- Warm degraded color, timestamps
- Familiar objects and places
- Wistful, comforting

## Colors

- **bg** — #e8dcc8
- **surface** — #f2e9d8
- **surface-strong** — #ede0c4
- **border** — #b8a37e
- **text** — #4a3d2c
- **text-muted** — #7a6a52
- **primary** — #c17a4e
- **accent** — #8a9a6b
- **sepia-tint** — rgba(163, 120, 63, 0.18)
- **timestamp** — #e8622c

## Typography

- Display: 'Courier New', 'Trebuchet MS', monospace
- Body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Faded photos of childhood/00s ephemera; Warm degraded color, timestamps; Familiar objects and places; Wistful, comforting; sombras e elevação

## Shapes

- Radius scale: 3px, 6px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/nostalgiacore · designmd.app -->
