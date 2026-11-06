---
version: "alpha"
name: "Techwear"
description: "Techwear visual system, translated from the Claude Artisan catalog for use in digital products. All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette"
colors:
  primary: "#c8ff3d"
  background: "#0b0c0d"
  surface: "#17181a"
  text: "#eceeef"
  accent: "#ff5b2e"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Eurostile', 'Oswald', 'Inter', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Neue Haas Grotesk', 'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Neue Haas Grotesk', 'Inter', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
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
  order: 771
  author: "designmd.app"
  source: "https://designmd.app/library/techwear"
  tags: ["风格模板", "straps"]
---
## Overview

Techwear visual system, translated from the Claude Artisan catalog for use in digital products. All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette

- **Category:** niche
- **Era:** 2014–present
- **Origin:** Functional futuristic urban apparel subculture.
- **Reference:** Acronym; techwear communities.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- All-black technical fabrics, straps, buckles
- Cyberpunk-utility silhouette
- Matte, tactical, waterproof
- Urban-ninja futurism

## Colors

- **bg** — #0b0c0d
- **surface** — #17181a
- **surface-strong** — #212325
- **border** — #35383b
- **text** — #eceeef
- **text-muted** — #9aa0a4
- **primary** — #c8ff3d
- **accent** — #ff5b2e
- **strap** — #55595c

## Typography

- Display: 'Eurostile', 'Oswald', 'Inter', sans-serif
- Body: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette; Matte, tactical, waterproof; Urban-ninja futurism; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/techwear · designmd.app -->
