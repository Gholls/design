---
version: "alpha"
name: "That Girl / Clean Girl"
description: "That Girl / Clean Girl visual system, translated from the Claude Artisan catalog for use in digital products. Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness"
colors:
  primary: "#9caf88"
  background: "#f7f3ec"
  surface: "#ffffff"
  text: "#4a4238"
  accent: "#c99f7a"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fraunces', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
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
  order: 777
  author: "designmd.app"
  source: "https://designmd.app/library/that-girl"
  tags: ["风格模板", "white", "sage; Minimal", "clean"]
---
## Overview

That Girl / Clean Girl visual system, translated from the Claude Artisan catalog for use in digital products. Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness

- **Category:** niche
- **Era:** 2021–present
- **Origin:** Wellness/productivity lifestyle aesthetic.
- **Reference:** 'That Girl' TikTok routines.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Airy neutrals: beige, white, sage
- Minimal, clean, aspirational-wellness
- Soft serif + clean sans
- Matcha, journaling, gym, 'wellness'

## Colors

- **bg** — #f7f3ec
- **surface** — #ffffff
- **surface-strong** — #f0ebe1
- **border** — #e4dcc9
- **text** — #4a4238
- **text-muted** — #8a7f6d
- **primary** — #9caf88
- **accent** — #c99f7a

## Typography

- Display: 'Fraunces', 'Georgia', serif
- Body: 'Inter', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness; Soft serif + clean sans; Matcha, journaling, gym, 'wellness'; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/that-girl · designmd.app -->
