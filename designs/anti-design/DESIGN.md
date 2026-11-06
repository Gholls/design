---
version: "alpha"
name: "Anti-Design"
description: "Anti-Design visual system, translated from the Claude Artisan catalog for use in digital products. Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced"
colors:
  primary: "#0000ff"
  background: "#ffe600"
  surface: "#ff00ff"
  text: "#000000"
  accent: "#ff0000"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Times New Roman', Times, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Times New Roman', Times, serif"
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
  order: 144
  author: "designmd.app"
  source: "https://designmd.app/library/anti-design"
  tags: ["风格模板"]
---
## Overview

Anti-Design visual system, translated from the Claude Artisan catalog for use in digital products. Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced

- **Category:** brutalist
- **Era:** 2016–present
- **Origin:** Reaction against polished 'design-by-committee' minimalism.
- **Reference:** Balenciaga site experiments; art/fashion microsites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Deliberate rule-breaking: clashing type, misalignment
- Default/system styling embraced
- Rejects visual hierarchy conventions
- Provocative, expressive, DIY

## Colors

- **bg** — #ffe600
- **surface** — #ff00ff
- **surface-strong** — #00ffff
- **border** — #000000
- **text** — #000000
- **text-muted** — #1a1a1a
- **primary** — #0000ff
- **accent** — #ff0000

## Typography

- Display: 'Comic Sans MS', 'Chalkboard SE', cursive
- Body: 'Times New Roman', Times, serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced; Rejects visual hierarchy conventions; Provocative, expressive, DIY; sombras e elevação

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

<!-- Source: https://designmd.app/library/anti-design · designmd.app -->
