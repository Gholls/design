---
version: "alpha"
name: "Lunarpunk"
description: "Lunarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts)"
colors:
  primary: "#2dd4bf"
  background: "#0a0e1a"
  surface: "#12182b"
  text: "#e8ecf7"
  accent: "#a78bfa"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'Spectral', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Spectral', 'Cormorant Garamond', system-ui, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Spectral', 'Cormorant Garamond', system-ui, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "28px"
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
  order: 529
  author: "designmd.app"
  source: "https://designmd.app/library/lunarpunk"
  tags: ["风格模板", "moonflowers", "star charts)"]
---
## Overview

Lunarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts)

- **Category:** retrofuturism
- **Era:** 2020s–present
- **Origin:** Emerged online ~2020s as the nocturnal, mystical counterpart to solarpunk within eco-futurist communities.
- **Reference:** Lunarpunk art communities on Tumblr/DeviantArt; 'nocturnal eco-futurism' zine covers.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Moonlit bioluminescence over deep indigo/black
- Dark botanical and celestial motifs (moths, moonflowers, star charts)
- Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery
- Soft glowing edges instead of hard neon; mystical over corporate

## Colors

- **bg** — #0a0e1a
- **surface** — #12182b
- **surface-2** — #1a2340
- **text** — #e8ecf7
- **text-muted** — #9aa4c4
- **primary** — #2dd4bf
- **accent** — #a78bfa
- **moonsilver** — #c7d2e0
- **nightbloom** — #5b4b8a

## Typography

- Display: 'Cormorant Garamond', 'Spectral', serif
- Body: 'Spectral', 'Cormorant Garamond', system-ui, serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts); Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery; Soft glowing edges instead of hard neon; mystical over corporate; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/lunarpunk · designmd.app -->
