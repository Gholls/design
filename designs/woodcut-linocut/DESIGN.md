---
version: "alpha"
name: "Woodcut / Linocut"
description: "Woodcut / Linocut visual system, translated from the Claude Artisan catalog for use in digital products. Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills"
colors:
  primary: "#1c1712"
  background: "#f2e8d3"
  surface: "#f8f1e0"
  text: "#1c1712"
  accent: "#a4271f"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Bebas Neue', 'Anton', 'Arial Black', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
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
  order: 853
  author: "designmd.app"
  source: "https://designmd.app/library/woodcut-linocut"
  tags: ["风格模板", "thick"]
---
## Overview

Woodcut / Linocut visual system, translated from the Claude Artisan catalog for use in digital products. Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills

- **Category:** texture
- **Era:** 15th century-present
- **Origin:** Relief printmaking practiced across Europe and the Americas: an image is carved into wood or linoleum, inked, and pressed onto paper by hand or press.
- **Reference:** Albrecht Dürer's woodcut prints; WPA-era American relief posters; contemporary linocut protest-poster illustration.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Bold, thick, hand-carved black outlines on every shape
- Visible gouge/cut-stroke texture filling color areas instead of flat fills
- High-contrast, limited palette: black/cream plus at most one spot color

## Colors

- **bg** — #f2e8d3
- **surface** — #f8f1e0
- **surface-2** — #e9dcbc
- **text** — #1c1712
- **text-muted** — #5a4a35
- **primary** — #1c1712
- **accent** — #a4271f
- **cream** — #f2e8d3
- **carve-line** — #241d16

## Typography

- Display: 'Bebas Neue', 'Anton', 'Arial Black', sans-serif
- Body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills; High-contrast, limited palette: black/cream plus at most one spot color; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/woodcut-linocut · designmd.app -->
