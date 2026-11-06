---
version: "alpha"
name: "Formicapunk"
description: "Formicapunk visual system, translated from the Claude Artisan catalog for use in digital products. Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome"
colors:
  primary: "#ff5fa2"
  background: "#170f2e"
  surface: "#241a44"
  text: "#f4eefe"
  accent: "#2fe6d8"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 410
  author: "designmd.app"
  source: "https://designmd.app/library/formicapunk"
  tags: ["风格模板", "neon"]
---
## Overview

Formicapunk visual system, translated from the Claude Artisan catalog for use in digital products. Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome

- **Category:** retrofuturism
- **Era:** 2010s (evokes 1980s)
- **Origin:** Neon-lit 1980s corporate/consumer futurism.
- **Reference:** Miami Vice; 80s corporate design.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Formica, neon, geometric 80s corporate style
- Miami-Vice pastels + chrome
- Grid patterns, glass towers
- Optimistic 80s consumer future

## Colors

- **bg** — #170f2e
- **surface** — #241a44
- **surface-strong** — #2e2158
- **border** — #5b4b96
- **text** — #f4eefe
- **text-muted** — #b6a7dd
- **primary** — #ff5fa2
- **accent** — #2fe6d8
- **chrome** — #c9c3e0

## Typography

- Display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif
- Body: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif
- Mono: 'Space Mono', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome; Grid patterns, glass towers; Optimistic 80s consumer future; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/formicapunk · designmd.app -->
