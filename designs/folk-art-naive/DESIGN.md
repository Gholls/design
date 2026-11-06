---
version: "alpha"
name: "Folk Art / Naive Art"
description: "Folk Art / Naive Art visual system, translated from the Claude Artisan catalog for use in digital products. Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields"
colors:
  primary: "#d63b2f"
  background: "#fbf1de"
  surface: "#fff8ec"
  text: "#3a2317"
  accent: "#2f7a63"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Baloo 2', 'Fredoka', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "14px"
  lg: "24px"
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
  order: 415
  author: "designmd.app"
  source: "https://designmd.app/library/folk-art-naive"
  tags: ["风格模板"]
---
## Overview

Folk Art / Naive Art visual system, translated from the Claude Artisan catalog for use in digital products. Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields

- **Category:** historical
- **Era:** 18th–20th century
- **Origin:** Self-taught, untrained visual traditions worldwide — rural painters, sign-makers, and craftspeople outside academic art institutions.
- **Reference:** Grandma Moses farm scenes; Henri Rousseau jungle paintings; Pennsylvania Dutch hex signs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Flattened perspective with no attempt at photographic realism
- Bold, saturated flat color fields
- Decorative repeating motifs: flowers, animals, everyday scenes
- Thick, confident hand-drawn outlines and warm handmade charm

## Colors

- **bg** — #fbf1de
- **surface** — #fff8ec
- **surface-2** — #f3e2bf
- **text** — #3a2317
- **text-muted** — #6b4a35
- **primary** — #d63b2f
- **accent** — #2f7a63
- **mustard** — #e0a629
- **outline-ink** — #2b1a10

## Typography

- Display: 'Baloo 2', 'Fredoka', sans-serif
- Body: 'Fredoka', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields; Decorative repeating motifs: flowers, animals, everyday scenes; Thick, confident hand-drawn outlines and warm handmade charm; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 14px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/folk-art-naive · designmd.app -->
