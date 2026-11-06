---
version: "alpha"
name: "Hand-Drawn / Sketch"
description: "Hand-Drawn / Sketch visual system, translated from the Claude Artisan catalog for use in digital products. Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows"
colors:
  primary: "#ff6b4a"
  background: "#fffdf7"
  surface: "#ffffff"
  text: "#2b2b2b"
  accent: "#3b7dd8"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Caveat', 'Kalam', 'Patrick Hand', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
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
  order: 456
  author: "designmd.app"
  source: "https://designmd.app/library/hand-drawn"
  tags: ["风格模板"]
---
## Overview

Hand-Drawn / Sketch visual system, translated from the Claude Artisan catalog for use in digital products. Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows

- **Category:** texture
- **Era:** 2016–present
- **Origin:** Humanizing counter to sterile flat UI.
- **Reference:** Excalidraw; Basecaseinvest-style doodle sites; tldraw.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Rough, wobbly hand-drawn strokes
- Sketch-style borders and arrows
- Marker/pencil textures
- Friendly, approachable, human

## Colors

- **bg** — #fffdf7
- **surface** — #ffffff
- **surface-strong** — #fff5e0
- **border** — #2b2b2b
- **text** — #2b2b2b
- **text-muted** — #5c5c54
- **primary** — #ff6b4a
- **accent** — #3b7dd8
- **marker** — #ffd93b

## Typography

- Display: 'Caveat', 'Kalam', 'Patrick Hand', cursive
- Body: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows; Marker/pencil textures; Friendly, approachable, human; sombras e elevação

## Shapes

- Radius scale: 6px 9px 7px 10px, 12px 16px 13px 18px, 22px 28px 24px 30px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/hand-drawn · designmd.app -->
