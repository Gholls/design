---
version: "alpha"
name: "Scandinavian / Nordic"
description: "Scandinavian / Nordic visual system, translated from the Claude Artisan catalog for use in digital products. Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered"
colors:
  primary: "#3a5a40"
  background: "#f7f4ef"
  surface: "#ffffff"
  text: "#2b2b2b"
  accent: "#c98a6a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fraunces', 'Poppins', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Work Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Work Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "32px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "32px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "48px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "32px"

gallery:
  order: 692
  author: "designmd.app"
  source: "https://designmd.app/library/scandinavian"
  tags: ["风格模板", "cozy (hygge)", "uncluttered"]
---
## Overview

Scandinavian / Nordic visual system, translated from the Claude Artisan catalog for use in digital products. Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered

- **Category:** minimal-organic
- **Era:** 1930s–present
- **Origin:** Nordic modernism (Alvar Aalto, Arne Jacobsen).
- **Reference:** IKEA; Muuto; HAY.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Warm minimalism: light woods, soft neutrals
- Functional, cozy (hygge), uncluttered
- Natural materials and muted accents
- Human-centered simplicity

## Colors

- **bg** — #f7f4ef
- **surface** — #ffffff
- **surface-2** — #efe9e1
- **text** — #2b2b2b
- **text-muted** — #6f6a63
- **primary** — #3a5a40
- **accent** — #c98a6a
- **sky** — #a8c5d6
- **wood** — #d8b8a0

## Typography

- Display: 'Fraunces', 'Poppins', serif
- Body: 'Poppins', 'Work Sans', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered; Natural materials and muted accents; Human-centered simplicity; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/scandinavian · designmd.app -->
