---
version: "alpha"
name: "Glitch Art"
description: "Glitch Art visual system, translated from the Claude Artisan catalog for use in digital products. RGB channel split / chromatic aberration; Pixel sorting, block corruption, tearing"
colors:
  primary: "#ff003c"
  background: "#050505"
  surface: "#0d0d0d"
  text: "#f2f2f2"
  accent: "#00f0ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Major Mono Display', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Mono', 'Courier New', monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Mono', 'Courier New', monospace"
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
  order: 441
  author: "designmd.app"
  source: "https://designmd.app/library/glitch-art"
  tags: ["风格模板", "block corruption", "tearing"]
---
## Overview

Glitch Art visual system, translated from the Claude Artisan catalog for use in digital products. RGB channel split / chromatic aberration; Pixel sorting, block corruption, tearing

- **Category:** texture
- **Era:** 2010s–present
- **Origin:** Digital-error aesthetics (databending, datamoshing).
- **Reference:** Glitch music visuals; cyberpunk UIs; error-art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- RGB channel split / chromatic aberration
- Pixel sorting, block corruption, tearing
- Scan glitches, jitter, noise
- Broken-signal energy

## Colors

- **bg** — #050505
- **surface** — #0d0d0d
- **text** — #f2f2f2
- **text-muted** — #8a8a8a
- **primary** — #ff003c
- **accent** — #00f0ff
- **green** — #00ff5f
- **border** — #ff003c

## Typography

- Display: 'Major Mono Display', monospace
- Body: 'Space Mono', 'Courier New', monospace
- Mono: 'Space Mono', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- RGB channel split / chromatic aberration; Pixel sorting, block corruption, tearing; Scan glitches, jitter, noise; Broken-signal energy; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/glitch-art · designmd.app -->
