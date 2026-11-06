---
version: "alpha"
name: "Tidalpunk"
description: "Tidalpunk visual system, translated from the Claude Artisan catalog for use in digital products. Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials"
colors:
  primary: "#22b8a3"
  background: "#0a3d3f"
  surface: "#0f4d4f"
  text: "#e8f6f3"
  accent: "#d9a441"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Space Grotesk', 'Poppins', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
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
  order: 788
  author: "designmd.app"
  source: "https://designmd.app/library/tidalpunk"
  tags: ["风格模板", "kelp", "coral; Blues", "teals"]
---
## Overview

Tidalpunk visual system, translated from the Claude Artisan catalog for use in digital products. Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials

- **Category:** retrofuturism
- **Era:** 2019–present
- **Origin:** Ocean-focused optimistic offshoot of solarpunk.
- **Reference:** Tidalpunk art community.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Ocean tech: wave/tidal energy, kelp, coral
- Blues, teals, salvaged materials
- Sustainable seafaring future
- Hopeful, aquatic, resourceful

## Colors

- **bg** — #0a3d3f
- **surface** — #0f4d4f
- **surface-strong** — #145e60
- **border** — #2f8b83
- **text** — #e8f6f3
- **text-muted** — #a9d6cf
- **primary** — #22b8a3
- **accent** — #d9a441
- **kelp** — #3f7d4a

## Typography

- Display: 'Space Grotesk', 'Poppins', sans-serif
- Body: 'Space Grotesk', 'Inter', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials; Sustainable seafaring future; Hopeful, aquatic, resourceful; sombras e elevação

## Shapes

- Radius scale: 8px, 14px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/tidalpunk · designmd.app -->
