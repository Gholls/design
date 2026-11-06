---
version: "alpha"
name: "Kidcore"
description: "Kidcore visual system, translated from the Claude Artisan catalog for use in digital products. Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers"
colors:
  primary: "#ff5757"
  background: "#fffdf0"
  surface: "#ffffff"
  text: "#1a1a1a"
  accent: "#3dd9eb"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
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
  order: 499
  author: "designmd.app"
  source: "https://designmd.app/library/kidcore"
  tags: ["风格模板", "stars", "stickers"]
---
## Overview

Kidcore visual system, translated from the Claude Artisan catalog for use in digital products. Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers

- **Category:** niche
- **Era:** 2018–present
- **Origin:** Nostalgia for 90s/00s childhood.
- **Reference:** 90s kids' TV; Lisa Frank-adjacent.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Primary-color rainbows, stars, smileys
- Toy/cartoon motifs, stickers
- Chunky bubbly type
- Playful, nostalgic, hyper

## Colors

- **bg** — #fffdf0
- **surface** — #ffffff
- **surface-strong** — #fff6cf
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #55524a
- **primary** — #ff5757
- **accent** — #3dd9eb
- **rainbow-1** — #ff5757
- **rainbow-2** — #ffb703
- **rainbow-3** — #ffe74c
- **rainbow-4** — #4dd671
- **rainbow-5** — #3dd9eb
- **rainbow-6** — #a06cff

## Typography

- Display: 'Fredoka', 'Baloo 2', system-ui, sans-serif
- Body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers; Chunky bubbly type; Playful, nostalgic, hyper; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/kidcore · designmd.app -->
