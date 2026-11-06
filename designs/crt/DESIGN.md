---
version: "alpha"
name: "CRT / Scanline / Retro Monitor"
description: "CRT / Scanline / Retro Monitor visual system, translated from the Claude Artisan catalog for use in digital products. Horizontal scanlines and screen curvature; Phosphor glow and bloom"
colors:
  primary: "#39ff88"
  background: "#06110a"
  surface: "#0b1f13"
  text: "#7dffb0"
  accent: "#ff5fa2"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Press Start 2P', 'VT323', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'VT323', 'Share Tech Mono', ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'VT323', 'Share Tech Mono', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 285
  author: "designmd.app"
  source: "https://designmd.app/library/crt"
  tags: ["风格模板"]
---
## Overview

CRT / Scanline / Retro Monitor visual system, translated from the Claude Artisan catalog for use in digital products. Horizontal scanlines and screen curvature; Phosphor glow and bloom

- **Category:** texture
- **Era:** Evokes 1970s–90s
- **Origin:** Emulation of cathode-ray-tube displays.
- **Reference:** Retro game emulators; Fallout terminals; VHS/CRT web filters.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Horizontal scanlines and screen curvature
- Phosphor glow and bloom
- RGB subpixel/aperture-grille texture
- Flicker, vignette, chromatic edges

## Colors

- **bg** — #06110a
- **surface** — #0b1f13
- **surface-strong** — #123020
- **border** — #2f6b45
- **text** — #7dffb0
- **text-muted** — #4fbf82
- **primary** — #39ff88
- **accent** — #ff5fa2
- **phosphor-glow** — rgba(57, 255, 136, 0.45)

## Typography

- Display: 'Press Start 2P', 'VT323', monospace
- Body: 'VT323', 'Share Tech Mono', ui-monospace, monospace
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Horizontal scanlines and screen curvature; Phosphor glow and bloom; RGB subpixel/aperture-grille texture; Flicker, vignette, chromatic edges; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/crt · designmd.app -->
