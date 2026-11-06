---
version: "alpha"
name: "Fairycore"
description: "Fairycore visual system, translated from the Claude Artisan catalog for use in digital products. Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy"
colors:
  primary: "#c9679a"
  background: "#fdf3f8"
  surface: "#fffdfb"
  text: "#4a2b45"
  accent: "#8fb98a"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Parisienne', 'Georgia', serif"
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
  order: 388
  author: "designmd.app"
  source: "https://designmd.app/library/fairycore"
  tags: ["风格模板", "wings", "flowers"]
---
## Overview

Fairycore visual system, translated from the Claude Artisan catalog for use in digital products. Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Whimsical fairy-tale nature aesthetic.
- **Reference:** Fairycore Pinterest/TikTok.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Ethereal pastels, wings, flowers, glow
- Enchanted-forest whimsy
- Sparkle and soft light
- Dreamy, magical, delicate

## Colors

- **bg** — #fdf3f8
- **bg-gradient-a** — #f6e3f5
- **bg-gradient-b** — #e3f0e6
- **surface** — #fffdfb
- **surface-strong** — #fbeaf3
- **border** — #e7bfd9
- **text** — #4a2b45
- **text-muted** — #7a5573
- **primary** — #c9679a
- **accent** — #8fb98a
- **glow** — #fff3c4

## Typography

- Display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy; Sparkle and soft light; Dreamy, magical, delicate; sombras e elevação

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

<!-- Source: https://designmd.app/library/fairycore · designmd.app -->
