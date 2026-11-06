---
version: "alpha"
name: "Suprematism"
description: "Suprematism visual system, translated from the Claude Artisan catalog for use in digital products. Pure geometric abstraction floating in space; Limited palette, often on white ground"
colors:
  primary: "#d21f1f"
  background: "#f7f7f5"
  surface: "#ffffff"
  text: "#16161a"
  accent: "#1c4fa0"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Futura', 'Helvetica Neue', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Futura', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Futura', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 751
  author: "designmd.app"
  source: "https://designmd.app/library/suprematism"
  tags: ["风格模板"]
---
## Overview

Suprematism visual system, translated from the Claude Artisan catalog for use in digital products. Pure geometric abstraction floating in space; Limited palette, often on white ground

- **Category:** historical
- **Era:** 1913–1920s
- **Origin:** Russia (Kazimir Malevich).
- **Reference:** Malevich 'Black Square'; 'Suprematist Composition'.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Pure geometric abstraction floating in space
- Limited palette, often on white ground
- Feeling over representation
- Circles, rectangles, crosses, tilted planes

## Colors

- **bg** — #f7f7f5
- **surface** — #ffffff
- **surface-strong** — #efefec
- **border** — #16161a
- **text** — #16161a
- **text-muted** — #55555c
- **primary** — #d21f1f
- **accent** — #1c4fa0
- **black** — #16161a
- **ochre** — #e0a415

## Typography

- Display: 'Futura', 'Helvetica Neue', sans-serif
- Body: 'Futura', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Pure geometric abstraction floating in space; Limited palette, often on white ground; Feeling over representation; Circles, rectangles, crosses, tilted planes; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/suprematism · designmd.app -->
