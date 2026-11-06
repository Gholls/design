---
version: "alpha"
name: "Vienna Secession"
description: "Vienna Secession visual system, translated from the Claude Artisan catalog for use in digital products. Geometric grids of squares married to ornament; Gold leaf, decorative symbolism"
colors:
  primary: "#b8942f"
  background: "#f2ede1"
  surface: "#ffffff"
  text: "#1a1a1a"
  accent: "#6b1f2a"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Cinzel', 'Josefin Sans', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Josefin Sans', 'Century Gothic', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Josefin Sans', 'Century Gothic', sans-serif"
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
  order: 823
  author: "designmd.app"
  source: "https://designmd.app/library/vienna-secession"
  tags: ["风格模板", "decorative symbolism"]
---
## Overview

Vienna Secession visual system, translated from the Claude Artisan catalog for use in digital products. Geometric grids of squares married to ornament; Gold leaf, decorative symbolism

- **Category:** historical
- **Era:** 1897–1905
- **Origin:** Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann).
- **Reference:** Klimt Beethoven Frieze; Ver Sacrum journal.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Geometric grids of squares married to ornament
- Gold leaf, decorative symbolism
- Custom geometric lettering
- Bridge between Art Nouveau and Deco

## Colors

- **bg** — #f2ede1
- **surface** — #ffffff
- **surface-strong** — #e9e1cd
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #5c5647
- **primary** — #b8942f
- **accent** — #6b1f2a
- **violet** — #4b3a63

## Typography

- Display: 'Cinzel', 'Josefin Sans', serif
- Body: 'Josefin Sans', 'Century Gothic', sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Geometric grids of squares married to ornament; Gold leaf, decorative symbolism; Custom geometric lettering; Bridge between Art Nouveau and Deco; sombras e elevação

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

<!-- Source: https://designmd.app/library/vienna-secession · designmd.app -->
