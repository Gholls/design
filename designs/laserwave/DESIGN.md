---
version: "alpha"
name: "Laserwave / Darksynth"
description: "Laserwave / Darksynth visual system, translated from the Claude Artisan catalog for use in digital products. Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls"
colors:
  primary: "#ff2b53"
  background: "#0a0014"
  surface: "#170a2e"
  text: "#f5e9ff"
  accent: "#9b30ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Orbitron', 'Rajdhani', system-ui, sans-serif"
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
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 513
  author: "designmd.app"
  source: "https://designmd.app/library/laserwave"
  tags: ["风格模板", "chrome skulls"]
---
## Overview

Laserwave / Darksynth visual system, translated from the Claude Artisan catalog for use in digital products. Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls

- **Category:** retrofuturism
- **Era:** 2013–present
- **Origin:** Darker, harder subgenre of synthwave.
- **Reference:** Perturbator; Carpenter Brut visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Aggressive neon on black, horror tones
- Red/purple/cyan, chrome skulls
- Cinematic, ominous
- VHS grain and glow

## Colors

- **bg** — #0a0014
- **surface** — #170a2e
- **surface-strong** — #23103f
- **border** — rgba(255,43,109,0.35)
- **text** — #f5e9ff
- **text-muted** — #b48ecf
- **primary** — #ff2b53
- **accent** — #9b30ff
- **glow-2** — #ff2b6d

## Typography

- Display: 'Orbitron', 'Rajdhani', system-ui, sans-serif
- Body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls; Cinematic, ominous; VHS grain and glow; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/laserwave · designmd.app -->
