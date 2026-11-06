---
version: "alpha"
name: "Base Web"
description: "Base Web visual system, translated from the Claude Artisan catalog for use in digital products. Highly themeable primitives; Neutral, functional, mobility-app roots"
colors:
  primary: "#276ef1"
  background: "#ffffff"
  surface: "#ffffff"
  text: "#000000"
  accent: "#06c167"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Uber Move', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Uber Move', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Uber Move', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
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
  order: 180
  author: "designmd.app"
  source: "https://designmd.app/library/base-web"
  tags: ["风格模板", "functional", "mobility-app roots"]
---
## Overview

Base Web visual system, translated from the Claude Artisan catalog for use in digital products. Highly themeable primitives; Neutral, functional, mobility-app roots

- **Category:** flat-platform
- **Era:** 2018–present
- **Origin:** Uber.
- **Reference:** Uber web products.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Highly themeable primitives
- Neutral, functional, mobility-app roots
- Strong theming tokens
- Accessible components

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f6f6f6
- **border** — #e2e2e2
- **text** — #000000
- **text-muted** — #5e5e5e
- **primary** — #276ef1
- **accent** — #06c167

## Typography

- Display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif
- Body: 'Uber Move', 'Helvetica Neue', Arial, sans-serif
- Mono: 'Uber Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Highly themeable primitives; Neutral, functional, mobility-app roots; Strong theming tokens; Accessible components; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/base-web · designmd.app -->
