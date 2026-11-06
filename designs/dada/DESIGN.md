---
version: "alpha"
name: "Dada"
description: "Dada visual system, translated from the Claude Artisan catalog for use in digital products. Photomontage and chance composition; Ransom-note mixed typography"
colors:
  primary: "#c21807"
  background: "#eae4d6"
  surface: "#f5f1e6"
  text: "#16151a"
  accent: "#e8b700"
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
    fontFamily: "'Courier New', ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Courier New', ui-monospace, monospace"
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
  order: 302
  author: "designmd.app"
  source: "https://designmd.app/library/dada"
  tags: ["风格模板", "Dada visual system"]
---
## Overview

Dada visual system, translated from the Claude Artisan catalog for use in digital products. Photomontage and chance composition; Ransom-note mixed typography

- **Category:** historical
- **Era:** 1916–1924
- **Origin:** Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield).
- **Reference:** Hannah Höch photomontages; Heartfield political montage.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Photomontage and chance composition
- Ransom-note mixed typography
- Anti-art, absurd, provocative
- Collage of found media

## Colors

- **bg** — #eae4d6
- **surface** — #f5f1e6
- **surface-strong** — #ded4b8
- **border** — #16151a
- **text** — #16151a
- **text-muted** — #4a473f
- **primary** — #c21807
- **accent** — #e8b700
- **newsprint** — rgba(22, 21, 26, 0.06)

## Typography

- Display: 'Times New Roman', Georgia, serif
- Body: 'Courier New', ui-monospace, monospace
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Photomontage and chance composition; Ransom-note mixed typography; Anti-art, absurd, provocative; Collage of found media; sombras e elevação

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

<!-- Source: https://designmd.app/library/dada · designmd.app -->
