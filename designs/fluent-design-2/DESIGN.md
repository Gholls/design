---
version: "alpha"
name: "Fluent Design 2 (Fluent 2)"
description: "Fluent Design 2 (Fluent 2) visual system, translated from the Claude Artisan catalog for use in digital products. Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke"
colors:
  primary: "#0f6cbd"
  background: "#f3f3f3"
  surface: "#f3f3f3"
  text: "#1b1b1b"
  accent: "#005fb8"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Segoe UI Variable Display', 'Segoe UI', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
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
  order: 409
  author: "designmd.app"
  source: "https://designmd.app/library/fluent-design-2"
  tags: ["风格模板", "depth", "motion", "material"]
---
## Overview

Fluent Design 2 (Fluent 2) visual system, translated from the Claude Artisan catalog for use in digital products. Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11).
- **Reference:** Windows 11; Microsoft 365; Teams.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Five fundamentals: light, depth, motion, material, scale
- Materials: solid, Mica, Acrylic, Smoke
- Mica tints long-lived surfaces with desktop color
- Reveal highlight, subtle depth, rounded corners

## Colors

- **bg** — #f3f3f3
- **surface** — rgba(255,255,255,0.70)
- **mica** — rgba(243,243,243,0.85)
- **acrylic** — rgba(252,252,252,0.60)
- **text** — #1b1b1b
- **text-muted** — #616161
- **primary** — #0f6cbd
- **accent** — #005fb8
- **stroke** — rgba(0,0,0,0.10)

## Typography

- Display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif
- Body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
- Mono: 'Cascadia Code', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke; Mica tints long-lived surfaces with desktop color; Reveal highlight, subtle depth, rounded corners; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/fluent-design-2 · designmd.app -->
