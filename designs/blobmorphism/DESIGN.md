---
version: "alpha"
name: "Blobmorphism"
description: "Blobmorphism visual system, translated from the Claude Artisan catalog for use in digital products. Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs"
colors:
  primary: "#ff6b6b"
  background: "#fef6ef"
  surface: "#ffffff"
  text: "#2c1e3a"
  accent: "#4ecdc4"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Baloo 2', 'Fredoka', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Quicksand', 'Baloo 2', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Quicksand', 'Baloo 2', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "14px"
  md: "8px"
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
  order: 201
  author: "designmd.app"
  source: "https://designmd.app/library/blobmorphism"
  tags: ["风格模板"]
---
## Overview

Blobmorphism visual system, translated from the Claude Artisan catalog for use in digital products. Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs

- **Category:** minimal-organic
- **Era:** 2019–present
- **Origin:** Trend of amorphous blob shapes as UI/decoration.
- **Reference:** Dribbble blob illustration sets; startup hero backgrounds.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Irregular gooey blob backgrounds and masks
- Bright gradient-filled blobs
- Playful, friendly, soft
- Animated morphing shapes

## Colors

- **bg** — #fef6ef
- **surface** — #ffffff
- **surface-strong** — #fff0e0
- **border** — #ffd9b8
- **text** — #2c1e3a
- **text-muted** — #6b5a7d
- **primary** — #ff6b6b
- **accent** — #4ecdc4
- **yellow** — #ffd93d

## Typography

- Display: 'Baloo 2', 'Fredoka', system-ui, sans-serif
- Body: 'Quicksand', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs; Playful, friendly, soft; Animated morphing shapes; sombras e elevação

## Shapes

- Radius scale: 14px, 32px 48px 28px 40px, 56px 40px 64px 36px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/blobmorphism · designmd.app -->
