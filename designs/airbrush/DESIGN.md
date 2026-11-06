---
version: "alpha"
name: "Airbrush / 70s-80s Illustration"
description: "Airbrush / 70s-80s Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes"
colors:
  primary: "#ff6b35"
  background: "#1a0f2e"
  surface: "#2b1b3d"
  text: "#fdf3e7"
  accent: "#ff2e88"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Eurostile', 'Century Gothic', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Avenir Next', 'Century Gothic', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Avenir Next', 'Century Gothic', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "32px"
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
  order: 127
  author: "designmd.app"
  source: "https://designmd.app/library/airbrush"
  tags: ["风格模板", "lasers"]
---
## Overview

Airbrush / 70s-80s Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes

- **Category:** texture
- **Era:** 1970s–1980s
- **Origin:** Airbrush illustration golden age (sci-fi/van art).
- **Reference:** 70s-80s sci-fi paperback covers; van murals.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Smooth gradient shading and soft glows
- Chrome, lasers, fantasy sci-fi scenes
- Highly polished rendered surfaces
- Retro album/poster illustration

## Colors

- **bg** — #1a0f2e
- **surface** — #2b1b3d
- **surface-strong** — #3d2554
- **border** — #6b4a8a
- **text** — #fdf3e7
- **text-muted** — rgba(253, 243, 231, 0.72)
- **primary** — #ff6b35
- **accent** — #ff2e88
- **chrome** — #cbd5e1

## Typography

- Display: 'Eurostile', 'Century Gothic', sans-serif
- Body: 'Avenir Next', 'Century Gothic', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes; Highly polished rendered surfaces; Retro album/poster illustration; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/airbrush · designmd.app -->
