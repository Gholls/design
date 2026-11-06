---
version: "alpha"
name: "Brat"
description: "Brat visual system, translated from the Claude Artisan catalog for use in digital products. Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text"
colors:
  primary: "#0e0e0e"
  background: "#8ace00"
  surface: "#97d611"
  text: "#0e0e0e"
  accent: "#ffffff"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
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
  order: 212
  author: "designmd.app"
  source: "https://designmd.app/library/brat"
  tags: ["风格模板", "Brat visual system"]
---
## Overview

Brat visual system, translated from the Claude Artisan catalog for use in digital products. Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text

- **Category:** niche
- **Era:** 2024–present
- **Origin:** Charli XCX 'Brat' album (2024).
- **Reference:** Charli XCX 'Brat' album cover and campaign.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Single toxic lime-green (#8ACE00-ish) field
- Low-res stretched Arial-style text
- Deliberately blunt and lo-fi
- Confrontational, cool, ironic

## Colors

- **bg** — #8ace00
- **surface** — #97d611
- **surface-strong** — #a4e022
- **border** — #111111
- **text** — #0e0e0e
- **text-muted** — #2c2c2c
- **primary** — #0e0e0e
- **accent** — #ffffff

## Typography

- Display: Arial, 'Helvetica Neue', sans-serif
- Body: Arial, 'Helvetica Neue', sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text; Deliberately blunt and lo-fi; Confrontational, cool, ironic; sombras e elevação

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

<!-- Source: https://designmd.app/library/brat · designmd.app -->
