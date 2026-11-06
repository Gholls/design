---
version: "alpha"
name: "Space Age Pop"
description: "Space Age Pop visual system, translated from the Claude Artisan catalog for use in digital products. Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome"
colors:
  primary: "#e8542a"
  background: "#f4f2ec"
  surface: "#ffffff"
  text: "#1c1b17"
  accent: "#2f8fd4"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "12px"
  md: "24px"
  lg: "48px"
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
  order: 724
  author: "designmd.app"
  source: "https://designmd.app/library/space-age"
  tags: ["风格模板", "chrome"]
---
## Overview

Space Age Pop visual system, translated from the Claude Artisan catalog for use in digital products. Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome

- **Category:** retrofuturism
- **Era:** 1957–1972
- **Origin:** Space-race-era design optimism.
- **Reference:** 2001: A Space Odyssey interiors; Panton furniture.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Sleek white + primary pops, molded plastic
- Spherical/pod forms, chrome
- Op-art and geometric patterns
- Astronaut-era optimism

## Colors

- **bg** — #f4f2ec
- **surface** — #ffffff
- **surface-strong** — #eceae2
- **border** — #d8d4c6
- **text** — #1c1b17
- **text-muted** — #5a564a
- **primary** — #e8542a
- **accent** — #2f8fd4
- **chrome** — #c7ccd1
- **sun** — #f2b705

## Typography

- Display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif
- Body: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome; Op-art and geometric patterns; Astronaut-era optimism; sombras e elevação

## Shapes

- Radius scale: 12px, 24px, 48px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/space-age · designmd.app -->
