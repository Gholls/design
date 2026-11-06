---
version: "alpha"
name: "Silkpunk"
description: "Silkpunk visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites)"
colors:
  primary: "#a3282c"
  background: "#f3ead9"
  surface: "#faf6ec"
  text: "#2b241c"
  accent: "#4f7a67"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Noto Serif SC', 'Songti SC', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Noto Sans SC', 'Noto Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Noto Sans SC', 'Noto Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "14px"
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
  order: 708
  author: "designmd.app"
  source: "https://designmd.app/library/silkpunk"
  tags: ["风格模板", "silk", "paper", "kites)"]
---
## Overview

Silkpunk visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites)

- **Category:** retrofuturism
- **Era:** 2015–present
- **Origin:** Coined by Ken Liu; East-Asian-inspired bio/mechanical tech.
- **Reference:** Ken Liu 'The Grace of Kings'.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Bamboo, silk, paper, lacquer materials
- Organic bio-mechanics (airships, kites)
- Classical Chinese/Asian motifs
- Elegant, flowing, nature-integrated tech

## Colors

- **bg** — #f3ead9
- **surface** — #faf6ec
- **surface-strong** — #ece0c6
- **border** — #cbb98c
- **text** — #2b241c
- **text-muted** — #6c5f4c
- **primary** — #a3282c
- **accent** — #4f7a67
- **lacquer** — #7a1518

## Typography

- Display: 'Noto Serif SC', 'Songti SC', Georgia, serif
- Body: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites); Classical Chinese/Asian motifs; Elegant, flowing, nature-integrated tech; sombras e elevação

## Shapes

- Radius scale: 4px, 14px, 32px 8px 32px 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/silkpunk · designmd.app -->
