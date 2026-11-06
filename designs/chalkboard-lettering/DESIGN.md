---
version: "alpha"
name: "Chalkboard Lettering"
description: "Chalkboard Lettering visual system, translated from the Claude Artisan catalog for use in digital products. Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight"
colors:
  primary: "#f5f5f0"
  background: "#1f2421"
  surface: "#262b27"
  text: "#f5f5f0"
  accent: "#f4a6c1"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Caveat', 'Kalam', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Patrick Hand', 'Comic Neue', cursive"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Patrick Hand', 'Comic Neue', cursive"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "8px"
  lg: "16px"
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
  order: 236
  author: "designmd.app"
  source: "https://designmd.app/library/chalkboard-lettering"
  tags: ["风格模板"]
---
## Overview

Chalkboard Lettering visual system, translated from the Claude Artisan catalog for use in digital products. Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight

- **Category:** historical
- **Era:** 20th century–present (modern chalk-art revival)
- **Origin:** Café and market chalkboard signage, revived as a hand-lettering art form in the 2010s.
- **Reference:** Dana Tanamachi chalk lettering; neighborhood café menu boards.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Matte near-black or slate backgrounds with textured chalk-dust strokes
- Playful hand-drawn display lettering with varied stroke weight
- Doodled flourishes, underlines, and borders framing text
- Slightly uneven, hand-drawn edges on every shape

## Colors

- **bg** — #1f2421
- **surface** — #262b27
- **surface-2** — #323830
- **text** — #f5f5f0
- **text-muted** — #b8bdb4
- **primary** — #f5f5f0
- **accent** — #f4a6c1
- **chalk-teal** — #8fd9c4
- **chalk-yellow** — #f5e08a

## Typography

- Display: 'Caveat', 'Kalam', cursive
- Body: 'Patrick Hand', 'Comic Neue', cursive
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight; Doodled flourishes, underlines, and borders framing text; Slightly uneven, hand-drawn edges on every shape; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 3px, 8px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/chalkboard-lettering · designmd.app -->
