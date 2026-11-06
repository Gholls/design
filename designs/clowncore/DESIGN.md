---
version: "alpha"
name: "Clowncore"
description: "Clowncore visual system, translated from the Claude Artisan catalog for use in digital products. Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin"
colors:
  primary: "#ff2d55"
  background: "#fef7e0"
  surface: "#ffffff"
  text: "#16161d"
  accent: "#ffd400"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "20px"
  lg: "32px"
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
  order: 255
  author: "designmd.app"
  source: "https://designmd.app/library/clowncore"
  tags: ["风格模板", "polka dots", "stripes; Ruffles", "checkerboard"]
---
## Overview

Clowncore visual system, translated from the Claude Artisan catalog for use in digital products. Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Circus/clown maximal color subculture.
- **Reference:** Clowncore fashion/edits.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Primary + rainbow clash, polka dots, stripes
- Ruffles, checkerboard, harlequin
- Playful-creepy circus motifs
- Chaotic, loud, campy

## Colors

- **bg** — #fef7e0
- **surface** — #ffffff
- **surface-strong** — #fff2f8
- **border** — #16161d
- **text** — #16161d
- **text-muted** — #514f5c
- **primary** — #ff2d55
- **accent** — #ffd400
- **blue** — #2f6fed
- **green** — #17b26a

## Typography

- Display: 'Fredoka', 'Baloo 2', system-ui, sans-serif
- Body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin; Playful-creepy circus motifs; Chaotic, loud, campy; sombras e elevação

## Shapes

- Radius scale: 8px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/clowncore · designmd.app -->
