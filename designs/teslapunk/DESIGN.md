---
version: "alpha"
name: "Teslapunk"
description: "Teslapunk visual system, translated from the Claude Artisan catalog for use in digital products. Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing"
colors:
  primary: "#4fd8ff"
  background: "#060b1a"
  surface: "#0d1830"
  text: "#eaf4ff"
  accent: "#d98a3d"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cinzel', 'Cormorant', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Cormorant', 'EB Garamond', system-ui, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Cormorant', 'EB Garamond', system-ui, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "10px"
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
  order: 778
  author: "designmd.app"
  source: "https://designmd.app/library/teslapunk"
  tags: ["风格模板"]
---
## Overview

Teslapunk visual system, translated from the Claude Artisan catalog for use in digital products. Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing

- **Category:** retrofuturism
- **Era:** 1890s–1920s (imagined future, revival ongoing)
- **Origin:** Retrofuturist genre built around Nikola Tesla-era electrical imagining — the turn-of-the-century dream of a 'wireless electrical future' powered by high-voltage coils, arc lightning, and wireless power transmission (Wardenclyffe Tower, the Tesla coil).
- **Reference:** Tesla's Colorado Springs and Wardenclyffe experiments; period illustrations of induction coils and arc-lightning demonstrations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Crackling blue-white arc-lightning motifs
- Polished copper and brass coil detailing
- Deep midnight-blue backgrounds
- Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism

## Colors

- **bg** — #060b1a
- **surface** — #0d1830
- **surface-2** — #142544
- **text** — #eaf4ff
- **text-muted** — #9fb8d9
- **primary** — #4fd8ff
- **accent** — #d98a3d
- **brass** — #c9a24b
- **copper** — #a8622f

## Typography

- Display: 'Cinzel', 'Cormorant', serif
- Body: 'Cormorant', 'EB Garamond', system-ui, serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing; Deep midnight-blue backgrounds; Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 3px, 10px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/teslapunk · designmd.app -->
