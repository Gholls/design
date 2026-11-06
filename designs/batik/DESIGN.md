---
version: "alpha"
name: "Batik"
description: "Batik visual system, translated from the Claude Artisan catalog for use in digital products. Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing"
colors:
  primary: "#2c4a6e"
  background: "#f3e6cd"
  surface: "#faf1de"
  text: "#2b1c12"
  accent: "#b5501f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Marcellus', 'Cormorant Garamond', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', 'Marcellus', system-ui, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', 'Marcellus', system-ui, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "14px"
  lg: "26px"
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
  order: 181
  author: "designmd.app"
  source: "https://designmd.app/library/batik"
  tags: ["风格模板", "Batik visual system", "parang"]
---
## Overview

Batik visual system, translated from the Claude Artisan catalog for use in digital products. Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing

- **Category:** texture
- **Era:** 6th century-present
- **Origin:** Wax-resist textile dyeing practiced across Indonesia (especially Java), Malaysia, and West Africa, in which molten wax is applied to cloth before dyeing to resist color and then boiled away.
- **Reference:** Javanese tulis (hand-drawn) batik sarongs; Yogyakarta and Solo court batik patterns; West African wax-print cloth.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Intricate repeating organic/geometric pattern (florals, parang, kawung motifs)
- Fine crackle/veining lines from wax-resist cracking during dyeing
- Warm indigo/rust/ochre dye palette on a natural cloth ground

## Colors

- **bg** — #f3e6cd
- **surface** — #faf1de
- **surface-2** — #e7d3ab
- **text** — #2b1c12
- **text-muted** — #6b5335
- **primary** — #2c4a6e
- **accent** — #b5501f
- **ochre** — #c68a2e
- **indigo-deep** — #1c3350

## Typography

- Display: 'Marcellus', 'Cormorant Garamond', serif
- Body: 'Cormorant Garamond', 'Marcellus', system-ui, serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing; Warm indigo/rust/ochre dye palette on a natural cloth ground; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 14px, 26px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/batik · designmd.app -->
