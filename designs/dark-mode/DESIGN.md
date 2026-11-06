---
version: "alpha"
name: "Dark Mode"
description: "Dark Mode visual system, translated from the Claude Artisan catalog for use in digital products. Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration"
colors:
  primary: "#7c9cff"
  background: "#0c0c10"
  surface: "#16161c"
  text: "#e8e8ec"
  accent: "#7fd9c4"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
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
  order: 312
  author: "designmd.app"
  source: "https://designmd.app/library/dark-mode"
  tags: ["风格模板"]
---
## Overview

Dark Mode visual system, translated from the Claude Artisan catalog for use in digital products. Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Mainstreamed by iOS/Android/macOS dark themes (2018–2019).
- **Reference:** System dark modes; Linear; developer tools.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dark neutral backgrounds (#0d0d12-ish, not pure black)
- Desaturated accent colors to avoid vibration
- Elevation via lighter surfaces, not shadow
- Reduced eye strain, OLED-friendly

## Colors

- **bg** — #0c0c10
- **surface** — #16161c
- **surface-strong** — #1e1e26
- **border** — rgba(255,255,255,0.09)
- **text** — #e8e8ec
- **text-muted** — #9a9aa5
- **primary** — #7c9cff
- **accent** — #7fd9c4

## Typography

- Display: 'Inter', system-ui, sans-serif
- Body: 'Inter', -apple-system, system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration; Elevation via lighter surfaces, not shadow; Reduced eye strain, OLED-friendly

## Shapes

- Radius scale: 0 1px 2px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.45), 0 12px 28px rgba(0,0,0,0.5).

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/dark-mode · designmd.app -->
