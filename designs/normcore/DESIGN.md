---
version: "alpha"
name: "Normcore"
description: "Normcore visual system, translated from the Claude Artisan catalog for use in digital products. Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness"
colors:
  primary: "#4a5568"
  background: "#e9e7e2"
  surface: "#f5f4f1"
  text: "#2f2e2b"
  accent: "#7c8a99"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "6px"
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
  order: 600
  author: "designmd.app"
  source: "https://designmd.app/library/normcore"
  tags: ["风格模板", "generic"]
---
## Overview

Normcore visual system, translated from the Claude Artisan catalog for use in digital products. Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness

- **Category:** niche
- **Era:** 2013–present
- **Origin:** Deliberate unremarkable ordinariness (K-Hole 2013).
- **Reference:** Normcore fashion editorials.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Neutral, generic, unbranded plainness
- Beige/gray/denim ordinariness
- Anti-trend, blends in
- Comfort over statement

## Colors

- **bg** — #e9e7e2
- **surface** — #f5f4f1
- **surface-strong** — #dcdad4
- **border** — #b8b5ad
- **text** — #2f2e2b
- **text-muted** — #6a6862
- **primary** — #4a5568
- **accent** — #7c8a99
- **denim** — #5c7189

## Typography

- Display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif
- Body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif
- Mono: ui-monospace, 'Courier New', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness; Anti-trend, blends in; Comfort over statement; sombras e elevação

## Shapes

- Radius scale: 4px, 6px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/normcore · designmd.app -->
