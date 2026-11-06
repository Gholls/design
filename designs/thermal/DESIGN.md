---
version: "alpha"
name: "Thermal / Infrared"
description: "Thermal / Infrared visual system, translated from the Claude Artisan catalog for use in digital products. Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs"
colors:
  primary: "#ff6a1a"
  background: "#0a0014"
  surface: "#1a0a2e"
  text: "#f5f0e8"
  accent: "#ffd23f"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Rajdhani', 'Oswald', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Rajdhani', 'Barlow Condensed', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Rajdhani', 'Barlow Condensed', system-ui, sans-serif"
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
  order: 786
  author: "designmd.app"
  source: "https://designmd.app/library/thermal"
  tags: ["风格模板", "body-heat blobs"]
---
## Overview

Thermal / Infrared visual system, translated from the Claude Artisan catalog for use in digital products. Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs

- **Category:** texture
- **Era:** 2020s aesthetic use
- **Origin:** Thermal-camera color mapping as style.
- **Reference:** Sci-fi/security UI motifs; experimental fashion.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Heat-map gradient (black-purple-red-yellow-white)
- Glowing edges, body-heat blobs
- Sci-fi surveillance vibe
- High-tech, eerie

## Colors

- **bg** — #0a0014
- **surface** — #1a0a2e
- **surface-strong** — #26123f
- **border** — #5b1a6b
- **text** — #f5f0e8
- **text-muted** — #c9a8d9
- **primary** — #ff6a1a
- **accent** — #ffd23f
- **heat-cold** — #3a0ca3

## Typography

- Display: 'Rajdhani', 'Oswald', sans-serif
- Body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs; Sci-fi surveillance vibe; High-tech, eerie; sombras e elevação

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

<!-- Source: https://designmd.app/library/thermal · designmd.app -->
