---
version: "alpha"
name: "Egyptian / Ancient Revival"
description: "Egyptian / Ancient Revival visual system, translated from the Claude Artisan catalog for use in digital products. Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta"
colors:
  primary: "#1b3f6b"
  background: "#efe2c0"
  surface: "#f7ecd3"
  text: "#241a0e"
  accent: "#b8860b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cinzel', 'Trajan Pro', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Trajan Pro', 'Cinzel', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Trajan Pro', 'Cinzel', 'Georgia', serif"
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
  order: 347
  author: "designmd.app"
  source: "https://designmd.app/library/egyptian-revival"
  tags: ["风格模板", "lotus", "scarab; Gold", "lapis blue"]
---
## Overview

Egyptian / Ancient Revival visual system, translated from the Claude Artisan catalog for use in digital products. Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta

- **Category:** historical
- **Era:** 1820s & 1920s revivals
- **Origin:** Egyptomania after Napoleon's campaigns and Tutankhamun (1922).
- **Reference:** Art Deco Egyptian revival; museum branding.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hieroglyph and papyrus motifs, lotus, scarab
- Gold, lapis blue, terracotta
- Bold slab 'Egyptian' typefaces
- Monumental, symmetric, ancient

## Colors

- **bg** — #efe2c0
- **surface** — #f7ecd3
- **surface-strong** — #e6d3a3
- **border** — #b8860b
- **text** — #241a0e
- **text-muted** — #5a4527
- **primary** — #1b3f6b
- **accent** — #b8860b
- **terracotta** — #a3441f

## Typography

- Display: 'Cinzel', 'Trajan Pro', serif
- Body: 'Trajan Pro', 'Cinzel', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta; Bold slab 'Egyptian' typefaces; Monumental, symmetric, ancient; sombras e elevação

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

<!-- Source: https://designmd.app/library/egyptian-revival · designmd.app -->
