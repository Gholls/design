---
version: "alpha"
name: "Illuminated Manuscript"
description: "Illuminated Manuscript visual system, translated from the Claude Artisan catalog for use in digital products. Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia"
colors:
  primary: "#7a1f2b"
  background: "#f3e6c4"
  surface: "#f8edd0"
  text: "#2a1a10"
  accent: "#b8860b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'EB Garamond', 'Palatino', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'EB Garamond', 'Palatino', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
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
  order: 481
  author: "designmd.app"
  source: "https://designmd.app/library/illuminated-manuscript"
  tags: ["风格模板", "vines", "marginalia"]
---
## Overview

Illuminated Manuscript visual system, translated from the Claude Artisan catalog for use in digital products. Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia

- **Category:** historical
- **Era:** 500–1500 CE
- **Origin:** Medieval European monastic scriptoria.
- **Reference:** Book of Kells; Très Riches Heures.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Ornate drop caps and gold-leaf illumination
- Decorative borders, vines, marginalia
- Blackletter script
- Rich reds, blues, gold on vellum

## Colors

- **bg** — #f3e6c4
- **surface** — #f8edd0
- **surface-strong** — #efdbaa
- **border** — #7a5a1e
- **text** — #2a1a10
- **text-muted** — #5a4632
- **primary** — #7a1f2b
- **accent** — #b8860b
- **blue** — #1e3a6e
- **gold** — #c9971f
- **sm** — 2px
- **md** — 2px
- **lg** — 2px
- **pill** — 999px

## Typography

- Display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif
- Body: 'EB Garamond', 'Palatino', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia; Blackletter script; Rich reds, blues, gold on vellum; sombras e elevação

## Shapes

- Radius scale: undefined, undefined, undefined.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/illuminated-manuscript · designmd.app -->
