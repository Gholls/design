---
version: "alpha"
name: "Typography-Driven"
description: "Typography-Driven visual system, translated from the Claude Artisan catalog for use in digital products. Oversized expressive typography as the design; Minimal imagery; type carries everything"
colors:
  primary: "#0f0f0f"
  background: "#f4f4f0"
  surface: "#ffffff"
  text: "#0f0f0f"
  accent: "#ff3d00"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
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
  order: 799
  author: "designmd.app"
  source: "https://designmd.app/library/typographic"
  tags: ["风格模板"]
---
## Overview

Typography-Driven visual system, translated from the Claude Artisan catalog for use in digital products. Oversized expressive typography as the design; Minimal imagery; type carries everything

- **Category:** minimal-organic
- **Era:** Timeless (revival 2018+)
- **Origin:** Type-as-hero editorial approach.
- **Reference:** Type-foundry sites; award-winning agency landings.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Oversized expressive typography as the design
- Minimal imagery; type carries everything
- Variable fonts, kinetic type
- Bold, confident, editorial

## Colors

- **bg** — #f4f4f0
- **surface** — #ffffff
- **surface-strong** — #eaeae4
- **border** — #0f0f0f
- **text** — #0f0f0f
- **text-muted** — #55554e
- **primary** — #0f0f0f
- **accent** — #ff3d00

## Typography

- Display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif
- Body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Oversized expressive typography as the design; Minimal imagery; type carries everything; Variable fonts, kinetic type; Bold, confident, editorial; sombras e elevação

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

<!-- Source: https://designmd.app/library/typographic · designmd.app -->
