---
version: "alpha"
name: "Apple HIG (pre-Liquid flat)"
description: "Apple HIG (pre-Liquid flat) visual system, translated from the Claude Artisan catalog for use in digital products. Deference: content over chrome; SF Pro type, generous spacing, subtle depth"
colors:
  primary: "#007aff"
  background: "#f2f2f7"
  surface: "#ffffff"
  text: "#1c1c1e"
  accent: "#34c759"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "-apple-system, 'SF Pro Display', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
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
  order: 146
  author: "designmd.app"
  source: "https://designmd.app/library/apple-hig"
  tags: ["风格模板", "generous spacing", "subtle depth"]
---
## Overview

Apple HIG (pre-Liquid flat) visual system, translated from the Claude Artisan catalog for use in digital products. Deference: content over chrome; SF Pro type, generous spacing, subtle depth

- **Category:** flat-platform
- **Era:** 2013–2025
- **Origin:** Apple, iOS 7 through iOS 18.
- **Reference:** iOS 7–18; macOS pre-Tahoe.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Deference: content over chrome
- SF Pro type, generous spacing, subtle depth
- Blur/vibrancy accents, clarity
- Consistent system controls

## Colors

- **bg** — #f2f2f7
- **surface** — #ffffff
- **surface-strong** — #f9f9fb
- **border** — rgba(60, 60, 67, 0.29)
- **text** — #1c1c1e
- **text-muted** — #6e6e73
- **primary** — #007aff
- **accent** — #34c759

## Typography

- Display: -apple-system, 'SF Pro Display', sans-serif
- Body: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deference: content over chrome; SF Pro type, generous spacing, subtle depth; Blur/vibrancy accents, clarity; Consistent system controls; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 14px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/apple-hig · designmd.app -->
