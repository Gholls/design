---
version: "alpha"
name: "Teletext"
description: "Teletext visual system, translated from the Claude Artisan catalog for use in digital products. Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients"
colors:
  primary: "#00ff00"
  background: "#000000"
  surface: "#000000"
  text: "#ffffff"
  accent: "#00ff00"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Bedstead', 'Courier New', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Bedstead', 'Courier New', monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Bedstead', 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  sm: "16px"
  md: "24px"
  lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "32px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "24px"

gallery:
  order: 768
  author: "designmd.app"
  source: "https://designmd.app/library/teletext"
  tags: ["风格模板", "no gradients"]
---
## Overview

Teletext visual system, translated from the Claude Artisan catalog for use in digital products. Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients

- **Category:** niche
- **Era:** 1970s–90s
- **Origin:** Broadcast teletext services - BBC Ceefax and ITV Oracle in the UK (1974 onward), French videotex - decoded by dedicated receiver chips through the 1990s.
- **Reference:** BBC Ceefax; ITV Oracle; French Minitel terminal screens; teletext subtitle overlays.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Extremely low-res blocky mosaic character graphics
- Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients
- Monospaced blocky type only, no anti-aliasing
- Page-number navigation motif

## Colors

- **bg** — #000000
- **surface** — #000000
- **surface-2** — #1a1a1a
- **text** — #ffffff
- **text-muted** — #00ff00
- **primary** — #00ff00
- **red** — #ff0000
- **yellow** — #ffff00
- **blue** — #0000ff
- **magenta** — #ff00ff
- **cyan** — #00ffff
- **white** — #ffffff

## Typography

- Display: 'Bedstead', 'Courier New', monospace
- Body: 'Bedstead', 'Courier New', monospace
- Mono: 'Bedstead', 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients; Monospaced blocky type only, no anti-aliasing; Page-number navigation motif; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/teletext · designmd.app -->
