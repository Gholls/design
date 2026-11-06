---
name: "FT (ft.ia.br)"
description: "Design system do FT, plataforma de ferramentas e experimentos em IA. Interface light-first minimalista com tipografia Geist, paleta OKLCH semântica e filosofia flat sem sombras."
colors:
  brand:
    primary: "#461901"
    danger: "#510424"
    success: "#002c22"
    info: "#053345"
  semantic:
    background: "#ffffff"
    foreground: "#030712"
    muted: "#f5f5f5"
    mutedForeground: "#6b6b6b"
    border: "#e5e5e5"
    destructive: "#dc2626"
  oklch:
    background: "oklch(100% 0 0)"
    foreground: "oklch(14.5% 0 0)"
    primary: "oklch(20.5% 0 0)"
    primaryForeground: "oklch(98.5% 0 0)"
    muted: "oklch(97% 0 0)"
    mutedForeground: "oklch(55.6% 0 0)"
    border: "oklch(92.2% 0 0)"
  darkMode:
    background: "oklch(14.5% 0 0)"
    foreground: "oklch(98.5% 0 0)"
    primary: "oklch(92.2% 0 0)"
    primaryForeground: "oklch(20.5% 0 0)"
    muted: "oklch(26.9% 0 0)"
    mutedForeground: "oklch(70.8% 0 0)"
    border: "oklch(100% 0 0 / .1)"
typography:
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: ".875rem"
    fontWeight: 400
  code:
    fontFamily: "Geist Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
rounded:
  sm: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"

gallery:
  order: 1674
  author: "designmd.app"
  source: "https://designmd.app/brands/ft"
  tags: ["真实品牌", "Design system do FT"]
---

## Overview

**FT** (ft.ia.br) é uma plataforma de ferramentas e experimentos em inteligência artificial. Seu design system é extremamente minimalista e light-first, usando a família tipográfica Geist para toda a interface e uma paleta baseada em OKLCH para cores precisas e consistentes.

A filosofia visual é flat — sem sombras, com elevação comunicada através de bordas e shifts de background. O sistema suporta dark mode nativo através de CSS variables com valores OKLCH.

### Princípios de design

1. **Light-first** — Background branco puro como padrão
2. **Minimalismo extremo** — Interface quase austera, conteúdo é protagonista
3. **OKLCH colors** — Paleta baseada em OKLCH para precisão perceptual
4. **Flat design** — Sem sombras, elevação via bordas e cores
5. **Motion expressivo** — Animações Astro nativas para transições

---

## Colors

### Paleta semântica (Light mode)

| Token | Valor | Uso |
|---|---|---|
| `background` | `oklch(100% 0 0)` / `#ffffff` | Fundo principal |
| `foreground` | `oklch(14.5% 0 0)` / `#030712` | Texto principal |
| `primary` | `oklch(20.5% 0 0)` | Elementos primários |
| `primaryForeground` | `oklch(98.5% 0 0)` | Texto sobre primário |
| `muted` | `oklch(97% 0 0)` | Backgrounds secundários |
| `mutedForeground` | `oklch(55.6% 0 0)` | Texto secundário |
| `border` | `oklch(92.2% 0 0)` | Bordas e dividers |
| `destructive` | `oklch(57.7% .245 27.325)` | Ações destrutivas |

### Cores de marca

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#461901` | Texto primário de marca |
| `danger` | `#510424` | Estados de erro |
| `success` | `#002c22` | Estados de sucesso |
| `info` | `#053345` | Destaques informativos |

### Dark mode

O sistema suporta dark mode via CSS variables:

```css
/* Dark mode */
--background: oklch(14.5% 0 0);
--foreground: oklch(98.5% 0 0);
--primary: oklch(92.2% 0 0);
--muted: oklch(26.9% 0 0);
--border: oklch(100% 0 0 / .1);
```

---

## Typography

### Famílias

| Papel | Família | Especificação |
|---|---|---|
| UI/Text | Geist | Variable font, 100-900 weight |
| Code | Geist Mono | Variable font, monospace |

```css
@font-face {
  font-family: "Geist";
  src: url("/fonts/GeistVF.woff2") format("woff2");
  font-weight: 100 900;
}
@font-face {
  font-family: "Geist Mono";
  src: url("/fonts/GeistMonoVF.woff2") format("woff2");
  font-weight: 100 900;
}
```

