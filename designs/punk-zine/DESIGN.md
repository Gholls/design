---
version: "alpha"
name: "Punk Zine / Cut-and-Paste"
description: "Punk Zine / Cut-and-Paste visual system, translated from the Claude Artisan catalog for use in digital products. Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings"
colors:
  primary: "#e60023"
  background: "#efefe8"
  surface: "#ffffff"
  text: "#0d0d0d"
  accent: "#f5d000"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Times New Roman', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
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
  order: 650
  author: "designmd.app"
  source: "https://designmd.app/library/punk-zine"
  tags: ["风格模板", "torn"]
---
## Overview

Punk Zine / Cut-and-Paste visual system, translated from the Claude Artisan catalog for use in digital products. Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings

- **Category:** historical
- **Era:** 1976–1985
- **Origin:** UK/US punk subculture (Jamie Reid, Sex Pistols).
- **Reference:** Jamie Reid Sex Pistols 'God Save the Queen'; punk fanzines.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Photocopied, torn, cut-and-paste collage
- Ransom-note lettering from clippings
- High-contrast xerox degradation
- Anti-authority DIY energy

## Colors

- **bg** — #efefe8
- **surface** — #ffffff
- **surface-strong** — #f5f2e6
- **border** — #0d0d0d
- **text** — #0d0d0d
- **text-muted** — #3d3d3a
- **primary** — #e60023
- **accent** — #f5d000
- **tape** — rgba(245, 208, 0, 0.55)

## Typography

- Display: 'Times New Roman', Georgia, serif
- Body: Arial, 'Helvetica Neue', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings; High-contrast xerox degradation; Anti-authority DIY energy; sombras e elevação

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

<!-- Source: https://designmd.app/library/punk-zine · designmd.app -->
