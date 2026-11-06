---
version: "alpha"
name: "Stonepunk"
description: "Stonepunk visual system, translated from the Claude Artisan catalog for use in digital products. Stone, bone, wood 'technology'; Earthy, rough, primitive materials"
colors:
  primary: "#8a3b1f"
  background: "#d8c9a8"
  surface: "#cabb96"
  text: "#2c2013"
  accent: "#4a6b4a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Rock Salt', 'Kalam', 'Rockwell', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Rockwell', 'Roboto Slab', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Rockwell', 'Roboto Slab', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "5px"
  lg: "9px"
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
  order: 741
  author: "designmd.app"
  source: "https://designmd.app/library/stonepunk"
  tags: ["风格模板", "bone", "rough", "primitive materials"]
---
## Overview

Stonepunk visual system, translated from the Claude Artisan catalog for use in digital products. Stone, bone, wood 'technology'; Earthy, rough, primitive materials

- **Category:** retrofuturism
- **Era:** 2000s–present
- **Origin:** Punk genre using stone-age technology.
- **Reference:** The Flintstones; The Croods.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Stone, bone, wood 'technology'
- Earthy, rough, primitive materials
- Cave-painting motifs
- Anachronistic prehistoric tech

## Colors

- **bg** — #d8c9a8
- **surface** — #cabb96
- **surface-strong** — #b8a67d
- **border** — #7a6242
- **text** — #2c2013
- **text-muted** — #52422b
- **primary** — #8a3b1f
- **accent** — #4a6b4a
- **ochre** — #b5772b
- **char** — #2c2013

## Typography

- Display: 'Rock Salt', 'Kalam', 'Rockwell', serif
- Body: 'Rockwell', 'Roboto Slab', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Stone, bone, wood 'technology'; Earthy, rough, primitive materials; Cave-painting motifs; Anachronistic prehistoric tech; sombras e elevação

## Shapes

- Radius scale: 2px, 5px, 9px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/stonepunk · designmd.app -->
