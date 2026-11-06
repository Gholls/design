---
version: "alpha"
name: "Grandmillennial"
description: "Grandmillennial visual system, translated from the Claude Artisan catalog for use in digital products. Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional"
colors:
  primary: "#b3435a"
  background: "#faf3e8"
  surface: "#fffaf1"
  text: "#3f2e22"
  accent: "#4f7a5c"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Libre Franklin', 'Century Gothic', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Libre Franklin', 'Century Gothic', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
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
  order: 451
  author: "designmd.app"
  source: "https://designmd.app/library/grandmillennial"
  tags: ["风格模板", "ruffles", "toile", "warm traditional"]
---
## Overview

Grandmillennial visual system, translated from the Claude Artisan catalog for use in digital products. Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Millennial embrace of 'grandma' decor.
- **Reference:** Grandmillennial interiors (House Beautiful).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Chintz florals, ruffles, needlepoint
- Scalloped edges, toile, warm traditional
- Ornate but cozy
- Nostalgic maximal comfort

## Colors

- **bg** — #faf3e8
- **surface** — #fffaf1
- **surface-strong** — #f5e6d3
- **border** — #d8b892
- **text** — #3f2e22
- **text-muted** — #6f5a45
- **primary** — #b3435a
- **accent** — #4f7a5c
- **gold** — #c8933f

## Typography

- Display: 'Playfair Display', 'Cormorant Garamond', serif
- Body: 'Libre Franklin', 'Century Gothic', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional; Ornate but cozy; Nostalgic maximal comfort; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/grandmillennial · designmd.app -->
