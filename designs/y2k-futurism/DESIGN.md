---
version: "alpha"
name: "Y2K Futurism"
description: "Y2K Futurism visual system, translated from the Claude Artisan catalog for use in digital products. Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents"
colors:
  primary: "#8ab6ff"
  background: "#dfe9f5"
  surface: "#ffffff"
  text: "#1b2a4a"
  accent: "#c0f0ff"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Michroma', 'Orbitron', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Michroma', 'Eurostile', 'Arial', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Michroma', 'Eurostile', 'Arial', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "18px"
  lg: "999px"
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
  order: 858
  author: "designmd.app"
  source: "https://designmd.app/library/y2k-futurism"
  tags: ["风格模板", "icy blues", "hot pink accents"]
---
## Overview

Y2K Futurism visual system, translated from the Claude Artisan catalog for use in digital products. Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents

- **Category:** retrofuturism
- **Era:** 1995–2004
- **Origin:** Turn-of-millennium optimistic tech aesthetic.
- **Reference:** iMac G3; The Matrix marketing; early Windows XP era ads.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Glossy translucent 'blobjects' and chrome
- Metallic silver, icy blues, hot pink accents
- Bubble/inflatable UI, lens flares, starbursts
- Techno-optimism, iMac G3 / bubble tech

## Colors

- **bg** — #dfe9f5
- **surface** — #ffffff
- **text** — #1b2a4a
- **text-muted** — #5a6b8c
- **primary** — #8ab6ff
- **accent** — #c0f0ff
- **silver** — #c7d2df
- **lilac** — #d6c7ff
- **hotpink** — #ff8fd6

## Typography

- Display: 'Michroma', 'Orbitron', sans-serif
- Body: 'Michroma', 'Eurostile', 'Arial', sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents; Bubble/inflatable UI, lens flares, starbursts; Techno-optimism, iMac G3 / bubble tech; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 18px, 999px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/y2k-futurism · designmd.app -->
