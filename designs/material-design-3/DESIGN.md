---
version: "alpha"
name: "Material Design 3 / Material You"
description: "Material Design 3 / Material You visual system, translated from the Claude Artisan catalog for use in digital products. Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens"
colors:
  primary: "#6750a4"
  background: "#fef7ff"
  surface: "#fef7ff"
  text: "#1d1b20"
  accent: "#6750a4"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Roboto Flex', 'Roboto', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Roboto', 'Roboto Flex', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Roboto', 'Roboto Flex', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
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
  order: 541
  author: "designmd.app"
  source: "https://designmd.app/library/material-design-3"
  tags: ["风格模板"]
---
## Overview

Material Design 3 / Material You visual system, translated from the Claude Artisan catalog for use in digital products. Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens

- **Category:** flat-platform
- **Era:** 2021–present
- **Origin:** Google; Material You (2021), Material 3 Expressive (Google I/O 2025).
- **Reference:** Android 12+; Google apps; Wear OS 5.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Dynamic color extracted from user wallpaper (tonal palettes)
- Larger rounded shapes, shape-morphing tokens
- Expressive spring-physics motion
- Design tokens as single source of truth; updated components

## Colors

- **bg** — #fef7ff
- **surface** — #fef7ff
- **surface-container** — #f3edf7
- **surface-variant** — #e7e0ec
- **text** — #1d1b20
- **text-muted** — #49454f
- **primary** — #6750a4
- **on-primary** — #ffffff
- **secondary** — #625b71
- **tertiary** — #7d5260
- **outline** — #79747e
- **error** — #b3261e

## Typography

- Display: 'Roboto Flex', 'Roboto', system-ui, sans-serif
- Body: 'Roboto', 'Roboto Flex', system-ui, sans-serif
- Mono: 'Roboto Mono', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens; Expressive spring-physics motion; Design tokens as single source of truth; updated components; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 12px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/material-design-3 · designmd.app -->
