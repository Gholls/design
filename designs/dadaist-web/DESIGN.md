---
version: "alpha"
name: "Dadaist / Collage Web"
description: "Dadaist / Collage Web visual system, translated from the Claude Artisan catalog for use in digital products. Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos"
colors:
  primary: "#ff3b30"
  background: "#fff6ea"
  surface: "#ffffff"
  text: "#101010"
  accent: "#0043ff"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Times New Roman', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "3px"
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
  order: 305
  author: "designmd.app"
  source: "https://designmd.app/library/dadaist-web"
  tags: ["风格模板"]
---
## Overview

Dadaist / Collage Web visual system, translated from the Claude Artisan catalog for use in digital products. Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos

- **Category:** brutalist
- **Era:** 2015–present (from 1916 Dada)
- **Origin:** Digital revival of Dada photomontage and chance-based layout.
- **Reference:** Art-school microsites; fashion editorial pages.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Cut-and-paste photomontage, ransom-note type
- Absurd juxtaposition and chaos
- Mixed media scraps and stickers
- Anti-rational composition

## Colors

- **bg** — #fff6ea
- **surface** — #ffffff
- **surface-strong** — #ffe37a
- **border** — #101010
- **text** — #101010
- **text-muted** — #514c3f
- **primary** — #ff3b30
- **accent** — #0043ff
- **sticker** — #34c759
- **scrap-shadow** — rgba(16, 16, 16, 0.9)

## Typography

- Display: 'Times New Roman', 'Georgia', serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos; Mixed media scraps and stickers; Anti-rational composition; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 3px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/dadaist-web · designmd.app -->
