---
version: "alpha"
name: "Weirdcore"
description: "Weirdcore visual system, translated from the Claude Artisan catalog for use in digital products. Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny"
colors:
  primary: "#c23b3b"
  background: "#d8d3c4"
  surface: "#eae5d6"
  text: "#201f1a"
  accent: "#3b6fc2"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Impact', 'Arial Narrow', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Times New Roman', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Times New Roman', 'Georgia', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
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
  order: 842
  author: "designmd.app"
  source: "https://designmd.app/library/weirdcore"
  tags: ["风格模板", "eerie", "uncanny"]
---
## Overview

Weirdcore visual system, translated from the Claude Artisan catalog for use in digital products. Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Unsettling amateur-photo internet aesthetic.
- **Reference:** Weirdcore image boards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Low-quality nostalgic photos, distorted
- Deliberately 'off', eerie, uncanny
- Text overlays, arrows, dream-logic
- Nostalgic dread

## Colors

- **bg** — #d8d3c4
- **surface** — #eae5d6
- **surface-strong** — #f4f0e4
- **border** — #6b6558
- **text** — #201f1a
- **text-muted** — #55523f
- **primary** — #c23b3b
- **accent** — #3b6fc2
- **sickly** — #a8b23f

## Typography

- Display: 'Impact', 'Arial Narrow', sans-serif
- Body: 'Times New Roman', 'Georgia', serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny; Text overlays, arrows, dream-logic; Nostalgic dread; sombras e elevação

## Shapes

- Radius scale: 2px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/weirdcore · designmd.app -->
