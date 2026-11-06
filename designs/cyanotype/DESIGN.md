---
version: "alpha"
name: "Cyanotype"
description: "Cyanotype visual system, translated from the Claude Artisan catalog for use in digital products. Prussian-blue monochrome photographic prints; White silhouettes on deep blue"
colors:
  primary: "#ffffff"
  background: "#0d2c61"
  surface: "#123a7a"
  text: "#eaf1ff"
  accent: "#a9c4f5"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
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
  order: 293
  author: "designmd.app"
  source: "https://designmd.app/library/cyanotype"
  tags: ["风格模板"]
---
## Overview

Cyanotype visual system, translated from the Claude Artisan catalog for use in digital products. Prussian-blue monochrome photographic prints; White silhouettes on deep blue

- **Category:** texture
- **Era:** 1842–present
- **Origin:** Sir John Herschel's photographic process.
- **Reference:** Anna Atkins botanical cyanotypes.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Prussian-blue monochrome photographic prints
- White silhouettes on deep blue
- Botanical/photogram subjects
- Antique handmade quality

## Colors

- **bg** — #0d2c61
- **surface** — #123a7a
- **surface-strong** — #17458f
- **border** — #6f92d1
- **text** — #eaf1ff
- **text-muted** — #b6c9ec
- **primary** — #ffffff
- **accent** — #a9c4f5
- **bleed** — rgba(255, 255, 255, 0.10)

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Prussian-blue monochrome photographic prints; White silhouettes on deep blue; Botanical/photogram subjects; Antique handmade quality; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/cyanotype · designmd.app -->
