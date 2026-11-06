---
version: "alpha"
name: "Windows Aero Glass"
description: "Windows Aero Glass visual system, translated from the Claude Artisan catalog for use in digital products. Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen"
colors:
  primary: "#3d8eeb"
  background: "#0d2a4a"
  surface: "#0d2a4a"
  text: "#f3faff"
  accent: "#8fd7ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Segoe UI', Tahoma, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Segoe UI', Tahoma, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Segoe UI', Tahoma, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
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
  order: 846
  author: "designmd.app"
  source: "https://designmd.app/library/aero-glass"
  tags: ["风格模板"]
---
## Overview

Windows Aero Glass visual system, translated from the Claude Artisan catalog for use in digital products. Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen

- **Category:** glass
- **Era:** 2006–2012
- **Origin:** Microsoft Windows Vista (2006) and Windows 7 Aero.
- **Reference:** Windows Vista / 7 title bars and taskbar.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Translucent window chrome with Gaussian blur
- Colored glass tint with reflective sheen
- Rounded window corners and glow
- Live thumbnails / Flip 3D

## Colors

- **bg** — #0d2a4a
- **bg-gradient-a** — #14406e
- **bg-gradient-b** — #0a1c33
- **surface** — rgba(173, 216, 255, 0.22)
- **surface-strong** — rgba(173, 216, 255, 0.35)
- **border** — rgba(255, 255, 255, 0.55)
- **text** — #f3faff
- **text-muted** — rgba(243, 250, 255, 0.78)
- **primary** — #3d8eeb
- **accent** — #8fd7ff

## Typography

- Display: 'Segoe UI', Tahoma, sans-serif
- Body: 'Segoe UI', Tahoma, system-ui, sans-serif
- Mono: 'Consolas', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen; Rounded window corners and glow; Live thumbnails / Flip 3D; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 10px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/aero-glass · designmd.app -->
