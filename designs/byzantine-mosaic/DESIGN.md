---
version: "alpha"
name: "Byzantine Mosaic"
description: "Byzantine Mosaic visual system, translated from the Claude Artisan catalog for use in digital products. Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby"
colors:
  primary: "#d4af37"
  background: "#0d1b3d"
  surface: "#142a5c"
  text: "#f5e6b8"
  accent: "#7a1f3d"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Cinzel', 'Cormorant Garamond', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', 'EB Garamond', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', 'EB Garamond', serif"
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
  order: 222
  author: "designmd.app"
  source: "https://designmd.app/library/byzantine-mosaic"
  tags: ["风格模板", "emerald", "ruby"]
---
## Overview

Byzantine Mosaic visual system, translated from the Claude Artisan catalog for use in digital products. Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby

- **Category:** historical
- **Era:** 4th–15th century
- **Origin:** Eastern Roman (Byzantine) Empire; sacred mosaic decoration of churches from Ravenna to Constantinople.
- **Reference:** San Vitale mosaics, Ravenna; Hagia Sophia apse mosaics.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Gold-ground tesserae backgrounds with luminous, shimmering fields
- Jewel-toned glass tile colors: deep sapphire, emerald, ruby
- Rigid, frontal, hieratic figures with almond eyes
- Geometric tessellated borders framing every panel

## Colors

- **bg** — #0d1b3d
- **surface** — #142a5c
- **surface-2** — #1c3a7a
- **text** — #f5e6b8
- **text-muted** — #c9b57a
- **primary** — #d4af37
- **accent** — #7a1f3d
- **emerald-tile** — #1f6b4a
- **gold-ground** — #caa036

## Typography

- Display: 'Cinzel', 'Cormorant Garamond', serif
- Body: 'Cormorant Garamond', 'EB Garamond', serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby; Rigid, frontal, hieratic figures with almond eyes; Geometric tessellated borders framing every panel; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/byzantine-mosaic · designmd.app -->
