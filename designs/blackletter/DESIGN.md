---
version: "alpha"
name: "Blackletter / Gothic Type"
description: "Blackletter / Gothic Type visual system, translated from the Claude Artisan catalog for use in digital products. Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes"
colors:
  primary: "#a8232f"
  background: "#14110d"
  surface: "#1e1a13"
  text: "#ece4d0"
  accent: "#c9a227"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Old Style', Georgia, 'Iowan Old Style', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Old Style', Georgia, 'Iowan Old Style', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 200
  author: "designmd.app"
  source: "https://designmd.app/library/blackletter"
  tags: ["风格模板"]
---
## Overview

Blackletter / Gothic Type visual system, translated from the Claude Artisan catalog for use in digital products. Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes

- **Category:** historical
- **Era:** 1150–1500 (revived)
- **Origin:** Medieval European calligraphy; Gutenberg's type.
- **Reference:** The New York Times masthead; metal-band logos.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Dense angular condensed letterforms
- Ornate capitals, heavy vertical strokes
- Newspaper mastheads, tattoo, metal-band use
- Solemn, historic, dramatic

## Colors

- **bg** — #14110d
- **surface** — #1e1a13
- **surface-strong** — #29231a
- **border** — #6b5b3a
- **text** — #ece4d0
- **text-muted** — #b9ac8a
- **primary** — #a8232f
- **accent** — #c9a227

## Typography

- Display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif
- Body: 'Century Old Style', Georgia, 'Iowan Old Style', serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes; Newspaper mastheads, tattoo, metal-band use; Solemn, historic, dramatic; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/blackletter · designmd.app -->
