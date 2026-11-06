---
version: "alpha"
name: "VHS / Analog Video"
description: "VHS / Analog Video visual system, translated from the Claude Artisan catalog for use in digital products. Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain"
colors:
  primary: "#ff3b5c"
  background: "#0a0a0f"
  surface: "#16161f"
  text: "#f0ece0"
  accent: "#2de2e6"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'VCR OSD Mono', 'Courier New', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
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
  order: 818
  author: "designmd.app"
  source: "https://designmd.app/library/vhs"
  tags: ["风格模板", "tape warble", "soft blur", "grain"]
---
## Overview

VHS / Analog Video visual system, translated from the Claude Artisan catalog for use in digital products. Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain

- **Category:** texture
- **Era:** Evokes 1980s–90s
- **Origin:** Nostalgia for analog videotape artifacts.
- **Reference:** 80s home-video aesthetic; music videos; horror pastiche.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Tracking distortion, tape warble, timestamp overlay
- Chromatic bleed, soft blur, grain
- Date/REC HUD, interlacing
- Warm nostalgic degradation

## Colors

- **bg** — #0a0a0f
- **surface** — #16161f
- **surface-strong** — #1e1e2a
- **border** — #3a3a4a
- **text** — #f0ece0
- **text-muted** — #a3a0ae
- **primary** — #ff3b5c
- **accent** — #2de2e6
- **tape-yellow** — #f5c518

## Typography

- Display: 'VCR OSD Mono', 'Courier New', monospace
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'VCR OSD Mono', 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain; Date/REC HUD, interlacing; Warm nostalgic degradation; sombras e elevação

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

<!-- Source: https://designmd.app/library/vhs · designmd.app -->
