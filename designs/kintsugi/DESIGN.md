---
version: "alpha"
name: "Kintsugi"
description: "Kintsugi visual system, translated from the Claude Artisan catalog for use in digital products. Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature"
colors:
  primary: "#d4a53d"
  background: "#1c1a18"
  surface: "#262320"
  text: "#f0e6d2"
  accent: "#8a6a3a"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Shippori Mincho, Noto Serif JP, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Noto Serif JP, Shippori Mincho, Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Noto Serif JP, Shippori Mincho, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
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
  order: 502
  author: "designmd.app"
  source: "https://designmd.app/library/kintsugi"
  tags: ["风格模板", "division"]
---
## Overview

Kintsugi visual system, translated from the Claude Artisan catalog for use in digital products. Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature

- **Category:** historical
- **Era:** 15th century–present
- **Origin:** Japanese art of repairing broken ceramics with gold-dusted lacquer (urushi), rooted in wabi-sabi philosophy — the break and its repair become part of the object's history.
- **Reference:** Muromachi-period repaired tea bowls (chawan) in the Freer Gallery and Tokyo National Museum collections.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material
- Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature
- Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths

## Colors

- **bg** — #1c1a18
- **surface** — #262320
- **surface-2** — #322d28
- **text** — #f0e6d2
- **text-muted** — #b8ab94
- **primary** — #d4a53d
- **accent** — #8a6a3a
- **seam** — #f0c04d
- **lacquer** — #100e0c

## Typography

- Display: Shippori Mincho, Noto Serif JP, serif
- Body: Noto Serif JP, Shippori Mincho, Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature; Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 3px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/kintsugi · designmd.app -->
