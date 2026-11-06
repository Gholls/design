---
version: "alpha"
name: "Scene / Emo"
description: "Scene / Emo visual system, translated from the Claude Artisan catalog for use in digital products. Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls"
colors:
  primary: "#ff2fb0"
  background: "#0a0a0c"
  surface: "#17151c"
  text: "#f5f2fa"
  accent: "#ccff00"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Jokerman', 'Impact', 'Trebuchet MS', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
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
  order: 698
  author: "designmd.app"
  source: "https://designmd.app/library/scene-emo"
  tags: ["风格模板", "hot pink", "leopard", "glittery graphics"]
---
## Overview

Scene / Emo visual system, translated from the Claude Artisan catalog for use in digital products. Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls

- **Category:** niche
- **Era:** 2004–2012
- **Origin:** Mid-2000s Myspace youth subculture.
- **Reference:** Myspace scene profiles; 2000s emo band art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Neon + black, hot pink, leopard, checkerboard
- Choppy hair, glittery graphics, hearts/skulls
- Comic-sans-adjacent chaos, sparkles
- Loud, angsty, DIY

## Colors

- **bg** — #0a0a0c
- **surface** — #17151c
- **surface-strong** — #211c29
- **border** — #ff2fb0
- **text** — #f5f2fa
- **text-muted** — #b9aecb
- **primary** — #ff2fb0
- **accent** — #ccff00
- **electric** — #7a2fff

## Typography

- Display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif
- Body: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls; Comic-sans-adjacent chaos, sparkles; Loud, angsty, DIY; sombras e elevação

## Shapes

- Radius scale: 2px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/scene-emo · designmd.app -->
