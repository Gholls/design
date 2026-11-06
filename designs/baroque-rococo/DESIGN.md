---
version: "alpha"
name: "Baroque / Rococo"
description: "Baroque / Rococo visual system, translated from the Claude Artisan catalog for use in digital products. Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)"
colors:
  primary: "#8c1c2b"
  background: "#2a1116"
  surface: "#3a1a20"
  text: "#f3e6d0"
  accent: "#c9a24b"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cinzel Decorative', 'Playfair Display', Georgia, serif"
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
  sm: "6px"
  md: "14px"
  lg: "16px"
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
  order: 187
  author: "designmd.app"
  source: "https://designmd.app/library/baroque-rococo"
  tags: ["风格模板", "scrollwork"]
---
## Overview

Baroque / Rococo visual system, translated from the Claude Artisan catalog for use in digital products. Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)

- **Category:** historical
- **Era:** 1600–1780
- **Origin:** European Baroque (17th c.) and Rococo (18th c.).
- **Reference:** Versailles interiors; Fragonard paintings.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Lavish ornament, scrollwork, gilding
- Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)
- Curved cartouches and flourishes
- Opulent, theatrical, aristocratic

## Colors

- **bg** — #2a1116
- **surface** — #3a1a20
- **surface-strong** — #4a232b
- **border** — #c9a24b
- **text** — #f3e6d0
- **text-muted** — #d8bfa0
- **primary** — #8c1c2b
- **accent** — #c9a24b

## Typography

- Display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif
- Body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo); Curved cartouches and flourishes; Opulent, theatrical, aristocratic; sombras e elevação

## Shapes

- Radius scale: 6px, 14px, 34px 8px 34px 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/baroque-rococo · designmd.app -->
