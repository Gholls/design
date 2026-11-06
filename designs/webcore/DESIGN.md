---
version: "alpha"
name: "Webcore / Old Web"
description: "Webcore / Old Web visual system, translated from the Claude Artisan catalog for use in digital products. GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'"
colors:
  primary: "#0000ff"
  background: "#ff00ff"
  surface: "#c0c0c0"
  text: "#000000"
  accent: "#00ff00"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Comic Sans MS', 'Impact', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
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
  order: 839
  author: "designmd.app"
  source: "https://designmd.app/library/webcore"
  tags: ["风格模板", "tiled backgrounds", "GIFs; Guestbooks", "hit counters"]
---
## Overview

Webcore / Old Web visual system, translated from the Claude Artisan catalog for use in digital products. GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'

- **Category:** niche
- **Era:** 2019–present (evokes 1997–2005)
- **Origin:** Nostalgia for early personal internet.
- **Reference:** GeoCities/Angelfire pages; Neocities revival.
- **Structural base:** grade modular responsiva

**Defining traits:**
- GeoCities clutter, tiled backgrounds, GIFs
- Guestbooks, hit counters, 'under construction'
- Comic Sans, marquee, bevel buttons
- DIY, chaotic, nostalgic

## Colors

- **bg** — #ff00ff
- **surface** — #c0c0c0
- **surface-strong** — #e0e0e0
- **border** — #000080
- **text** — #000000
- **text-muted** — #333366
- **primary** — #0000ff
- **accent** — #00ff00
- **link-visited** — #800080

## Typography

- Display: 'Comic Sans MS', 'Impact', cursive
- Body: 'Comic Sans MS', 'Comic Neue', cursive
- Mono: 'Courier New', monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'; Comic Sans, marquee, bevel buttons; DIY, chaotic, nostalgic; sombras e elevação

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

<!-- Source: https://designmd.app/library/webcore · designmd.app -->
