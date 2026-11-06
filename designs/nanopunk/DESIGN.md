---
version: "alpha"
name: "Nanopunk"
description: "Nanopunk visual system, translated from the Claude Artisan catalog for use in digital products. Swarming particle/grey-goo motifs; Clinical near-future tech"
colors:
  primary: "#33f2c0"
  background: "#050a09"
  surface: "#0d1917"
  text: "#e6fff8"
  accent: "#a6ff3d"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Orbitron', 'Eurostile', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Eurostile', 'Orbitron', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Eurostile', 'Orbitron', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "12px"
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
  order: 579
  author: "designmd.app"
  source: "https://designmd.app/library/nanopunk"
  tags: ["风格模板"]
---
## Overview

Nanopunk visual system, translated from the Claude Artisan catalog for use in digital products. Swarming particle/grey-goo motifs; Clinical near-future tech

- **Category:** retrofuturism
- **Era:** 2000s–present
- **Origin:** Cyberpunk offshoot centered on nanotechnology.
- **Reference:** Prey; various near-future sci-fi UIs.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Swarming particle/grey-goo motifs
- Clinical near-future tech
- Molecular grid overlays
- Smart-material morphing surfaces

## Colors

- **bg** — #050a09
- **surface** — #0d1917
- **surface-strong** — #142622
- **border** — rgba(180, 255, 232, 0.22)
- **text** — #e6fff8
- **text-muted** — #8fc9bc
- **primary** — #33f2c0
- **accent** — #a6ff3d
- **swarm** — #5ad1ff
- **danger** — #ff4f6d

## Typography

- Display: 'Orbitron', 'Eurostile', sans-serif
- Body: 'Eurostile', 'Orbitron', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Swarming particle/grey-goo motifs; Clinical near-future tech; Molecular grid overlays; Smart-material morphing surfaces; sombras e elevação

## Shapes

- Radius scale: 2px, 6px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/nanopunk · designmd.app -->
