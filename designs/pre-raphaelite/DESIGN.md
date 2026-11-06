---
version: "alpha"
name: "Pre-Raphaelite"
description: "Pre-Raphaelite visual system, translated from the Claude Artisan catalog for use in digital products. Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern"
colors:
  primary: "#8c1f3f"
  background: "#1a0f14"
  surface: "#2a151c"
  text: "#f3e6d8"
  accent: "#1f6b4a"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Cormorant Garamond, EB Garamond, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "EB Garamond, Cormorant Garamond, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "EB Garamond, Cormorant Garamond, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "8px"
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
  order: 641
  author: "designmd.app"
  source: "https://designmd.app/library/pre-raphaelite"
  tags: ["风格模板", "crimson", "gold)"]
---
## Overview

Pre-Raphaelite visual system, translated from the Claude Artisan catalog for use in digital products. Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern

- **Category:** historical
- **Era:** 1848–1880s
- **Origin:** England, the Pre-Raphaelite Brotherhood (Rossetti, Millais, Holman Hunt, Burne-Jones) — a rejection of academic painting in favor of jewel-toned color, medieval-romantic subjects, and minute botanical detail.
- **Reference:** Rossetti's Proserpine and Beata Beatrix; Millais's Ophelia; Burne-Jones's The Golden Stairs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint
- Dense, specific botanical motifs framing content, not repeating as flat pattern
- Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood

## Colors

- **bg** — #1a0f14
- **surface** — #2a151c
- **surface-2** — #3d1f28
- **text** — #f3e6d8
- **text-muted** — #cbb8a8
- **primary** — #8c1f3f
- **accent** — #1f6b4a
- **gold** — #c9a227
- **ivory** — #fff6e8

## Typography

- Display: Cormorant Garamond, EB Garamond, serif
- Body: EB Garamond, Cormorant Garamond, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern; Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 8px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/pre-raphaelite · designmd.app -->
