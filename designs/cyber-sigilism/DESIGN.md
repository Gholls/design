---
version: "alpha"
name: "Cyber Sigilism"
description: "Cyber Sigilism visual system, translated from the Claude Artisan catalog for use in digital products. Chrome ink on near-black grounds; Spined, thorned linework and circular seals"
colors:
  primary: "#d6d8e4"
  background: "#0e0e12"
  surface: "#17171d"
  text: "#ececf2"
  accent: "#b068ff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "2px"
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
  order: 296
  author: "designmd.app"
  source: "https://designmd.app/library/cyber-sigilism"
  tags: ["风格模板"]
---
## Overview

Cyber Sigilism visual system, translated from the Claude Artisan catalog for use in digital products. Chrome ink on near-black grounds; Spined, thorned linework and circular seals

- **Category:** niche
- **Era:** 2020s-present
- **Origin:** A contemporary digital subculture blending medieval-signature forms, cybernetic line work, distressed metal, and dark fashion graphics.
- **Reference:** Contemporary fashion graphics and music visual identities using chrome sigils and cybernetic ornament.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Chrome ink on near-black grounds
- Spined, thorned linework and circular seals
- Tight ornamental density framed by generous dark space

## Colors

- **bg** — #0e0e12
- **surface** — #17171d
- **surface-2** — #282832
- **text** — #ececf2
- **text-muted** — #aaaab8
- **primary** — #d6d8e4
- **accent** — #b068ff
- **chrome** — #7d8495

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chrome ink on near-black grounds; Spined, thorned linework and circular seals; Tight ornamental density framed by generous dark space; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 2px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/cyber-sigilism · designmd.app -->
