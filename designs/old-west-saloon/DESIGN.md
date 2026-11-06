---
version: "alpha"
name: "Old West / Saloon"
description: "Old West / Saloon visual system, translated from the Claude Artisan catalog for use in digital products. Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette"
colors:
  primary: "#7a2e17"
  background: "#e8d9b8"
  surface: "#f0e4c8"
  text: "#2c1608"
  accent: "#c99a3b"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Rye', 'Ultra', 'Impact', 'Arial Black', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Roboto Slab', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Roboto Slab', 'Georgia', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 608
  author: "designmd.app"
  source: "https://designmd.app/library/old-west-saloon"
  tags: ["风格模板"]
---
## Overview

Old West / Saloon visual system, translated from the Claude Artisan catalog for use in digital products. Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette

- **Category:** niche
- **Era:** 1860s-1900s
- **Origin:** The American frontier's own visual output — wanted posters, saloon signage, trading-post notices — produced with wood type and weathered by sun and handling.
- **Reference:** 19th-century wanted posters; hand-lettered saloon signage; frontier trading-post notices printed with wood type.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Distressed wood-grain and aged-paper textures on every surface
- Deep burnt-sienna and dusty-gold palette
- Tall condensed wood-type display lettering, star-badge and rope-border motifs

## Colors

- **bg** — #e8d9b8
- **surface** — #f0e4c8
- **surface-2** — #d8c397
- **text** — #2c1608
- **text-muted** — #6b4a28
- **primary** — #7a2e17
- **accent** — #c99a3b
- **sienna** — #8a3d1f
- **star** — #3a3226

## Typography

- Display: 'Rye', 'Ultra', 'Impact', 'Arial Black', serif
- Body: 'Roboto Slab', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette; Tall condensed wood-type display lettering, star-badge and rope-border motifs; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/old-west-saloon · designmd.app -->
