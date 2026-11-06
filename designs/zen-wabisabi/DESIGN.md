---
version: "alpha"
name: "Zen / Wabi-Sabi / Ma"
description: "Zen / Wabi-Sabi / Ma visual system, translated from the Claude Artisan catalog for use in digital products. Embraces imperfection, age, asymmetry; Generous negative space ('ma')"
colors:
  primary: "#7a4f36"
  background: "#f2ede4"
  surface: "#e9e1d2"
  text: "#33302a"
  accent: "#566349"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Shippori Mincho', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "10px"
  lg: "18px"
spacing:
  sm: "12px"
  md: "28px"
  lg: "56px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "28px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "28px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "40px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "28px"

gallery:
  order: 861
  author: "designmd.app"
  source: "https://designmd.app/library/zen-wabisabi"
  tags: ["风格模板", "age"]
---
## Overview

Zen / Wabi-Sabi / Ma visual system, translated from the Claude Artisan catalog for use in digital products. Embraces imperfection, age, asymmetry; Generous negative space ('ma')

- **Category:** minimal-organic
- **Era:** Traditional Japanese → modern
- **Origin:** Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma).
- **Reference:** Traditional tea-ceremony aesthetics; MUJI.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Embraces imperfection, age, asymmetry
- Generous negative space ('ma')
- Muted natural, earthen tones
- Calm, contemplative, handmade

## Colors

- **bg** — #f2ede4
- **surface** — #e9e1d2
- **surface-strong** — #ded2ba
- **border** — #c9bea9
- **text** — #33302a
- **text-muted** — #71685c
- **primary** — #7a4f36
- **accent** — #566349
- **ink** — #4a4740

## Typography

- Display: 'Shippori Mincho', serif
- Body: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Embraces imperfection, age, asymmetry; Generous negative space ('ma'); Muted natural, earthen tones; Calm, contemplative, handmade; sombras e elevação

## Shapes

- Radius scale: 3px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/zen-wabisabi · designmd.app -->
