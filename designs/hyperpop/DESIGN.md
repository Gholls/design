---
version: "alpha"
name: "Hyperpop Visuals"
description: "Hyperpop Visuals visual system, translated from the Claude Artisan catalog for use in digital products. Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur"
colors:
  primary: "#ff2fd0"
  background: "#0d0018"
  surface: "#1a0330"
  text: "#fbf3ff"
  accent: "#2ff3ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Rubik', 'Chrome Bold', 'Arial Black', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Arial', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Arial', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
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
  order: 474
  author: "designmd.app"
  source: "https://designmd.app/library/hyperpop"
  tags: ["风格模板", "distorted type", "motion blur"]
---
## Overview

Hyperpop Visuals visual system, translated from the Claude Artisan catalog for use in digital products. Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Hyperpop music-scene visual identity.
- **Reference:** 100 gecs; SOPHIE-adjacent visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Oversaturated candy + glitch chaos
- 3D chrome, distorted type, motion blur
- Ironic maximal internet-native energy
- Loud, fast, chaotic

## Colors

- **bg** — #0d0018
- **surface** — #1a0330
- **surface-strong** — #290548
- **border** — #ff2fd0
- **text** — #fbf3ff
- **text-muted** — #d6a9f0
- **primary** — #ff2fd0
- **accent** — #2ff3ff
- **lime** — #c6ff2f

## Typography

- Display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif
- Body: 'Space Grotesk', 'Arial', sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur; Ironic maximal internet-native energy; Loud, fast, chaotic; sombras e elevação

## Shapes

- Radius scale: 4px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/hyperpop · designmd.app -->
