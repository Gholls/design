---
version: "alpha"
name: "Organic / Biomorphic"
description: "Organic / Biomorphic visual system, translated from the Claude Artisan catalog for use in digital products. Flowing curves and asymmetric blobs; Soft natural palettes"
colors:
  primary: "#6f8f4e"
  background: "#f6f1e7"
  surface: "#ffffff"
  text: "#2f3b2a"
  accent: "#d98b5f"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fraunces', Georgia, serif"
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
  sm: "16px"
  md: "28px"
  lg: "44px"
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
  order: 615
  author: "designmd.app"
  source: "https://designmd.app/library/organic-design"
  tags: ["风格模板"]
---
## Overview

Organic / Biomorphic visual system, translated from the Claude Artisan catalog for use in digital products. Flowing curves and asymmetric blobs; Soft natural palettes

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Reaction to rigid grids; nature-derived forms.
- **Reference:** Wellness/beauty brand sites; many 2020s landing pages.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Flowing curves and asymmetric blobs
- Soft natural palettes
- Fluid, hand-tuned layouts
- Wave dividers, rounded everything

## Colors

- **bg** — #f6f1e7
- **surface** — #ffffff
- **surface-strong** — #eee6d6
- **border** — #dccdb0
- **text** — #2f3b2a
- **text-muted** — #5c6b53
- **primary** — #6f8f4e
- **accent** — #d98b5f
- **clay** — #e7c9a9

## Typography

- Display: 'Fraunces', Georgia, serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flowing curves and asymmetric blobs; Soft natural palettes; Fluid, hand-tuned layouts; Wave dividers, rounded everything; sombras e elevação

## Shapes

- Radius scale: 16px, 28px, 44px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/organic-design · designmd.app -->
