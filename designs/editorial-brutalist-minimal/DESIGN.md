---
version: "alpha"
name: "Brutalist Minimalism"
description: "Brutalist Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Big type, hairline rules, monospace accents; Lots of whitespace, few colors"
colors:
  primary: "#0a0a0a"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#0a0a0a"
  accent: "#ff3b1f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
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
  lg: "40px"
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
  order: 220
  author: "designmd.app"
  source: "https://designmd.app/library/editorial-brutalist-minimal"
  tags: ["风格模板", "hairline rules", "few colors"]
---
## Overview

Brutalist Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Big type, hairline rules, monospace accents; Lots of whitespace, few colors

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Cross of brutalism's honesty with minimalism's restraint.
- **Reference:** Fashion/agency portfolios; type-foundry sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Big type, hairline rules, monospace accents
- Lots of whitespace, few colors
- Exposed structure without decoration
- Cold, confident, editorial

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f2f2f0
- **border** — #111111
- **text** — #0a0a0a
- **text-muted** — #6b6b6b
- **primary** — #0a0a0a
- **accent** — #ff3b1f

## Typography

- Display: 'Helvetica Neue', 'Arial', sans-serif
- Body: 'Helvetica Neue', 'Arial', sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Big type, hairline rules, monospace accents; Lots of whitespace, few colors; Exposed structure without decoration; Cold, confident, editorial; sombras e elevação

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

<!-- Source: https://designmd.app/library/editorial-brutalist-minimal · designmd.app -->
