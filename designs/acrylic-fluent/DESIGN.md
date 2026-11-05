---
version: "alpha"
name: "Acrylic (Fluent Material)"
description: "Acrylic (Fluent Material) visual system, translated from the Claude Artisan catalog for use in digital products. Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts)"
colors:
  primary: "#0067c0"
  background: "#f3f3f3"
  surface: "#f3f3f3"
  text: "#1b1b1b"
  accent: "#744da9"
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
  order: 11
  author: "designmd.app"
  source: "https://designmd.app/library/acrylic-fluent"
  tags: ["微软 Fluent", "半透明", "桌面感"]
---
## Overview

Acrylic (Fluent Material) visual system, translated from the Claude Artisan catalog for use in digital products. Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts)

- **Category:** glass
- **Era:** 2017–present
- **Origin:** Microsoft Fluent Design System.
- **Reference:** Windows 11 flyouts, command bars, context menus.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Translucency + blur + subtle noise texture
- Light-dismiss transient surfaces (menus, flyouts)
- Mode-aware (light/dark)
- Sits beneath interactive UI as a base layer

## Colors

- **bg** — #f3f3f3
- **surface** — rgba(255, 255, 255, 0.65)
- **surface-strong** — rgba(255, 255, 255, 0.85)
- **border** — rgba(0, 0, 0, 0.08)
- **text** — #1b1b1b
- **text-muted** — #5c5c5c
- **primary** — #0067c0
- **accent** — #744da9

## Typography

- Display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif
- Body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
- Mono: 'Cascadia Code', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts); Mode-aware (light/dark); Sits beneath interactive UI as a base layer; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/acrylic-fluent · designmd.app -->
