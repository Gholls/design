---
version: "alpha"
name: "Metro / Microsoft Design Language"
description: "Metro / Microsoft Design Language visual system, translated from the Claude Artisan catalog for use in digital products. Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge"
colors:
  primary: "#2d89ef"
  background: "#0d0d0d"
  surface: "#1a1a1a"
  text: "#ffffff"
  accent: "#e51400"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Segoe UI Light', 'Segoe UI', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Segoe UI', 'Segoe UI Light', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Segoe UI', 'Segoe UI Light', system-ui, sans-serif"
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
  order: 549
  author: "designmd.app"
  source: "https://designmd.app/library/metro"
  tags: ["风格模板", "edge-to-edge"]
---
## Overview

Metro / Microsoft Design Language visual system, translated from the Claude Artisan catalog for use in digital products. Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge

- **Category:** flat-platform
- **Era:** 2010–2017
- **Origin:** Microsoft, Windows Phone 7 (2010), Windows 8.
- **Reference:** Windows Phone 7/8; Windows 8 Start screen.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Live Tiles grid; content over chrome
- Bold Segoe typography, edge-to-edge
- Motion and typographic hierarchy
- Flat, colorful, no skeuomorphism

## Colors

- **bg** — #0d0d0d
- **surface** — #1a1a1a
- **surface-strong** — #262626
- **border** — #3a3a3a
- **text** — #ffffff
- **text-muted** — #a6a6a6
- **primary** — #2d89ef
- **accent** — #e51400
- **tile-purple** — #6a00ff
- **tile-green** — #00a300
- **tile-teal** — #00aba9

## Typography

- Display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif
- Body: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif
- Mono: 'Consolas', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge; Motion and typographic hierarchy; Flat, colorful, no skeuomorphism; sombras e elevação

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

<!-- Source: https://designmd.app/library/metro · designmd.app -->
