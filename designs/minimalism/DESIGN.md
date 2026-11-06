---
version: "alpha"
name: "Minimalism"
description: "Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Extreme restraint: whitespace, few elements; Limited (often monochrome) palette"
colors:
  primary: "#111111"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#111111"
  accent: "#111111"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 562
  author: "designmd.app"
  source: "https://designmd.app/library/minimalism"
  tags: ["风格模板"]
---
## Overview

Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Extreme restraint: whitespace, few elements; Limited (often monochrome) palette

- **Category:** minimal-organic
- **Era:** 1960s art → 2000s digital
- **Origin:** Roots in minimal art (Donald Judd) + Dieter Rams; digital via Apple/Google.
- **Reference:** Apple product pages; Dieter Rams Braun; Google homepage.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Extreme restraint: whitespace, few elements
- Limited (often monochrome) palette
- Strong typographic hierarchy carries design
- Every element earns its place

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-2** — #fafafa
- **text** — #111111
- **text-muted** — #767676
- **primary** — #111111
- **accent** — #111111
- **border** — #e6e6e6

## Typography

- Display: 'Inter', system-ui, sans-serif
- Body: 'Inter', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Extreme restraint: whitespace, few elements; Limited (often monochrome) palette; Strong typographic hierarchy carries design; Every element earns its place; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/minimalism · designmd.app -->
