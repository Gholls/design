---
version: "alpha"
name: "Biopunk"
description: "Biopunk visual system, translated from the Claude Artisan catalog for use in digital products. Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes"
colors:
  primary: "#39ff8c"
  background: "#0a1410"
  surface: "#10201a"
  text: "#e6f5ea"
  accent: "#d63bff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Space Grotesk', 'IBM Plex Mono', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
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
  order: 199
  author: "designmd.app"
  source: "https://designmd.app/library/biopunk"
  tags: ["风格模板", "veins", "membranes"]
---
## Overview

Biopunk visual system, translated from the Claude Artisan catalog for use in digital products. Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes

- **Category:** retrofuturism
- **Era:** 1990s–present
- **Origin:** Offshoot of cyberpunk focused on biotechnology.
- **Reference:** The Thing; Scorn; Annihilation.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Wet organic textures, flesh and fungus
- Bio-luminescence, veins, membranes
- Genetic/lab motifs
- Body-horror-adjacent futurism

## Colors

- **bg** — #0a1410
- **surface** — #10201a
- **surface-strong** — #16291f
- **border** — #2f6b4c
- **text** — #e6f5ea
- **text-muted** — #9fc9ac
- **primary** — #39ff8c
- **accent** — #d63bff
- **membrane** — #1f3d2c

## Typography

- Display: 'Space Grotesk', 'IBM Plex Mono', sans-serif
- Body: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes; Genetic/lab motifs; Body-horror-adjacent futurism; sombras e elevação

## Shapes

- Radius scale: 40% 60% 55% 45% / 45% 40% 60% 55%, 60% 40% 55% 45% / 50% 55% 45% 50%, 55% 45% 60% 40% / 45% 55% 40% 60%.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/biopunk · designmd.app -->
