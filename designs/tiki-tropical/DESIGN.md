---
version: "alpha"
name: "Tiki / Tropical"
description: "Tiki / Tropical visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones"
colors:
  primary: "#e0631f"
  background: "#f2d9a8"
  surface: "#f8e6c4"
  text: "#2e1a0f"
  accent: "#1f7a6c"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Bungee', 'Baloo 2', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Futura', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Futura', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
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
  order: 789
  author: "designmd.app"
  source: "https://designmd.app/library/tiki-tropical"
  tags: ["风格模板", "palms", "hibiscus", "teal"]
---
## Overview

Tiki / Tropical visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones

- **Category:** niche
- **Era:** 1930s–1960s revival
- **Origin:** Mid-century Polynesian pop fantasy.
- **Reference:** Tiki bars; Trader Vic's; exotica album covers.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Bamboo, palms, hibiscus, tiki masks
- Sunset oranges, teal, wood tones
- Exotica lounge vibe
- Escapist, kitschy, warm

## Colors

- **bg** — #f2d9a8
- **surface** — #f8e6c4
- **surface-strong** — #eccb92
- **border** — #a9631f
- **text** — #2e1a0f
- **text-muted** — #6b4526
- **primary** — #e0631f
- **accent** — #1f7a6c
- **hibiscus** — #d92b52

## Typography

- Display: 'Bungee', 'Baloo 2', cursive
- Body: 'Poppins', 'Futura', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones; Exotica lounge vibe; Escapist, kitschy, warm; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/tiki-tropical · designmd.app -->
