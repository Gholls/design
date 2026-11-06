---
version: "alpha"
name: "Monastic Minimalism"
description: "Monastic Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Limestone, ink, and a single oxidized-metal accent; Deep whitespace and measured vertical rhythm"
colors:
  primary: "#515c4d"
  background: "#e9e6de"
  surface: "#f6f4ee"
  text: "#292822"
  accent: "#8f3e32"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "2px"
  lg: "4px"
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
  order: 575
  author: "designmd.app"
  source: "https://designmd.app/library/monastic-minimalism"
  tags: ["风格模板", "ink"]
---
## Overview

Monastic Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Limestone, ink, and a single oxidized-metal accent; Deep whitespace and measured vertical rhythm

- **Category:** minimal-organic
- **Era:** contemporary
- **Origin:** A contemporary digital interpretation of monastic architecture and objects: quiet materials, ritual spacing, and disciplined restraint.
- **Reference:** Contemporary monastery architecture and restrained editorial identities for cultural institutions.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Limestone, ink, and a single oxidized-metal accent
- Deep whitespace and measured vertical rhythm
- Tactile rules and recessed surfaces instead of decoration

## Colors

- **bg** — #e9e6de
- **surface** — #f6f4ee
- **surface-2** — #d8d3c8
- **text** — #292822
- **text-muted** — #6b685f
- **primary** — #515c4d
- **accent** — #8f3e32
- **stone** — #b9b3a7

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Limestone, ink, and a single oxidized-metal accent; Deep whitespace and measured vertical rhythm; Tactile rules and recessed surfaces instead of decoration; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/monastic-minimalism · designmd.app -->
