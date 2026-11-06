---
version: "alpha"
name: "Futurism (Italian)"
description: "Futurism (Italian) visual system, translated from the Claude Artisan catalog for use in digital products. Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines"
colors:
  primary: "#c81d1d"
  background: "#efe6d8"
  surface: "#f7f1e6"
  text: "#171512"
  accent: "#1c1c8a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Bifur', 'Anton', 'Impact', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Futura', 'Eurostile', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Futura', 'Eurostile', Arial, sans-serif"
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
  order: 421
  author: "designmd.app"
  source: "https://designmd.app/library/futurism-italian"
  tags: ["风格模板", "machines", "motion lines"]
---
## Overview

Futurism (Italian) visual system, translated from the Claude Artisan catalog for use in digital products. Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines

- **Category:** historical
- **Era:** 1909–1944
- **Origin:** Italy (Filippo Marinetti).
- **Reference:** Marinetti 'Zang Tumb Tumb'; Fortunato Depero.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Words-in-freedom: explosive dynamic typography
- Speed, machines, motion lines
- Diagonal, chaotic type on the page
- Celebration of technology and energy

## Colors

- **bg** — #efe6d8
- **surface** — #f7f1e6
- **surface-strong** — #e9ddc7
- **border** — #171512
- **text** — #171512
- **text-muted** — #4c4640
- **primary** — #c81d1d
- **accent** — #1c1c8a

## Typography

- Display: 'Bifur', 'Anton', 'Impact', sans-serif
- Body: 'Futura', 'Eurostile', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines; Diagonal, chaotic type on the page; Celebration of technology and energy; sombras e elevação

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

<!-- Source: https://designmd.app/library/futurism-italian · designmd.app -->
