---
version: "alpha"
name: "Swiss / International Typographic Style"
description: "Swiss / International Typographic Style visual system, translated from the Claude Artisan catalog for use in digital products. Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right"
colors:
  primary: "#e2001a"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#111111"
  accent: "#000000"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "32px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "32px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "48px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "32px"

gallery:
  order: 755
  author: "designmd.app"
  source: "https://designmd.app/library/swiss-design"
  tags: ["风格模板"]
---
## Overview

Swiss / International Typographic Style visual system, translated from the Claude Artisan catalog for use in digital products. Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right

- **Category:** historical
- **Era:** 1950s–1960s
- **Origin:** Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools.
- **Reference:** Müller-Brockmann concert posters; Helvetica.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Mathematical grid systems and rigorous alignment
- Helvetica/Akzidenz-Grotesk, flush-left ragged-right
- Objective, neutral, hierarchy via size/weight
- Generous whitespace, photography over illustration

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-2** — #f2f2f2
- **text** — #111111
- **text-muted** — #555555
- **primary** — #e2001a
- **accent** — #000000
- **grid** — #d9d9d9

## Typography

- Display: 'Helvetica Neue', Arial, sans-serif
- Body: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right; Objective, neutral, hierarchy via size/weight; Generous whitespace, photography over illustration; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/swiss-design · designmd.app -->
