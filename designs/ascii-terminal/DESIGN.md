---
version: "alpha"
name: "ASCII / Terminal / TUI"
description: "ASCII / Terminal / TUI visual system, translated from the Claude Artisan catalog for use in digital products. Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black"
colors:
  primary: "#33ff66"
  background: "#0a0e0a"
  surface: "#0f150f"
  text: "#33ff66"
  accent: "#ffb000"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  sm: "1ch"
  md: "2ch"
  lg: "4ch"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "2ch"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "2ch"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "3ch"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "2ch"

gallery:
  order: 159
  author: "designmd.app"
  source: "https://designmd.app/library/ascii-terminal"
  tags: ["风格模板"]
---
## Overview

ASCII / Terminal / TUI visual system, translated from the Claude Artisan catalog for use in digital products. Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black

- **Category:** texture
- **Era:** 1970s–present
- **Origin:** Text-only terminals; revived as retro/hacker aesthetic.
- **Reference:** Old DOS/Unix terminals; modern TUIs; hacker movie UIs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Monospace text-only layouts, box-drawing chars
- Green/amber phosphor on black
- Blinking cursor, ASCII art, command-line framing
- Utilitarian, hacker, nostalgic

## Colors

- **bg** — #0a0e0a
- **surface** — #0f150f
- **text** — #33ff66
- **text-muted** — #1f9940
- **primary** — #33ff66
- **accent** — #ffb000
- **amber** — #ffb000
- **cursor** — #33ff66
- **dim** — #0a3d1a

## Typography

- Display: 'IBM Plex Mono', monospace
- Body: 'IBM Plex Mono', 'Courier New', monospace
- Mono: 'IBM Plex Mono', 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black; Blinking cursor, ASCII art, command-line framing; Utilitarian, hacker, nostalgic; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/ascii-terminal · designmd.app -->
