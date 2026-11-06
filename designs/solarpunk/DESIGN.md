---
version: "alpha"
name: "Solarpunk"
description: "Solarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta"
colors:
  primary: "#2f9e6e"
  background: "#f5f9e8"
  surface: "#ffffff"
  text: "#1f3a2e"
  accent: "#f4b23e"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fraunces', 'Quicksand', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "20px"
  lg: "32px"
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
  order: 722
  author: "designmd.app"
  source: "https://designmd.app/library/solarpunk"
  tags: ["风格模板", "gold", "sky blue", "terracotta"]
---
## Overview

Solarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta

- **Category:** retrofuturism
- **Era:** 2008–present
- **Origin:** Emerged online ~2008 as optimistic counter to cyberpunk.
- **Reference:** Solarpunk art collections; 'Chobani' Solarpunk ad (2021).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Lush greenery fused with clean technology
- Warm sunlit palette: greens, gold, sky blue, terracotta
- Art-Nouveau-influenced organic linework
- Hopeful, sustainable, community-centered

## Colors

- **bg** — #f5f9e8
- **surface** — #ffffff
- **text** — #1f3a2e
- **text-muted** — #4f6f5f
- **primary** — #2f9e6e
- **accent** — #f4b23e
- **leaf** — #6cbf6c
- **sky** — #8fd0e6
- **clay** — #d98a5c

## Typography

- Display: 'Fraunces', 'Quicksand', serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta; Art-Nouveau-influenced organic linework; Hopeful, sustainable, community-centered; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 10px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/solarpunk · designmd.app -->
