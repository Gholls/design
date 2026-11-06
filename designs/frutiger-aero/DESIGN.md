---
version: "alpha"
name: "Frutiger Aero"
description: "Frutiger Aero visual system, translated from the Claude Artisan catalog for use in digital products. Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies"
colors:
  primary: "#38b6ff"
  background: "#eaf6ff"
  surface: "#eaf6ff"
  text: "#0b3d2e"
  accent: "#7ed957"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Myriad Pro', 'Segoe UI', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
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
  order: 419
  author: "designmd.app"
  source: "https://designmd.app/library/frutiger-aero"
  tags: ["风格模板", "bubbles", "grass", "blue skies"]
---
## Overview

Frutiger Aero visual system, translated from the Claude Artisan catalog for use in digital products. Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies

- **Category:** retrofuturism
- **Era:** 2004–2013
- **Origin:** Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism.
- **Reference:** Windows Vista/7; Wii/iOS-era wallpapers; Windows XP 'Bliss'.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Glossy skeuomorphic bubbles and glass
- Nature imagery: water, bubbles, grass, blue skies
- Aqua gradients, lens flares, clean tech
- Humanist Frutiger/Myriad type, auto-glow

## Colors

- **bg** — #eaf6ff
- **surface** — rgba(255,255,255,0.55)
- **text** — #0b3d2e
- **text-muted** — #2f6b57
- **primary** — #38b6ff
- **accent** — #7ed957
- **sky** — #8fd3ff
- **green** — #5bd06a
- **aqua** — #00c2c7

## Typography

- Display: 'Myriad Pro', 'Segoe UI', sans-serif
- Body: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies; Aqua gradients, lens flares, clean tech; Humanist Frutiger/Myriad type, auto-glow; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/frutiger-aero · designmd.app -->
