---
version: "alpha"
name: "Maximalism"
description: "Maximalism visual system, translated from the Claude Artisan catalog for use in digital products. Dense layering, clashing color and pattern; Big expressive type, many focal points"
colors:
  primary: "#ff007a"
  background: "#14002e"
  surface: "#2a0a52"
  text: "#fff6d5"
  accent: "#ffd400"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Rubik Mono One', 'Fraunces', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Fraunces', 'Poppins', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Fraunces', 'Poppins', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
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
  order: 547
  author: "designmd.app"
  source: "https://designmd.app/library/maximalism"
  tags: ["风格模板", "many focal points"]
---
## Overview

Maximalism visual system, translated from the Claude Artisan catalog for use in digital products. Dense layering, clashing color and pattern; Big expressive type, many focal points

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Reaction against flat minimalism; 'more is more'.
- **Reference:** Gucci editorial; many 2020s portfolio/agency sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Dense layering, clashing color and pattern
- Big expressive type, many focal points
- Ornament, texture, collage, saturation
- Bold, joyful visual overload

## Colors

- **bg** — #14002e
- **surface** — #2a0a52
- **text** — #fff6d5
- **text-muted** — #f2c9ff
- **primary** — #ff007a
- **accent** — #ffd400
- **lime** — #aaff00
- **cyan** — #00e5ff
- **orange** — #ff6a00

## Typography

- Display: 'Rubik Mono One', 'Fraunces', serif
- Body: 'Fraunces', 'Poppins', system-ui, sans-serif
- Mono: 'Space Mono', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense layering, clashing color and pattern; Big expressive type, many focal points; Ornament, texture, collage, saturation; Bold, joyful visual overload; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/maximalism · designmd.app -->
