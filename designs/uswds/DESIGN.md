---
version: "alpha"
name: "U.S. Web Design System"
description: "U.S. Web Design System visual system, translated from the Claude Artisan catalog for use in digital products. Accessibility- and trust-first (Section 508); Government blue/red/neutral palette"
colors:
  primary: "#005ea2"
  background: "#ffffff"
  surface: "#f0f0f0"
  text: "#1b1b1b"
  accent: "#b50909"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Public Sans', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Public Sans', system-ui, -apple-system, sans-serif"
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
  order: 800
  author: "designmd.app"
  source: "https://designmd.app/library/uswds"
  tags: ["风格模板"]
---
## Overview

U.S. Web Design System visual system, translated from the Claude Artisan catalog for use in digital products. Accessibility- and trust-first (Section 508); Government blue/red/neutral palette

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** U.S. General Services Administration (18F).
- **Reference:** US federal government websites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Accessibility- and trust-first (Section 508)
- Government blue/red/neutral palette
- Public Sans typeface
- Plain-language, high-legibility

## Colors

- **bg** — #ffffff
- **surface** — #f0f0f0
- **surface-strong** — #e6e6e6
- **border** — #a9aeb1
- **text** — #1b1b1b
- **text-muted** — #565c65
- **primary** — #005ea2
- **accent** — #b50909
- **primary-dark** — #1a4480
- **focus** — #2491ff

## Typography

- Display: 'Public Sans', system-ui, sans-serif
- Body: 'Public Sans', system-ui, -apple-system, sans-serif
- Mono: 'Roboto Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Accessibility- and trust-first (Section 508); Government blue/red/neutral palette; Public Sans typeface; Plain-language, high-legibility; sombras e elevação

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

<!-- Source: https://designmd.app/library/uswds · designmd.app -->
