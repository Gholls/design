---
version: "alpha"
name: "Seapunk"
description: "Seapunk visual system, translated from the Claude Artisan catalog for use in digital products. Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia"
colors:
  primary: "#00e5ff"
  background: "#062c31"
  surface: "#0d4750"
  text: "#eafffc"
  accent: "#ff6ec7"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Papyrus', 'Herculanum', 'Verdana', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Verdana', 'Geneva', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Verdana', 'Geneva', sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "12px"
  lg: "24px"
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
  order: 699
  author: "designmd.app"
  source: "https://designmd.app/library/seapunk"
  tags: ["风格模板", "dolphins"]
---
## Overview

Seapunk visual system, translated from the Claude Artisan catalog for use in digital products. Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia

- **Category:** retrofuturism
- **Era:** 2011–2013
- **Origin:** Tumblr-born internet microgenre.
- **Reference:** Seapunk Tumblr; Rihanna 2012 SNL visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Aquatic teal/cyan, dolphins, waves
- 90s CGI/Web 1.0 nostalgia
- Yin-yang, glitch, holographic
- Watery, kitschy, ironic

## Colors

- **bg** — #062c31
- **surface** — #0d4750
- **surface-strong** — #135b66
- **border** — #00e5ff
- **text** — #eafffc
- **text-muted** — #9fd9d4
- **primary** — #00e5ff
- **accent** — #ff6ec7
- **lime** — #a6ff3d

## Typography

- Display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif
- Body: 'Verdana', 'Geneva', sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia; Yin-yang, glitch, holographic; Watery, kitschy, ironic; sombras e elevação

## Shapes

- Radius scale: 4px, 12px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/seapunk · designmd.app -->
