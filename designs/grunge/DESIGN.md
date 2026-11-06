---
version: "alpha"
name: "Grunge Design"
description: "Grunge Design visual system, translated from the Claude Artisan catalog for use in digital products. Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility"
colors:
  primary: "#c1391f"
  background: "#1a1815"
  surface: "#24211c"
  text: "#ece6d8"
  accent: "#d9b23c"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Oswald', 'Impact', 'Arial Narrow', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Courier New', 'Special Elite', monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Courier New', 'Special Elite', monospace"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "0px"
spacing:
  sm: "7px"
  md: "15px"
  lg: "30px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "15px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "15px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "22px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "15px"

gallery:
  order: 453
  author: "designmd.app"
  source: "https://designmd.app/library/grunge"
  tags: ["风格模板", "dirt", "splatter", "broken legibility"]
---
## Overview

Grunge Design visual system, translated from the Claude Artisan catalog for use in digital products. Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility

- **Category:** brutalist
- **Era:** 1990s
- **Origin:** David Carson (Ray Gun magazine); reaction to clean corporate design.
- **Reference:** David Carson, Ray Gun magazine (1990s).
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Distressed textures, dirt, splatter, torn edges
- Chaotic overlapping type, broken legibility
- Photocopied, degraded, layered collage
- Anti-grid experimental layout

## Colors

- **bg** — #1a1815
- **surface** — #24211c
- **surface-strong** — #2e2a23
- **border** — #55503f
- **text** — #ece6d8
- **text-muted** — #a89f8a
- **primary** — #c1391f
- **accent** — #d9b23c
- **ink** — #0c0b09

## Typography

- Display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif
- Body: 'Courier New', 'Special Elite', monospace
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility; Photocopied, degraded, layered collage; Anti-grid experimental layout; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/grunge · designmd.app -->
