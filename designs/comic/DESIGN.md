---
version: "alpha"
name: "Comic / Manga"
description: "Comic / Manga visual system, translated from the Claude Artisan catalog for use in digital products. Bold ink outlines, cel shading; Speech bubbles, action lines, SFX lettering"
colors:
  primary: "#e8272c"
  background: "#fef9e7"
  surface: "#ffffff"
  text: "#101010"
  accent: "#ffd400"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Bangers', 'Anton', 'Impact', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Anton', 'Bangers', 'Arial Black', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Anton', 'Bangers', 'Arial Black', system-ui, sans-serif"
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
  order: 263
  author: "designmd.app"
  source: "https://designmd.app/library/comic"
  tags: ["风格模板", "action lines", "SFX lettering"]
---
## Overview

Comic / Manga visual system, translated from the Claude Artisan catalog for use in digital products. Bold ink outlines, cel shading; Speech bubbles, action lines, SFX lettering

- **Category:** texture
- **Era:** 20th c. → present
- **Origin:** Comic-book and manga illustration conventions.
- **Reference:** Comic-styled marketing; webtoon UIs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Bold ink outlines, cel shading
- Speech bubbles, action lines, SFX lettering
- Halftone/screentone shading
- Dynamic paneling

## Colors

- **bg** — #fef9e7
- **surface** — #ffffff
- **surface-strong** — #fff6cc
- **border** — #101010
- **text** — #101010
- **text-muted** — #43423f
- **primary** — #e8272c
- **accent** — #ffd400
- **blue** — #1c4fd6
- **halftone** — rgba(16, 16, 16, 0.14)

## Typography

- Display: 'Bangers', 'Anton', 'Impact', sans-serif
- Body: 'Anton', 'Bangers', 'Arial Black', system-ui, sans-serif
- Mono: 'Comic Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold ink outlines, cel shading; Speech bubbles, action lines, SFX lettering; Halftone/screentone shading; Dynamic paneling; sombras e elevação

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

<!-- Source: https://designmd.app/library/comic · designmd.app -->
