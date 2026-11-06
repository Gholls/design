---
version: "alpha"
name: "Dieselpunk"
description: "Dieselpunk visual system, translated from the Claude Artisan catalog for use in digital products. Interwar/WWII industrial machine age; Art Deco + military-industrial forms"
colors:
  primary: "#b5461f"
  background: "#23201a"
  surface: "#2e2a22"
  text: "#ece3cf"
  accent: "#8a9a5b"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Bebas Neue', 'Oswald', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "3px"
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
  order: 329
  author: "designmd.app"
  source: "https://designmd.app/library/dieselpunk"
  tags: ["风格模板"]
---
## Overview

Dieselpunk visual system, translated from the Claude Artisan catalog for use in digital products. Interwar/WWII industrial machine age; Art Deco + military-industrial forms

- **Category:** retrofuturism
- **Era:** 2001–present
- **Origin:** Term coined ~2001; aesthetic of 1920s–1940s diesel era.
- **Reference:** BioShock; Sky Captain and the World of Tomorrow.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Interwar/WWII industrial machine age
- Art Deco + military-industrial forms
- Muted metals, propaganda-poster palette
- Streamlined engines, zeppelins, riveted steel

## Colors

- **bg** — #23201a
- **surface** — #2e2a22
- **surface-strong** — #3a352b
- **border** — #6b5f45
- **text** — #ece3cf
- **text-muted** — #b8ab8c
- **primary** — #b5461f
- **accent** — #8a9a5b
- **rivet** — #4a4436

## Typography

- Display: 'Bebas Neue', 'Oswald', sans-serif
- Body: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Interwar/WWII industrial machine age; Art Deco + military-industrial forms; Muted metals, propaganda-poster palette; Streamlined engines, zeppelins, riveted steel; sombras e elevação

## Shapes

- Radius scale: 2px, 3px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/dieselpunk · designmd.app -->
