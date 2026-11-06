---
version: "alpha"
name: "Lo-fi Wireframe"
description: "Lo-fi Wireframe visual system, translated from the Claude Artisan catalog for use in digital products. Grey boxes, placeholder lines, X'd images; Hand-drawn or Balsamiq sketch strokes"
colors:
  primary: "#6b6b6b"
  background: "#fafafa"
  surface: "#ffffff"
  text: "#333333"
  accent: "#ff5a36"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
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
  order: 522
  author: "designmd.app"
  source: "https://designmd.app/library/wireframe-lofi"
  tags: ["风格模板", "placeholder lines"]
---
## Overview

Lo-fi Wireframe visual system, translated from the Claude Artisan catalog for use in digital products. Grey boxes, placeholder lines, X'd images; Hand-drawn or Balsamiq sketch strokes

- **Category:** texture
- **Era:** 2015–present
- **Origin:** Wireframe/mockup look used as a finished style.
- **Reference:** Balsamiq mockups; 'in progress' brand sites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Grey boxes, placeholder lines, X'd images
- Hand-drawn or Balsamiq sketch strokes
- Deliberately unfinished honesty
- Neutral, structural, playful

## Colors

- **bg** — #fafafa
- **surface** — #ffffff
- **surface-strong** — #f0f0f0
- **border** — #9a9a9a
- **text** — #333333
- **text-muted** — #7a7a7a
- **primary** — #6b6b6b
- **accent** — #ff5a36
- **placeholder** — #cfcfcf

## Typography

- Display: 'Helvetica Neue', Arial, sans-serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Grey boxes, placeholder lines, X'd images; Hand-drawn or Balsamiq sketch strokes; Deliberately unfinished honesty; Neutral, structural, playful; sombras e elevação

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

<!-- Source: https://designmd.app/library/wireframe-lofi · designmd.app -->
