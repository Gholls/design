---
version: "alpha"
name: "Amiga Workbench"
description: "Amiga Workbench visual system, translated from the Claude Artisan catalog for use in digital products. Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black"
colors:
  primary: "#0055aa"
  background: "#a8a8a8"
  surface: "#ffffff"
  text: "#000000"
  accent: "#ff8800"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Topaz New', 'Press Start 2P', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Topaz New', 'Press Start 2P', 'Courier New', monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Topaz New', 'Press Start 2P', 'Courier New', monospace"
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
  order: 130
  author: "designmd.app"
  source: "https://designmd.app/library/amiga-workbench"
  tags: ["风格模板", "blue", "white", "black"]
---
## Overview

Amiga Workbench visual system, translated from the Claude Artisan catalog for use in digital products. Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black

- **Category:** niche
- **Era:** 1985–1990s
- **Origin:** Commodore's AmigaOS desktop environment, shipped with the Amiga 1000 in 1985, through the A500/A1200 era into the mid-1990s.
- **Reference:** Workbench 1.3/2.0/3.1 desktop; Deluxe Paint chrome; Amiga demoscene installer screens.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Chunky low-res pixel icons and blocky bitmap system font (Topaz)
- Tight saturated 4-8 color core palette: orange, blue, white, black
- Thick flat 3D-beveled window/button chrome, no gradients
- Cheerful, toy-like chunky-pixel charm

## Colors

- **bg** — #a8a8a8
- **surface** — #ffffff
- **surface-2** — #d4d4d4
- **text** — #000000
- **text-muted** — #4a4a4a
- **primary** — #0055aa
- **accent** — #ff8800
- **bevel-light** — #ffffff
- **bevel-dark** — #555555
- **titlebar** — #0055aa

## Typography

- Display: 'Topaz New', 'Press Start 2P', monospace
- Body: 'Topaz New', 'Press Start 2P', 'Courier New', monospace
- Mono: 'Topaz New', 'Courier New', monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black; Thick flat 3D-beveled window/button chrome, no gradients; Cheerful, toy-like chunky-pixel charm; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/amiga-workbench · designmd.app -->
