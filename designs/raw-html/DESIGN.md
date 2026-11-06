---
version: "alpha"
name: "Raw / Default HTML"
description: "Raw / Default HTML visual system, translated from the Claude Artisan catalog for use in digital products. Times New Roman, default blue/purple links; No CSS or minimal CSS"
colors:
  primary: "#0000ee"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#000000"
  accent: "#551a8b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Times New Roman', Times, serif"
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
  order: 654
  author: "designmd.app"
  source: "https://designmd.app/library/raw-html"
  tags: ["风格模板"]
---
## Overview

Raw / Default HTML visual system, translated from the Claude Artisan catalog for use in digital products. Times New Roman, default blue/purple links; No CSS or minimal CSS

- **Category:** brutalist
- **Era:** 1991–present (revival 2016+)
- **Origin:** The literal default browser stylesheet; revived as an aesthetic statement.
- **Reference:** motherfuckingwebsite.com; bettermotherfuckingwebsite.com.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Times New Roman, default blue/purple links
- No CSS or minimal CSS
- Single-column, top-to-bottom flow
- Radical performance and honesty

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #eeeeee
- **border** — #000000
- **text** — #000000
- **text-muted** — #444444
- **primary** — #0000ee
- **accent** — #551a8b
- **visited** — #551a8b

## Typography

- Display: 'Times New Roman', Times, serif
- Body: Arial, Helvetica, sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Times New Roman, default blue/purple links; No CSS or minimal CSS; Single-column, top-to-bottom flow; Radical performance and honesty; sombras e elevação

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

<!-- Source: https://designmd.app/library/raw-html · designmd.app -->
