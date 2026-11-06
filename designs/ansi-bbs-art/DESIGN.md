---
version: "alpha"
name: "ANSI / BBS Art"
description: "ANSI / BBS Art visual system, translated from the Claude Artisan catalog for use in digital products. 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients"
colors:
  primary: "#ff5555"
  background: "#000000"
  surface: "#0a0a0a"
  text: "#c0c0c0"
  accent: "#55ffff"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Perfect DOS VGA 437', 'Courier New', monospace"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Perfect DOS VGA 437', 'Courier New', monospace"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Perfect DOS VGA 437', 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  sm: "2ch"
  md: "4ch"
  lg: "8ch"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "4ch"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "4ch"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "6ch"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "4ch"

gallery:
  order: 141
  author: "designmd.app"
  source: "https://designmd.app/library/ansi-bbs-art"
  tags: ["风格模板", "no gradients"]
---
## Overview

ANSI / BBS Art visual system, translated from the Claude Artisan catalog for use in digital products. 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients

- **Category:** niche
- **Era:** 1980s–90s
- **Origin:** Dial-up bulletin board systems used ANSI escape codes and CP437 extended-ASCII to render splash screens and menus, drawn in TheDraw and traded by groups like ACiD and iCE through the 1980s-90s.
- **Reference:** Classic BBS login/menu splash screens; ACiD/iCE Productions ANSI art packs; TheDraw-authored door-game menus.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs)
- Saturated primary/neon palette on black, no gradients
- Blocky extended-ASCII border and shading characters (double-line boxes)
- Monospaced type only, never anti-aliased

## Colors

- **bg** — #000000
- **surface** — #0a0a0a
- **surface-2** — #1c1c1c
- **text** — #c0c0c0
- **text-muted** — #808080
- **primary** — #ff5555
- **accent** — #55ffff
- **yellow** — #ffff55
- **green** — #55ff55
- **magenta** — #ff55ff
- **blue** — #5555ff
- **white** — #ffffff
- **red-dark** — #aa0000

## Typography

- Display: 'Perfect DOS VGA 437', 'Courier New', monospace
- Body: 'Perfect DOS VGA 437', 'Courier New', monospace
- Mono: 'Perfect DOS VGA 437', 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients; Blocky extended-ASCII border and shading characters (double-line boxes); Monospaced type only, never anti-aliased; sombras e elevação; transparência e blur

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

<!-- Source: https://designmd.app/library/ansi-bbs-art · designmd.app -->
