---
version: "alpha"
name: "Light Academia"
description: "Light Academia visual system, translated from the Claude Artisan catalog for use in digital products. Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship"
colors:
  primary: "#a97142"
  background: "#f7f0e3"
  surface: "#fffdf7"
  text: "#3b3226"
  accent: "#7c8b5f"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Lora', 'Cormorant Garamond', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Lora', 'Cormorant Garamond', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 511
  author: "designmd.app"
  source: "https://designmd.app/library/light-academia"
  tags: ["风格模板", "beige", "soft gold", "linen"]
---
## Overview

Light Academia visual system, translated from the Claude Artisan catalog for use in digital products. Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Optimistic counterpart to dark academia.
- **Reference:** Light academia moodboards; cottage-scholar aesthetics.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Warm creams, beige, soft gold, sage
- Sunlit libraries, linen, pastoral scholarship
- Serif type, gentle and airy
- Hopeful, romantic learning

## Colors

- **bg** — #f7f0e3
- **surface** — #fffdf7
- **surface-strong** — #efe4c9
- **border** — #d8c9a3
- **text** — #3b3226
- **text-muted** — #7a6d55
- **primary** — #a97142
- **accent** — #7c8b5f
- **gold** — #c9a24a

## Typography

- Display: 'Playfair Display', 'Cormorant Garamond', serif
- Body: 'Lora', 'Cormorant Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship; Serif type, gentle and airy; Hopeful, romantic learning; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/light-academia · designmd.app -->
