---
version: "alpha"
name: "Risograph"
description: "Risograph visual system, translated from the Claude Artisan catalog for use in digital products. Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain"
colors:
  primary: "#ff5b45"
  background: "#f3ecde"
  surface: "#f3ecde"
  text: "#1a1a1a"
  accent: "#0078bf"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Archivo Black', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Archivo', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Archivo', system-ui, sans-serif"
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
  order: 677
  author: "designmd.app"
  source: "https://designmd.app/library/risograph"
  tags: ["风格模板"]
---
## Overview

Risograph visual system, translated from the Claude Artisan catalog for use in digital products. Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain

- **Category:** texture
- **Era:** 1980s stencil printing → 2010s revival
- **Origin:** Riso Kagaku duplicator; indie print revival.
- **Reference:** Indie zines; risograph art prints; event posters.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Limited bright spot-ink palette (fluoro pink, blue)
- Visible misregistration and grain
- Overprint multiply blends
- Handmade, imperfect, zine-like

## Colors

- **bg** — #f3ecde
- **surface** — #f3ecde
- **text** — #1a1a1a
- **text-muted** — #444444
- **primary** — #ff5b45
- **accent** — #0078bf
- **yellow** — #ffd200
- **green** — #00a95c
- **pink** — #ff48b0

## Typography

- Display: 'Archivo Black', sans-serif
- Body: 'Space Grotesk', 'Archivo', system-ui, sans-serif
- Mono: 'Space Mono', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain; Overprint multiply blends; Handmade, imperfect, zine-like; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/risograph · designmd.app -->
