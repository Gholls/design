---
version: "alpha"
name: "Winamp Skin"
description: "Winamp Skin visual system, translated from the Claude Artisan catalog for use in digital products. Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs)"
colors:
  primary: "#39ff6a"
  background: "#0c0d10"
  surface: "#26292e"
  text: "#d8dde3"
  accent: "#ffb347"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Arial Narrow', 'Tahoma', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Arial', 'Tahoma', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Arial', 'Tahoma', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "3px"
  lg: "6px"
spacing:
  sm: "4px"
  md: "10px"
  lg: "22px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "10px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "10px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "16px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "10px"

gallery:
  order: 849
  author: "designmd.app"
  source: "https://designmd.app/library/winamp-skin"
  tags: ["风格模板", "sliders", "knobs)"]
---
## Overview

Winamp Skin visual system, translated from the Claude Artisan catalog for use in digital products. Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs)

- **Category:** niche
- **Era:** late-1990s/early-2000s
- **Origin:** Winamp's classic skin engine (1997 onward); a vast fan skinning economy produced thousands of brushed-metal and chrome hardware-panel skins through the early 2000s.
- **Reference:** Classic Winamp 2.x default skin; Winamp Skin Museum archive; Sonique-era hardware-panel skins.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Brushed-metal or chrome-gradient panel chrome throughout
- Tiny, pixel-precise controls (buttons, sliders, knobs)
- Neon-green LED-style level meters/visualizer accents
- Dense, more-controls-than-space skeuomorphic hardware-panel layout

## Colors

- **bg** — #0c0d10
- **surface** — #26292e
- **surface-2** — #34383f
- **text** — #d8dde3
- **text-muted** — #8b929c
- **primary** — #39ff6a
- **primary-dim** — #1c8f3b
- **accent** — #ffb347
- **led-red** — #ff4d4d
- **chrome-hi** — #eef1f4
- **chrome-lo** — #14161a

## Typography

- Display: 'Arial Narrow', 'Tahoma', sans-serif
- Body: 'Arial', 'Tahoma', sans-serif
- Mono: 'Fixedsys', 'Courier New', monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs); Neon-green LED-style level meters/visualizer accents; Dense, more-controls-than-space skeuomorphic hardware-panel layout; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 3px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/winamp-skin · designmd.app -->
