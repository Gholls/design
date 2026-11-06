---
version: "alpha"
name: "Goth / Gothic"
description: "Goth / Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs"
colors:
  primary: "#7a1128"
  background: "#0a0508"
  surface: "#150c11"
  text: "#ece3e6"
  accent: "#9c6b3f"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif"
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
  order: 438
  author: "designmd.app"
  source: "https://designmd.app/library/goth"
  tags: ["风格模板"]
---
## Overview

Goth / Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs

- **Category:** niche
- **Era:** 1980s–present
- **Origin:** Post-punk goth subculture.
- **Reference:** Goth music/fashion; The Cure-era visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Black-dominant, deep reds/purples
- Ornate Victorian/ecclesiastical motifs
- Blackletter/serif type, crosses, roses
- Romantic, dark, dramatic

## Colors

- **bg** — #0a0508
- **surface** — #150c11
- **surface-strong** — #1f1218
- **border** — #4a1f2e
- **text** — #ece3e6
- **text-muted** — #b79aa5
- **primary** — #7a1128
- **accent** — #9c6b3f
- **blood** — #5c0e1f
- **rose** — #b83a52

## Typography

- Display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif
- Body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs; Blackletter/serif type, crosses, roses; Romantic, dark, dramatic; sombras e elevação

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

<!-- Source: https://designmd.app/library/goth · designmd.app -->
