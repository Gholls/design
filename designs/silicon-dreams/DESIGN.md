---
version: "alpha"
name: "Silicon Dreams"
description: "Silicon Dreams visual system, translated from the Claude Artisan catalog for use in digital products. Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints"
colors:
  primary: "#2fb8ff"
  background: "#050b14"
  surface: "#0d1b2a"
  text: "#eaf4ff"
  accent: "#6ee7ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Frutiger', 'Eurostile', 'Segoe UI', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Frutiger', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Frutiger', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
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
  order: 707
  author: "designmd.app"
  source: "https://designmd.app/library/silicon-dreams"
  tags: ["风格模板", "circuitry", "HUD hints"]
---
## Overview

Silicon Dreams visual system, translated from the Claude Artisan catalog for use in digital products. Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints

- **Category:** retrofuturism
- **Era:** 2005–2012
- **Origin:** Frutiger-family aesthetic; darker tech-corporate variant.
- **Reference:** Mid-2000s corporate tech keynotes.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dark glossy tech backgrounds
- Blue glow, circuitry, HUD hints
- Corporate futurism
- Glass + neon-blue accents

## Colors

- **bg** — #050b14
- **surface** — #0d1b2a
- **surface-strong** — #132840
- **border** — #234a6b
- **text** — #eaf4ff
- **text-muted** — #8fb3d1
- **primary** — #2fb8ff
- **accent** — #6ee7ff
- **glow** — rgba(47,184,255,0.55)

## Typography

- Display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif
- Body: 'Frutiger', 'Segoe UI', system-ui, sans-serif
- Mono: 'Consolas', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints; Corporate futurism; Glass + neon-blue accents; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/silicon-dreams · designmd.app -->
