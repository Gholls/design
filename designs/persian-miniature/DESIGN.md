---
version: "alpha"
name: "Persian Miniature"
description: "Persian Miniature visual system, translated from the Claude Artisan catalog for use in digital products. Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf"
colors:
  primary: "#1c398e"
  background: "#f6ecd2"
  surface: "#fbf5e4"
  text: "#2a1a3d"
  accent: "#a61b29"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Scheherazade New', 'Cormorant Garamond', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', 'Scheherazade New', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', 'Scheherazade New', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "10px"
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
  order: 624
  author: "designmd.app"
  source: "https://designmd.app/library/persian-miniature"
  tags: ["风格模板", "vermillion", "gold leaf"]
---
## Overview

Persian Miniature visual system, translated from the Claude Artisan catalog for use in digital products. Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf

- **Category:** historical
- **Era:** 13th–17th century
- **Origin:** Persianate manuscript painting tradition across Timurid, Safavid, and Mughal courts.
- **Reference:** Shahnameh manuscript illustrations; Behzad's court scenes.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dense, intricate detail across flattened, multi-perspective compositions
- Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf
- Ornamental floral (islimi) borders framing every panel
- Fine, precise linework and delicate figure rendering

## Colors

- **bg** — #f6ecd2
- **surface** — #fbf5e4
- **surface-2** — #ecdcb0
- **text** — #2a1a3d
- **text-muted** — #5c4a70
- **primary** — #1c398e
- **accent** — #a61b29
- **gold-leaf** — #c9972c
- **turquoise** — #2f7d6b

## Typography

- Display: 'Scheherazade New', 'Cormorant Garamond', serif
- Body: 'Cormorant Garamond', 'Scheherazade New', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf; Ornamental floral (islimi) borders framing every panel; Fine, precise linework and delicate figure rendering; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 10px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/persian-miniature · designmd.app -->
