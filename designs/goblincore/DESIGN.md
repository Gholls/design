---
version: "alpha"
name: "Goblincore"
description: "Goblincore visual system, translated from the Claude Artisan catalog for use in digital products. Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns"
colors:
  primary: "#7c9a4a"
  background: "#3a3222"
  surface: "#4a4128"
  text: "#f1ead2"
  accent: "#d4a72c"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Fredericka the Great', 'Amatic SC', 'Georgia', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
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
  order: 436
  author: "designmd.app"
  source: "https://designmd.app/library/goblincore"
  tags: ["风格模板", "moss", "frogs", "snails"]
---
## Overview

Goblincore visual system, translated from the Claude Artisan catalog for use in digital products. Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Earthy 'ugly-cute' nature subculture.
- **Reference:** Goblincore Tumblr/TikTok.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Mushrooms, moss, frogs, snails, shiny trinkets
- Muddy greens and browns
- Chaotic natural collecting
- Anti-perfection, whimsical

## Colors

- **bg** — #3a3222
- **surface** — #4a4128
- **surface-strong** — #574c2e
- **border** — #6b5c34
- **text** — #f1ead2
- **text-muted** — #c9bd97
- **primary** — #7c9a4a
- **accent** — #d4a72c
- **moss** — #556b2f

## Typography

- Display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif
- Body: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns; Chaotic natural collecting; Anti-perfection, whimsical; sombras e elevação

## Shapes

- Radius scale: 6px, 40% 60% 55% 45% / 45% 40% 60% 55%, 55% 45% 40% 60% / 50% 55% 45% 50%.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/goblincore · designmd.app -->
