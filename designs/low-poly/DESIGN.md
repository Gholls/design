---
version: "alpha"
name: "Low Poly"
description: "Low Poly visual system, translated from the Claude Artisan catalog for use in digital products. Visible triangular facets and flat shading; Crystalline geometric forms"
colors:
  primary: "#ff7f5c"
  background: "#1b2a4a"
  surface: "#24365c"
  text: "#eef3fb"
  accent: "#46e0c8"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Space Grotesk', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Rajdhani', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Rajdhani', system-ui, sans-serif"
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
  order: 521
  author: "designmd.app"
  source: "https://designmd.app/library/low-poly"
  tags: ["风格模板"]
---
## Overview

Low Poly visual system, translated from the Claude Artisan catalog for use in digital products. Visible triangular facets and flat shading; Crystalline geometric forms

- **Category:** texture
- **Era:** 2012–present
- **Origin:** Stylized faceted 3D from real-time graphics constraints.
- **Reference:** Indie game art; low-poly hero backgrounds.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Visible triangular facets and flat shading
- Crystalline geometric forms
- Gradient facet lighting
- Stylized, game-adjacent

## Colors

- **bg** — #1b2a4a
- **surface** — #24365c
- **surface-strong** — #2f4570
- **border** — #3c5480
- **text** — #eef3fb
- **text-muted** — #aebedc
- **primary** — #ff7f5c
- **accent** — #46e0c8
- **facet-dark** — #16223c

## Typography

- Display: 'Space Grotesk', system-ui, sans-serif
- Body: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Visible triangular facets and flat shading; Crystalline geometric forms; Gradient facet lighting; Stylized, game-adjacent; sombras e elevação

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

<!-- Source: https://designmd.app/library/low-poly · designmd.app -->
