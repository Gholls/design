---
version: "alpha"
name: "Witchcore / Witchy"
description: "Witchcore / Witchy visual system, translated from the Claude Artisan catalog for use in digital products. Crystals, herbs, candles, tarot, moons; Deep purples, black, forest green, gold"
colors:
  primary: "#7e57c2"
  background: "#1a1523"
  surface: "#241d31"
  text: "#ece6f5"
  accent: "#c9a24b"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'UnifrakturCook', 'Cinzel', serif"
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
  sm: "6px"
  md: "12px"
  lg: "20px"
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
  order: 848
  author: "designmd.app"
  source: "https://designmd.app/library/witchcore"
  tags: ["风格模板", "herbs", "candles", "tarot"]
---
## Overview

Witchcore / Witchy visual system, translated from the Claude Artisan catalog for use in digital products. Crystals, herbs, candles, tarot, moons; Deep purples, black, forest green, gold

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Mystical/occult cottage aesthetic.
- **Reference:** Witchcore Pinterest; tarot-brand identities.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Crystals, herbs, candles, tarot, moons
- Deep purples, black, forest green, gold
- Celestial and botanical symbols
- Mystical, earthy, cozy-dark

## Colors

- **bg** — #1a1523
- **surface** — #241d31
- **surface-strong** — #2e2540
- **border** — #6b4f9e
- **text** — #ece6f5
- **text-muted** — #b6a8d1
- **primary** — #7e57c2
- **accent** — #c9a24b
- **forest** — #2f5233

## Typography

- Display: 'UnifrakturCook', 'Cinzel', serif
- Body: 'Cormorant Garamond', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Crystals, herbs, candles, tarot, moons; Deep purples, black, forest green, gold; Celestial and botanical symbols; Mystical, earthy, cozy-dark; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/witchcore · designmd.app -->
