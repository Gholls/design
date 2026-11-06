---
version: "alpha"
name: "Barbiecore"
description: "Barbiecore visual system, translated from the Claude Artisan catalog for use in digital products. Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful"
colors:
  primary: "#ff0080"
  background: "#ff2e93"
  surface: "#ffffff"
  text: "#3a0021"
  accent: "#ffe600"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Baloo 2', 'Poppins', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Baloo 2', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Baloo 2', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "12px"
  md: "20px"
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
  order: 179
  author: "designmd.app"
  source: "https://designmd.app/library/barbiecore"
  tags: ["风格模板", "glam", "playful"]
---
## Overview

Barbiecore visual system, translated from the Claude Artisan catalog for use in digital products. Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful

- **Category:** niche
- **Era:** 2022–present
- **Origin:** 2023 Barbie film revived hot-pink maximal femininity.
- **Reference:** Barbie (2023) marketing.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Saturated hot/bubblegum pink everywhere
- Glossy plastic, glam, playful
- Bold sans display type
- Fun, femme, unapologetic

## Colors

- **bg** — #ff2e93
- **surface** — #ffffff
- **surface-strong** — #ffd6ec
- **border** — #ffffff
- **text** — #3a0021
- **text-muted** — #7a0a45
- **primary** — #ff0080
- **accent** — #ffe600

## Typography

- Display: 'Baloo 2', 'Poppins', system-ui, sans-serif
- Body: 'Poppins', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful; Bold sans display type; Fun, femme, unapologetic; sombras e elevação

## Shapes

- Radius scale: 12px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/barbiecore · designmd.app -->
