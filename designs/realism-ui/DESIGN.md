---
version: "alpha"
name: "Hyperrealism UI"
description: "Hyperrealism UI visual system, translated from the Claude Artisan catalog for use in digital products. Photorealistic materials and reflections; Physically plausible lighting"
colors:
  primary: "#3ea6ff"
  background: "#2a2a2c"
  surface: "#38383b"
  text: "#f5f5f2"
  accent: "#ffb238"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Helvetica Neue', 'Futura', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "10px"
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
  order: 475
  author: "designmd.app"
  source: "https://designmd.app/library/realism-ui"
  tags: ["风格模板"]
---
## Overview

Hyperrealism UI visual system, translated from the Claude Artisan catalog for use in digital products. Photorealistic materials and reflections; Physically plausible lighting

- **Category:** morphism
- **Era:** 2008–2013
- **Origin:** High-water mark of skeuomorphic app design.
- **Reference:** Korg iMS-20 synth app; early podcast/voice-memo apps.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Photorealistic materials and reflections
- Physically plausible lighting
- Detailed micro-textures
- Tactile knobs, dials, switches

## Colors

- **bg** — #2a2a2c
- **surface** — #38383b
- **surface-strong** — #46464a
- **border** — #1c1c1e
- **text** — #f5f5f2
- **text-muted** — #b8b8b4
- **primary** — #3ea6ff
- **accent** — #ffb238
- **highlight** — rgba(255,255,255,0.22)

## Typography

- Display: 'Helvetica Neue', 'Futura', sans-serif
- Body: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Mono: ui-monospace, 'Menlo', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Photorealistic materials and reflections; Physically plausible lighting; Detailed micro-textures; Tactile knobs, dials, switches; sombras e elevação

## Shapes

- Radius scale: 6px, 10px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/realism-ui · designmd.app -->
