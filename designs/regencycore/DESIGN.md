---
version: "alpha"
name: "Regencycore"
description: "Regencycore visual system, translated from the Claude Artisan catalog for use in digital products. Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames"
colors:
  primary: "#c1436a"
  background: "#fbeef0"
  surface: "#fffaf6"
  text: "#4a2c3a"
  accent: "#c9a35c"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Great Vibes', 'Snell Roundhand', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "28px"
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
  order: 661
  author: "designmd.app"
  source: "https://designmd.app/library/regencycore"
  tags: ["风格模板", "empire silhouettes", "gilt frames"]
---
## Overview

Regencycore visual system, translated from the Claude Artisan catalog for use in digital products. Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Regency-era romance revival (Bridgerton, 2020).
- **Reference:** Netflix 'Bridgerton'.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Pastel florals, empire silhouettes, pearls
- Ornate script, gilt frames
- Soft romantic period palette
- Aristocratic, dreamy, floral

## Colors

- **bg** — #fbeef0
- **surface** — #fffaf6
- **surface-strong** — #f6e0e4
- **border** — #e3b8c2
- **text** — #4a2c3a
- **text-muted** — #8a6274
- **primary** — #c1436a
- **accent** — #c9a35c
- **sage** — #8fa583

## Typography

- Display: 'Great Vibes', 'Snell Roundhand', cursive
- Body: 'Cormorant Garamond', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames; Soft romantic period palette; Aristocratic, dreamy, floral; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/regencycore · designmd.app -->
