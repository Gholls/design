---
version: "alpha"
name: "Lowbrow / Pop Surrealism"
description: "Lowbrow / Pop Surrealism visual system, translated from the Claude Artisan catalog for use in digital products. Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)"
colors:
  primary: "#ff5fa2"
  background: "#17151f"
  surface: "#201c2c"
  text: "#f4eefc"
  accent: "#4fd8e0"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Baloo 2', 'Nunito', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Baloo 2', 'Nunito', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "16px"
  lg: "32px"
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
  order: 525
  author: "designmd.app"
  source: "https://designmd.app/library/lowbrow-pop-surrealism"
  tags: ["风格模板", "uncanny subject)"]
---
## Overview

Lowbrow / Pop Surrealism visual system, translated from the Claude Artisan catalog for use in digital products. Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)

- **Category:** niche
- **Era:** Late 20th century–present
- **Origin:** Late-20th-century Southern California gallery art movement (the Robert Williams / Mark Ryden circle) fusing hot-rod kustom-kulture linework, underground comix, and cartoon-surrealist illustration into fine-art gallery painting.
- **Reference:** Robert Williams' 'Juxtapoz'-era hot-rod paintings; Mark Ryden's candy-bright porcelain-doll surrealism.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering
- Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)
- Candy-bright palette against a dark or muted ground
- Kustom-kulture/hot-rod-adjacent thick black linework (keyline)

## Colors

- **bg** — #17151f
- **surface** — #201c2c
- **surface-2** — #2c2740
- **text** — #f4eefc
- **text-muted** — #b8aed0
- **primary** — #ff5fa2
- **accent** — #4fd8e0
- **gold** — #ffcc33
- **lineweight** — #0e0c14

## Typography

- Display: 'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif
- Body: 'Baloo 2', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject); Candy-bright palette against a dark or muted ground; Kustom-kulture/hot-rod-adjacent thick black linework (keyline); sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 16px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/lowbrow-pop-surrealism · designmd.app -->
