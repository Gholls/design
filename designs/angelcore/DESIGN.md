---
version: "alpha"
name: "Angelcore"
description: "Angelcore visual system, translated from the Claude Artisan catalog for use in digital products. Cherubs, clouds, soft gold light; White/cream/pale gold, halos"
colors:
  primary: "#c9a24b"
  background: "#fdf9f0"
  surface: "#ffffff"
  text: "#4a3f2a"
  accent: "#f2c98a"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', 'Georgia', serif"
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
  order: 139
  author: "designmd.app"
  source: "https://designmd.app/library/angelcore"
  tags: ["风格模板", "clouds", "halos"]
---
## Overview

Angelcore visual system, translated from the Claude Artisan catalog for use in digital products. Cherubs, clouds, soft gold light; White/cream/pale gold, halos

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Ethereal celestial/religious-art aesthetic.
- **Reference:** Angelcore moodboards; Renaissance-cherub edits.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Cherubs, clouds, soft gold light
- White/cream/pale gold, halos
- Renaissance-painting references
- Divine, soft, romantic

## Colors

- **bg** — #fdf9f0
- **surface** — #ffffff
- **surface-strong** — #fbf1dc
- **border** — #e8d5a8
- **text** — #4a3f2a
- **text-muted** — #7a6849
- **primary** — #c9a24b
- **accent** — #f2c98a
- **halo** — #fff4d6

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Cormorant Garamond', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cherubs, clouds, soft gold light; White/cream/pale gold, halos; Renaissance-painting references; Divine, soft, romantic; sombras e elevação

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

<!-- Source: https://designmd.app/library/angelcore · designmd.app -->
