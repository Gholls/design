---
version: "alpha"
name: "Art Hoe"
description: "Art Hoe visual system, translated from the Claude Artisan catalog for use in digital products. Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents"
colors:
  primary: "#c1440e"
  background: "#f5ead9"
  surface: "#fdf3e0"
  text: "#3a2b1e"
  accent: "#d4a017"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Nunito Sans', 'Avenir Next', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Nunito Sans', 'Avenir Next', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "18px"
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
  order: 154
  author: "designmd.app"
  source: "https://designmd.app/library/art-hoe"
  tags: ["风格模板"]
---
## Overview

Art Hoe visual system, translated from the Claude Artisan catalog for use in digital products. Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents

- **Category:** niche
- **Era:** 2015–present
- **Origin:** Art-student creative-expression subculture.
- **Reference:** Art Hoe Tumblr collective.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Van Gogh/sunflower motifs, paint splatter
- Warm earthy + bright accents
- Journals, film photos, collage
- Creative, expressive, personal

## Colors

- **bg** — #f5ead9
- **surface** — #fdf3e0
- **surface-strong** — #f7e2c3
- **border** — #3a2b1e
- **text** — #3a2b1e
- **text-muted** — #6b5847
- **primary** — #c1440e
- **accent** — #d4a017
- **olive** — #6b7a3f
- **clay** — #b5651d

## Typography

- Display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif
- Body: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents; Journals, film photos, collage; Creative, expressive, personal; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/art-hoe · designmd.app -->
