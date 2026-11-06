---
version: "alpha"
name: "Isometric"
description: "Isometric visual system, translated from the Claude Artisan catalog for use in digital products. Parallel projection, no perspective vanishing; 30° axonometric grids"
colors:
  primary: "#6d5ef5"
  background: "#eef1fb"
  surface: "#ffffff"
  text: "#1c2340"
  accent: "#14b8a6"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Inter', system-ui, sans-serif"
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
  order: 493
  author: "designmd.app"
  source: "https://designmd.app/library/isometric"
  tags: ["风格模板"]
---
## Overview

Isometric visual system, translated from the Claude Artisan catalog for use in digital products. Parallel projection, no perspective vanishing; 30° axonometric grids

- **Category:** texture
- **Era:** 2015–present
- **Origin:** Flat 2.5D illustration trend.
- **Reference:** Tech explainer illustrations; game art.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Parallel projection, no perspective vanishing
- 30° axonometric grids
- Cutaway rooms/cities, tiny detailed scenes
- Clean vector or soft 3D

## Colors

- **bg** — #eef1fb
- **surface** — #ffffff
- **surface-strong** — #e2e7f9
- **border** — #c7d0f0
- **text** — #1c2340
- **text-muted** — #5b6486
- **primary** — #6d5ef5
- **accent** — #14b8a6
- **iso-shadow-a** — #4c46c9
- **iso-shadow-b** — #8f89ff

## Typography

- Display: 'Poppins', system-ui, sans-serif
- Body: 'Poppins', 'Inter', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Parallel projection, no perspective vanishing; 30° axonometric grids; Cutaway rooms/cities, tiny detailed scenes; Clean vector or soft 3D; sombras e elevação

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

<!-- Source: https://designmd.app/library/isometric · designmd.app -->
