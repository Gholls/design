---
version: "alpha"
name: "Clockpunk"
description: "Clockpunk visual system, translated from the Claude Artisan catalog for use in digital products. Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms"
colors:
  primary: "#b08d4f"
  background: "#3b2b1a"
  surface: "#4f3a24"
  text: "#f2e6cc"
  accent: "#7a9e7e"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Trajan Pro', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "12px"
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
  order: 250
  author: "designmd.app"
  source: "https://designmd.app/library/clockpunk"
  tags: ["风格模板", "springs"]
---
## Overview

Clockpunk visual system, translated from the Claude Artisan catalog for use in digital products. Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms

- **Category:** retrofuturism
- **Era:** 2000s–present
- **Origin:** Punk genre set in Renaissance-era clockwork tech.
- **Reference:** Assassin's Creed (Leonardo's machines).
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Clockwork gears, springs, brass automata
- Da Vinci-style sketches and mechanisms
- Renaissance materials: wood, brass
- Analog pre-steam mechanical fantasy

## Colors

- **bg** — #3b2b1a
- **surface** — #4f3a24
- **surface-strong** — #61472c
- **border** — #b08d4f
- **text** — #f2e6cc
- **text-muted** — #cbb489
- **primary** — #b08d4f
- **accent** — #7a9e7e

## Typography

- Display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif
- Body: 'Cormorant Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms; Renaissance materials: wood, brass; Analog pre-steam mechanical fantasy; sombras e elevação

## Shapes

- Radius scale: 2px, 6px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/clockpunk · designmd.app -->
