---
version: "alpha"
name: "Indie Sleaze"
description: "Indie Sleaze visual system, translated from the Claude Artisan catalog for use in digital products. Harsh on-camera flash photography; Grainy, messy, American Apparel era"
colors:
  primary: "#ff2d9c"
  background: "#0c0c0c"
  surface: "#161616"
  text: "#f5f5f2"
  accent: "#ccff00"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Impact', 'Arial Black', sans-serif"
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
  sm: "1px"
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
  order: 482
  author: "designmd.app"
  source: "https://designmd.app/library/indie-sleaze"
  tags: ["风格模板", "messy", "American Apparel era"]
---
## Overview

Indie Sleaze visual system, translated from the Claude Artisan catalog for use in digital products. Harsh on-camera flash photography; Grainy, messy, American Apparel era

- **Category:** niche
- **Era:** 2006–2012 (revived 2021)
- **Origin:** Late-2000s hipster party aesthetic.
- **Reference:** Cobrasnake party photos; blog-house era.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Harsh on-camera flash photography
- Grainy, messy, American Apparel era
- Neon-on-black party grit
- Ironic, hedonistic, lo-fi

## Colors

- **bg** — #0c0c0c
- **surface** — #161616
- **surface-strong** — #1f1f1f
- **border** — #3a3a3a
- **text** — #f5f5f2
- **text-muted** — #b8b3ad
- **primary** — #ff2d9c
- **accent** — #ccff00
- **flash** — #ffffff

## Typography

- Display: 'Impact', 'Arial Black', sans-serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Harsh on-camera flash photography; Grainy, messy, American Apparel era; Neon-on-black party grit; Ironic, hedonistic, lo-fi; sombras e elevação

## Shapes

- Radius scale: 1px, 2px, 3px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/indie-sleaze · designmd.app -->
