---
version: "alpha"
name: "Danish Pastel"
description: "Danish Pastel visual system, translated from the Claude Artisan catalog for use in digital products. Soft multicolor pastels mixed freely; Checkerboard, wavy mirrors, smiley motifs"
colors:
  primary: "#ff8fb1"
  background: "#fdeef2"
  surface: "#ffffff"
  text: "#2b2b2b"
  accent: "#8fd3f4"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fredoka', 'Baloo 2', 'Quicksand', sans-serif"
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
  sm: "10px"
  md: "18px"
  lg: "28px"
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
  order: 307
  author: "designmd.app"
  source: "https://designmd.app/library/danish-pastel"
  tags: ["风格模板", "wavy mirrors", "smiley motifs"]
---
## Overview

Danish Pastel visual system, translated from the Claude Artisan catalog for use in digital products. Soft multicolor pastels mixed freely; Checkerboard, wavy mirrors, smiley motifs

- **Category:** niche
- **Era:** 2021–present
- **Origin:** Playful pastel maximalist decor aesthetic.
- **Reference:** Danish Pastel TikTok interiors.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Soft multicolor pastels mixed freely
- Checkerboard, wavy mirrors, smiley motifs
- Cheerful cluttered coziness
- Retro-playful decor

## Colors

- **bg** — #fdeef2
- **surface** — #ffffff
- **surface-strong** — #fff1c6
- **border** — #2b2b2b
- **text** — #2b2b2b
- **text-muted** — #5b5450
- **primary** — #ff8fb1
- **accent** — #8fd3f4
- **lilac** — #cdb7f6
- **mint** — #a8e6c1
- **yellow** — #ffe27a

## Typography

- Display: 'Fredoka', 'Baloo 2', 'Quicksand', sans-serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Soft multicolor pastels mixed freely; Checkerboard, wavy mirrors, smiley motifs; Cheerful cluttered coziness; Retro-playful decor; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/danish-pastel · designmd.app -->
