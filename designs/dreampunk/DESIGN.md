---
version: "alpha"
name: "Dreampunk"
description: "Dreampunk visual system, translated from the Claude Artisan catalog for use in digital products. Hazy, ethereal, foggy gradients; Soft glow, indistinct forms"
colors:
  primary: "#7c9cff"
  background: "#171b2e"
  surface: "#171b2e"
  text: "#eef1ff"
  accent: "#9df0e0"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Quicksand', 'Nunito Sans', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Nunito Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Nunito Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "12px"
  md: "20px"
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
  order: 334
  author: "designmd.app"
  source: "https://designmd.app/library/dreampunk"
  tags: ["风格模板", "ethereal", "indistinct forms"]
---
## Overview

Dreampunk visual system, translated from the Claude Artisan catalog for use in digital products. Hazy, ethereal, foggy gradients; Soft glow, indistinct forms

- **Category:** retrofuturism
- **Era:** 2010s–present
- **Origin:** Surreal, dream-logic offshoot of vaporwave/ambient.
- **Reference:** Dreampunk music visuals; 2814 album art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hazy, ethereal, foggy gradients
- Soft glow, indistinct forms
- Liminal, otherworldly calm
- Ambient, hypnagogic

## Colors

- **bg** — #171b2e
- **surface** — rgba(255, 255, 255, 0.06)
- **surface-strong** — rgba(255, 255, 255, 0.11)
- **border** — rgba(180, 200, 255, 0.22)
- **text** — #eef1ff
- **text-muted** — rgba(238, 241, 255, 0.68)
- **primary** — #7c9cff
- **accent** — #9df0e0

## Typography

- Display: 'Quicksand', 'Nunito Sans', sans-serif
- Body: 'Nunito Sans', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hazy, ethereal, foggy gradients; Soft glow, indistinct forms; Liminal, otherworldly calm; Ambient, hypnagogic; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 12px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/dreampunk · designmd.app -->
