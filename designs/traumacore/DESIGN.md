---
version: "alpha"
name: "Traumacore"
description: "Traumacore visual system, translated from the Claude Artisan catalog for use in digital products. Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos"
colors:
  primary: "#ff4d6d"
  background: "#f5e1ea"
  surface: "#fdf3f7"
  text: "#1a1a1a"
  accent: "#9ec9e8"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Permanent Marker', 'Caveat', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
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
  order: 794
  author: "designmd.app"
  source: "https://designmd.app/library/traumacore"
  tags: ["风格模板"]
---
## Overview

Traumacore visual system, translated from the Claude Artisan catalog for use in digital products. Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Bittersweet childhood-nostalgia-with-pain aesthetic.
- **Reference:** Traumacore edits (sensitive-content subculture).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Childlike imagery (stickers, pastel) + heavy text
- Faded nostalgic photos
- Juxtaposition of innocence and distress
- Emotionally raw

## Colors

- **bg** — #f5e1ea
- **surface** — #fdf3f7
- **surface-strong** — #efd0de
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #6b5560
- **primary** — #ff4d6d
- **accent** — #9ec9e8
- **sticker** — #fff27a

## Typography

- Display: 'Permanent Marker', 'Caveat', cursive
- Body: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos; Juxtaposition of innocence and distress; Emotionally raw; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/traumacore · designmd.app -->
