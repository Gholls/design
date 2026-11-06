---
version: "alpha"
name: "Cybergoth"
description: "Cybergoth visual system, translated from the Claude Artisan catalog for use in digital products. Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads"
colors:
  primary: "#b6ff1a"
  background: "#08070a"
  surface: "#131018"
  text: "#f1e9ff"
  accent: "#ff2fd0"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Orbitron', 'Rubik', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Rubik', 'Eurostile', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Rubik', 'Eurostile', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
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
  order: 300
  author: "designmd.app"
  source: "https://designmd.app/library/cybergoth"
  tags: ["风格模板", "UV pink); Industrial", "PVC", "goggles"]
---
## Overview

Cybergoth visual system, translated from the Claude Artisan catalog for use in digital products. Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads

- **Category:** niche
- **Era:** 1990s–2010s
- **Origin:** Goth + rave + industrial fusion.
- **Reference:** Early-2000s industrial/rave scene.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Black + toxic neon (green, UV pink)
- Industrial, PVC, goggles, dreads
- Rave energy meets goth darkness
- Aggressive, futuristic

## Colors

- **bg** — #08070a
- **surface** — #131018
- **surface-strong** — #1c1724
- **border** — #3a2f47
- **text** — #f1e9ff
- **text-muted** — #b9a9d6
- **primary** — #b6ff1a
- **accent** — #ff2fd0
- **uv** — #33f0ff
- **toxic-glow** — rgba(182, 255, 26, 0.35)

## Typography

- Display: 'Orbitron', 'Rubik', sans-serif
- Body: 'Rubik', 'Eurostile', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads; Rave energy meets goth darkness; Aggressive, futuristic; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/cybergoth · designmd.app -->
