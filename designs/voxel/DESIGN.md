---
version: "alpha"
name: "Voxel Art"
description: "Voxel Art visual system, translated from the Claude Artisan catalog for use in digital products. Cubic 3D 'pixels' build objects; Blocky charming forms"
colors:
  primary: "#ff6b3d"
  background: "#a8e0f0"
  surface: "#ffffff"
  text: "#16324a"
  accent: "#2fbf71"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Press Start 2P', 'Space Grotesk', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 832
  author: "designmd.app"
  source: "https://designmd.app/library/voxel"
  tags: ["风格模板"]
---
## Overview

Voxel Art visual system, translated from the Claude Artisan catalog for use in digital products. Cubic 3D 'pixels' build objects; Blocky charming forms

- **Category:** texture
- **Era:** 2010s–present
- **Origin:** 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent).
- **Reference:** Minecraft; MagicaVoxel dioramas.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Cubic 3D 'pixels' build objects
- Blocky charming forms
- Bright toy-like palettes
- Isometric voxel scenes

## Colors

- **bg** — #a8e0f0
- **surface** — #ffffff
- **surface-strong** — #eef7fb
- **border** — #16324a
- **text** — #16324a
- **text-muted** — #3b5a72
- **primary** — #ff6b3d
- **accent** — #2fbf71
- **yellow** — #ffc93c

## Typography

- Display: 'Press Start 2P', 'Space Grotesk', monospace
- Body: 'Space Grotesk', 'Segoe UI', sans-serif
- Mono: 'VT323', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cubic 3D 'pixels' build objects; Blocky charming forms; Bright toy-like palettes; Isometric voxel scenes; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/voxel · designmd.app -->
