---
version: "alpha"
name: "Dreamcore"
description: "Dreamcore visual system, translated from the Claude Artisan catalog for use in digital products. Hazy surreal dreamlike scenes; Nostalgic uncanny imagery"
colors:
  primary: "#c04fd6"
  background: "#f3e9f7"
  surface: "#fdf6ff"
  text: "#3a1f4d"
  accent: "#f4c96b"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "18px"
  lg: "28px"
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
  order: 332
  author: "designmd.app"
  source: "https://designmd.app/library/dreamcore"
  tags: ["风格模板"]
---
## Overview

Dreamcore visual system, translated from the Claude Artisan catalog for use in digital products. Hazy surreal dreamlike scenes; Nostalgic uncanny imagery

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Surreal dream/nostalgia internet aesthetic.
- **Reference:** Dreamcore compilations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hazy surreal dreamlike scenes
- Nostalgic uncanny imagery
- Soft glow, impossible spaces
- Between comforting and unsettling

## Colors

- **bg** — #f3e9f7
- **surface** — #fdf6ff
- **surface-strong** — #ecd9f2
- **border** — #d9b8e8
- **text** — #3a1f4d
- **text-muted** — #6d4a80
- **primary** — #c04fd6
- **accent** — #f4c96b
- **glow** — #ffe9a8

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hazy surreal dreamlike scenes; Nostalgic uncanny imagery; Soft glow, impossible spaces; Between comforting and unsettling; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/dreamcore · designmd.app -->
