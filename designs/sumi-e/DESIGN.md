---
version: "alpha"
name: "Sumi-e (Japanese Ink Wash)"
description: "Sumi-e (Japanese Ink Wash) visual system, translated from the Claude Artisan catalog for use in digital products. Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges"
colors:
  primary: "#232323"
  background: "#f4efe4"
  surface: "#faf6ec"
  text: "#1c1c1c"
  accent: "#b13d2c"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Zen Old Mincho', 'Shippori Mincho', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "14px"
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
  order: 747
  author: "designmd.app"
  source: "https://designmd.app/library/sumi-e"
  tags: ["风格模板"]
---
## Overview

Sumi-e (Japanese Ink Wash) visual system, translated from the Claude Artisan catalog for use in digital products. Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges

- **Category:** historical
- **Era:** 14th century–present
- **Origin:** Traditional East Asian ink wash painting, brought to Japan via Zen Buddhist monks from Song-dynasty China.
- **Reference:** Sesshu Toyo's landscape scrolls; Hasegawa Tohaku 'Pine Trees' screen.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds
- Visible brush-stroke texture and ink-bleed edges
- Deliberate negative space (ma) as a compositional element
- Asymmetric, organic compositions with a single red seal (hanko) accent

## Colors

- **bg** — #f4efe4
- **surface** — #faf6ec
- **surface-2** — #ede5d3
- **text** — #1c1c1c
- **text-muted** — #5a564c
- **primary** — #232323
- **accent** — #b13d2c
- **ink-grey** — #8c8676
- **ink-wash** — #3d3a33

## Typography

- Display: 'Zen Old Mincho', 'Shippori Mincho', serif
- Body: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges; Deliberate negative space (ma) as a compositional element; Asymmetric, organic compositions with a single red seal (hanko) accent; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 6px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/sumi-e · designmd.app -->
