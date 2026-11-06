---
version: "alpha"
name: "Neoclassicism"
description: "Neoclassicism visual system, translated from the Claude Artisan catalog for use in digital products. Strict symmetric composition, centered layouts; Column/pediment motifs used as structural framing, not decoration"
colors:
  primary: "#8a6d3b"
  background: "#f2ede0"
  surface: "#faf7ef"
  text: "#1f2733"
  accent: "#2f3b52"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Cinzel, Trajan Pro, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Trajan Pro, Cinzel, Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Trajan Pro, Cinzel, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "4px"
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
  order: 588
  author: "designmd.app"
  source: "https://designmd.app/library/neoclassicism"
  tags: ["风格模板", "not decoration"]
---
## Overview

Neoclassicism visual system, translated from the Claude Artisan catalog for use in digital products. Strict symmetric composition, centered layouts; Column/pediment motifs used as structural framing, not decoration

- **Category:** historical
- **Era:** 1760s–1830s
- **Origin:** 18th-century European revival of Greco-Roman art and architecture, prompted by the excavations of Pompeii and Herculaneum — a reaction against Baroque/Rococo excess.
- **Reference:** The Panthéon, Paris; Jacques-Louis David's history paintings; Wedgwood's Jasperware relief medallions.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Strict symmetric composition, centered layouts
- Column/pediment motifs used as structural framing, not decoration
- Cream/marble-white surfaces with muted gold and deep ink accents; serif type evoking carved stone

## Colors

- **bg** — #f2ede0
- **surface** — #faf7ef
- **surface-2** — #e3dbc7
- **text** — #1f2733
- **text-muted** — #5a5850
- **primary** — #8a6d3b
- **accent** — #2f3b52
- **marble-vein** — #c9c0a8
- **ink** — #14181f

## Typography

- Display: Cinzel, Trajan Pro, serif
- Body: Trajan Pro, Cinzel, Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Strict symmetric composition, centered layouts; Column/pediment motifs used as structural framing, not decoration; Cream/marble-white surfaces with muted gold and deep ink accents; serif type evoking carved stone; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/neoclassicism · designmd.app -->
