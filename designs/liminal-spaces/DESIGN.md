---
version: "alpha"
name: "Liminal Spaces"
description: "Liminal Spaces visual system, translated from the Claude Artisan catalog for use in digital products. Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet"
colors:
  primary: "#8a6a3d"
  background: "#d9cf9a"
  surface: "#e7ddab"
  text: "#24211a"
  accent: "#5f6b3f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Arial', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Arial', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Arial', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "2px"
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
  order: 514
  author: "designmd.app"
  source: "https://designmd.app/library/liminal-spaces"
  tags: ["风格模板", "worn carpet"]
---
## Overview

Liminal Spaces visual system, translated from the Claude Artisan catalog for use in digital products. Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Internet fascination with empty transitional spaces.
- **Reference:** The Backrooms; empty-mall photos.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Empty familiar-yet-wrong places (malls, halls)
- Fluorescent lighting, worn carpet
- Uncanny emptiness and déjà-vu
- Nostalgic unease

## Colors

- **bg** — #d9cf9a
- **surface** — #e7ddab
- **surface-strong** — #cfc188
- **border** — #b0a267
- **text** — #24211a
- **text-muted** — #565034
- **primary** — #8a6a3d
- **accent** — #5f6b3f
- **fluoro** — #eef0a8

## Typography

- Display: 'Arial', system-ui, sans-serif
- Body: 'Arial', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet; Uncanny emptiness and déjà-vu; Nostalgic unease; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/liminal-spaces · designmd.app -->
