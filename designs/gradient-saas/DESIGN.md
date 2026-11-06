---
version: "alpha"
name: "Modern Gradient SaaS"
description: "Modern Gradient SaaS visual system, translated from the Claude Artisan catalog for use in digital products. Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons"
colors:
  primary: "#6d5bf6"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#1a1533"
  accent: "#ff6fa5"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Manrope', 'Inter', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Manrope', 'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Manrope', 'Inter', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
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
  order: 571
  author: "designmd.app"
  source: "https://designmd.app/library/gradient-saas"
  tags: ["风格模板", "subtle shadows", "gradient buttons"]
---
## Overview

Modern Gradient SaaS visual system, translated from the Claude Artisan catalog for use in digital products. Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons

- **Category:** flat-platform
- **Era:** 2019–present
- **Origin:** Ubiquitous startup landing-page look.
- **Reference:** Countless YC/startup landing pages.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Vibrant gradient hero + soft blurred blobs
- Rounded cards, subtle shadows, gradient buttons
- Friendly geometric sans
- Optimistic, clean, conversion-focused

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f5f4ff
- **border** — #e6e3fb
- **text** — #1a1533
- **text-muted** — #635f7a
- **primary** — #6d5bf6
- **accent** — #ff6fa5
- **blob-a** — #8b7bff
- **blob-b** — #ff9ac2
- **blob-c** — #6fe3ff

## Typography

- Display: 'Manrope', 'Inter', system-ui, sans-serif
- Body: 'Manrope', 'Inter', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons; Friendly geometric sans; Optimistic, clean, conversion-focused; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/gradient-saas · designmd.app -->