### Hierarquia sugerida

| Token | Tamanho | Peso | Uso |
|---|---:|---:|---|
| `h1` | 2.25rem (--text-4xl) | 700 | Títulos principais |
| `h2` | 1.5rem (--text-2xl) | 700 | Títulos de seção |
| `body` | .875rem (--text-sm) | 400 | Texto corrido |
| `caption` | .75rem (--text-xs) | 400 | Labels, metadados |
| `code` | 14px | 400 | Blocos de código |

### Regras tipográficas

- Use **Geist** para todo o texto — não misture famílias
- Mantenha hierarquia consistente: máximo 3-4 tamanhos por tela
- Headlines usam bold (600-700), corpo usa regular (400)
- Line-height: 1.5 para corpo, 1.2 para headlines
- Use cor e opacidade para hierarquia secundária

---

## Layout

O FT utiliza um grid baseado em **4px**, com densidade compacta.

### Escala de spacing

| Token | Valor | Uso |
|---|---|---|
| `xs` | 4px | Gap interno mínimo |
| `sm` | 8px | Padding interno compacto |
| `md` | 16px | Padding padrão |
| `lg` | 24px | Separação entre blocos |
| `xl` | 32px | Separação de seções |
| `xxl` | 48px | Espaçamento hero |

### Max-width

Conteúdo limitado a **96rem** em containers principais.

---

## Elevation & Depth

O FT segue uma filosofia **totalmente flat**. Não há box-shadows no sistema.

### Estratégia de elevação

| Nível | Técnica | Uso |
|---|---|---|
| 0 — Base | Background color | Fundo da página |
| 1 — Raised | Borda sutil + background muted | Cards, inputs |
| 2 — Floating | Borda mais forte | Dropdowns |

### Z-Index Scale

Escala definida: `50, 100, 999`

---

## Shapes

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `xs` | .25rem | Tags, badges |
| `sm` | 6px | Botões, inputs, cards |
| `inherit` | inherit | Herança de contexto |

A linguagem de formas é minimalista — raios pequenos e consistentes.

---

## Components

### Botões

- **Primary:** background var(--primary), texto var(--primary-foreground)
- **Ghost:** background transparente, borda var(--border)
- **Padding:** 8px 16px
- **Radius:** inherit ou 6px
- **Hover:** opacity 0.9

### Cards

- Background: `var(--background)`
- Border: `1px solid var(--border)`
- Radius: `inherit`
- Padding: `16px`
- **Sem sombras**

### Inputs

- Background: `var(--background)`
- Border: `1px solid var(--border)`
- Focus: `border-color var(--primary)`
- Radius: `inherit`

### Lists

- Estilo clean com separadores sutis
- Padding consistente de 16px

---

## Animation & Motion

O FT utiliza **motion expressivo** com animações Astro nativas.

### Keyframes disponíveis

- `pulse`
- `astroFadeInOut`
- `astroFadeIn` / `astroFadeOut`
- `astroSlideFromRight` / `astroSlideFromLeft`
- `astroSlideToRight` / `astroSlideToLeft`

### Guidelines

- Duração: 150-300ms para micro-interações, 300-500ms para transições
- Easing: `ease-out` para entradas, `ease-in` para saídas
- Sempre respeitar `prefers-reduced-motion`

---

## Do's and Don'ts

### Faça

- Use `#ffffff` / `oklch(100% 0 0)` como background principal
- Use **Geist** para todo o texto da UI
- Siga o grid de **4px** para margens, padding e gaps
- Use bordas e shifts de background para elevação
- Use border-radius da escala: .25rem, 6px, inherit
- Prefira valores OKLCH para cores

### Não faça

- Não introduza cores fora da paleta sem estender os tokens
- Não misture famílias tipográficas — use Geist consistentemente
- Não use valores arbitrários de spacing — mantenha múltiplos de 4px
- Não adicione box-shadow — este sistema usa elevação flat
- Não use border-radius arbitrários
- Não use backdrop-blur ou efeitos de blur

---

## Attribution

| Campo | Valor |
|---|---|
| Source | [FT](https://ft.ia.br) |
| Method | Public site CSS extraction via skillui (ultra mode) |
| Extracted | 2026-09-11 |
| License | Design tokens extracted from publicly visible CSS. No affiliation with the brand. |

<!-- Source: https://designmd.app/brands/ft · designmd.app -->
