---
version: "alpha"
name: "Quiet Luxury / Old Money"
description: "Quiet Luxury / Old Money visual system, translated from the Claude Artisan catalog for use in digital products. Understated neutral tones: camel, cream, navy; No visible branding; quality materials"
colors:
  primary: "#1f2a44"
  background: "#f6f2e9"
  surface: "#fffdf8"
  text: "#2a2620"
  accent: "#a9825c"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Canela', 'Times New Roman', Georgia, serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
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
  order: 652
  author: "designmd.app"
  source: "https://designmd.app/library/quiet-luxury"
  tags: ["风格模板", "cream"]
---
## Overview

Quiet Luxury / Old Money visual system, translated from the Claude Artisan catalog for use in digital products. Understated neutral tones: camel, cream, navy; No visible branding; quality materials

- **Category:** niche
- **Era:** 2022–present
- **Origin:** Anti-logo luxury minimalism (post-'Succession').
- **Reference:** 'Succession' costuming; Loro Piana-adjacent.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Understated neutral tones: camel, cream, navy
- No visible branding; quality materials
- Serif type, restrained elegance
- Timeless, expensive-looking calm

## Colors

- **bg** — #f6f2e9
- **surface** — #fffdf8
- **surface-strong** — #ece3d1
- **border** — #d9cdad
- **text** — #2a2620
- **text-muted** — #6b6153
- **primary** — #1f2a44
- **accent** — #a9825c
- **hairline** — #b8a575

## Typography

- Display: 'Canela', 'Times New Roman', Georgia, serif
- Body: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Understated neutral tones: camel, cream, navy; No visible branding; quality materials; Serif type, restrained elegance; Timeless, expensive-looking calm; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/quiet-luxury · designmd.app -->
