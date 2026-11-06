---
version: "alpha"
name: "Corporate Memphis"
description: "Corporate Memphis visual system, translated from the Claude Artisan catalog for use in digital products. Flat vector people with tiny heads, long bendy limbs; Simple geometric bodies, bold flat colors"
colors:
  primary: "#6c5ce7"
  background: "#ffffff"
  surface: "#f7f5ff"
  text: "#1f2233"
  accent: "#ff7a8a"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Poppins', 'Circular', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Poppins', 'Circular', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
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
  order: 278
  author: "designmd.app"
  source: "https://designmd.app/library/corporate-memphis"
  tags: ["风格模板", "bold flat colors"]
---
## Overview

Corporate Memphis visual system, translated from the Claude Artisan catalog for use in digital products. Flat vector people with tiny heads, long bendy limbs; Simple geometric bodies, bold flat colors

- **Category:** minimal-organic
- **Era:** 2017–present
- **Origin:** Named after Facebook's 'Alegria' illustration style; ubiquitous big-tech look.
- **Reference:** Facebook 'Alegria'; Google/Slack/startup illustrations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Flat vector people with tiny heads, long bendy limbs
- Simple geometric bodies, bold flat colors
- Friendly, inclusive, generic illustration
- Soft rounded UI around it

## Colors

- **bg** — #ffffff
- **surface** — #f7f5ff
- **surface-2** — #eef0ff
- **text** — #1f2233
- **text-muted** — #5b607a
- **primary** — #6c5ce7
- **accent** — #ff7a8a
- **secondary** — #00b894
- **yellow** — #ffd166

## Typography

- Display: 'Poppins', system-ui, sans-serif
- Body: 'Poppins', 'Circular', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flat vector people with tiny heads, long bendy limbs; Simple geometric bodies, bold flat colors; Friendly, inclusive, generic illustration; Soft rounded UI around it; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/corporate-memphis · designmd.app -->
