---
version: "alpha"
name: "Papercut / Paper Collage"
description: "Papercut / Paper Collage visual system, translated from the Claude Artisan catalog for use in digital products. Layered paper with soft realistic shadows; Torn/cut edges, fold lines"
colors:
  primary: "#e8623d"
  background: "#fbf3e7"
  surface: "#fff9f0"
  text: "#3b2c22"
  accent: "#4f9c8e"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Caveat', 'Comic Neue', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
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
  order: 618
  author: "designmd.app"
  source: "https://designmd.app/library/papercut"
  tags: ["风格模板", "fold lines"]
---
## Overview

Papercut / Paper Collage visual system, translated from the Claude Artisan catalog for use in digital products. Layered paper with soft realistic shadows; Torn/cut edges, fold lines

- **Category:** texture
- **Era:** 2016–present
- **Origin:** Digital simulation of layered cut paper.
- **Reference:** Google paper-craft doodles; kids'-brand sites.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Layered paper with soft realistic shadows
- Torn/cut edges, fold lines
- Warm matte pastel stock
- Craft, tactile, storybook

## Colors

- **bg** — #fbf3e7
- **surface** — #fff9f0
- **surface-strong** — #ffe8cc
- **border** — #e3c9a3
- **text** — #3b2c22
- **text-muted** — #6b5847
- **primary** — #e8623d
- **accent** — #4f9c8e
- **torn-shadow** — rgba(59, 44, 34, 0.18)

## Typography

- Display: 'Caveat', 'Comic Neue', cursive
- Body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Layered paper with soft realistic shadows; Torn/cut edges, fold lines; Warm matte pastel stock; Craft, tactile, storybook; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/papercut · designmd.app -->
