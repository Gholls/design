---
name: "Omarchy"
description: "Design system do Omarchy, framework de ferramentas para desenvolvimento Ruby on Rails. Interface light-first minimalista com tipografia Geist Variable, grid de 4px e suporte a múltiplos temas (light/dark/catppuccin/tokyo-night)."
colors:
  brand:
    primary: "#6e6e6e"
    primaryAlt: "#9ece6a"
    ink: "#0c0e10"
  semantic:
    background: "#ffffff"
    surface: "#f5f5f5"
    surfaceDark: "#32364f"
    surfaceAlt: "#24283b"
    textPrimary: "#000000"
    textSecondary: "#383838"
    textMuted: "#4a4a4a"
    border: "#1a1b26"
    borderSubtle: "#e8e8e8"
    borderStrong: "#585b70"
  themes:
    tokyoNight:
      surface: "#24283b"
      border: "#414868"
      textSecondary: "#a9b1d6"
      textMuted: "#8b93b8"
    catppuccin:
      borderSubtle: "#313244"
      borderStrong: "#585b70"
      textSecondary: "#cdd6f4"
    light:
      borderSubtle: "#e8e8e8"
      textSecondary: "#383838"
      textMuted: "#4a4a4a"
typography:
  headline:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
  body:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  code:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "14px"
    fontWeight: 400
rounded:
  sm: "2px"
  md: "8px"
spacing:
  xxs: "2px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"

gallery:
  order: 1693
  author: "designmd.app"
  source: "https://designmd.app/brands/omarchy"
  tags: ["真实品牌"]
---

## Overview

**Omarchy** é um framework de ferramentas e configurações opinativas para desenvolvimento Ruby on Rails, criado para otimizar o workflow de desenvolvedores. Seu design system é minimalista e light-first, usando a família tipográfica Geist Variable para toda a interface.

A filosofia visual prioriza clareza e legibilidade de código, com suporte nativo a múltiplos temas (light, dark, Tokyo Night, Catppuccin) através de CSS variables. A densidade é compacta (grid de 4px), ideal para interfaces de desenvolvimento onde informação densa precisa ser apresentada de forma organizada.

### Princípios de design

1. **Light-first** — Background branco como padrão, com temas dark opcionais
2. **Minimalismo funcional** — Interface neutra que não compete com o conteúdo
3. **Consistência tipográfica** — Geist Variable para tudo, sem mistura de famílias
4. **Temas nativos** — Suporte a múltiplos color schemes via CSS variables
5. **Motion expressivo** — Animações de transição como parte da experiência

---

## Colors

### Paleta base (Light mode)

| Token | Hex | Uso |
|---|---|---|
| `background` | `#ffffff` | Fundo principal das páginas |
| `surface` | `#f5f5f5` | Cards, painéis secundários |
| `textPrimary` | `#000000` | Títulos e corpo de texto |
| `textSecondary` | `#383838` | Texto secundário |
| `textMuted` | `#4a4a4a` | Captions, placeholders |
| `border` | `#1a1b26` | Bordas principais |
| `borderSubtle` | `#e8e8e8` | Bordas sutis, dividers |
| `brand` | `#6e6e6e` | Elementos de marca |

### Temas alternativos

O Omarchy suporta múltiplos temas através de CSS variables:

**Tokyo Night:**
- Surface: `#24283b`
- Border: `#414868`
- Text: `#a9b1d6`

**Catppuccin:**
- Border subtle: `#313244`
- Border strong: `#585b70`
- Text: `#cdd6f4`

### CSS Variables

```css
--color-border-subtle: var(--t-border-subtle);
--color-border-strong: var(--t-border-strong);
--color-text-secondary: var(--t-text-secondary);
--color-text-muted: var(--t-text-muted);
--color-primary: var(--t-brand);
--color-primary-foreground: var(--t-brand-ink);
```

---

## Typography

### Famílias

| Papel | Família | Especificação |
|---|---|---|
| UI/Text | Geist Variable | Variable font, 100-700 weight |
| Code | JetBrains Mono Variable | Variable font, monospace |

```css
@font-face {
  font-family: "Geist Variable";
  src: url("/_astro/geist-latin-ext-wght-normal.woff2") format("woff2");
  font-weight: 100 900;
}
@font-face {
  font-family: "JetBrains Mono Variable";
  src: url("/_astro/jetbrains-mono-latin-ext-wght-normal.woff2") format("woff2");
  font-weight: 100 900;
}
```

### Hierarquia sugerida

| Token | Tamanho | Peso | Uso |
|---|---:|---:|---|
| `h1` | 1.75rem | 700 | Títulos principais |
| `h2` | clamp(1.5rem,9cqw,4rem) | 700 | Títulos de seção (responsivo) |
| `body` | 13px | 400 | Texto corrido |
| `caption` | 14px | 400 | Labels e metadados |
| `code` | 14px | 400 | Blocos de código |

### Regras tipográficas

- Use **Geist Variable** para todo o texto — não misture famílias
- Mantenha hierarquia consistente: máximo 3-4 tamanhos por tela
- Headlines usam bold (600-700), corpo usa regular (400)
- Line-height: 1.5 para corpo, 1.2 para headlines
- Use cor e opacidade para hierarquia secundária

---

## Layout

O Omarchy utiliza um grid baseado em **4px**, com densidade compacta ideal para interfaces de desenvolvimento.

### Escala de spacing

| Token | Valor | Uso |
|---|---|---|
| `xxs` | 2px | Micro-espaçamento |
| `xs` | 4px | Gap interno mínimo |
| `sm` | 8px | Padding interno compacto |
| `md` | 16px | Padding padrão |
| `lg` | 24px | Separação entre blocos |
| `xl` | 32px | Separação de seções |

### Spacing como significado

| Spacing | Uso |
|---|---|
| 4-8px | Tight: itens relacionados dentro de um grupo |
| 12-16px | Medium: entre grupos |
| 24-32px | Wide: entre seções |
| 48px+ | Vast: quebras de seção principais |

### Max-width

Conteúdo limitado a **96rem** em containers principais.

---

## Elevation & Depth

O Omarchy usa elevação sutil, predominantemente flat com hints de profundidade via sombras delicadas.

### Níveis de elevação

| Nível | Box-shadow | Uso |
|---|---|---|
| Flat | `inset 0-1px 0 var(--color-border-subtle)` | Separadores sutis |
| Raised | `var(--t-elevation)` | Cards, elementos elevados |
| Floating | `oklch(0 0 0 / 0.06) 0 0 0 1px, oklch(0 0 0 / 0.05) 0 1px 3px, oklch(0 0 0 / 0.05) 0 4px 10px -4px` | Dropdowns, popovers |

### Z-Index Scale

Escala definida: `0, 1, 2, 10, 20, 50, 60, 100`

---

## Shapes

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `xs` | .25rem | Tags, badges |
| `sm` | 2px | Inputs compactos |
| `md` | 8px | Cards, containers |
| `inherit` | inherit | Herança de contexto |

---

## Components

### Botões

- **Hover:** opacity 0.9 ou shade mais claro
- **Focus:** ring com var(--accent)
- **Padding:** 8px 16px
- **Radius:** inherit

### Cards

- Background: `#32364f` (dark) ou `#ffffff` (light)
- Border: `1px solid var(--color-border-subtle)`
- Radius: `inherit`
- Padding: `16px`

### Navigation

Header com navegação horizontal e footer com links organizados.

---

## Animation & Motion

O Omarchy utiliza **motion expressivo** com animações Astro nativas.

### Keyframes disponíveis

- `astroFadeInOut`
- `astroFadeIn` / `astroFadeOut`
- `astroSlideFromRight` / `astroSlideFromLeft`
- `astroSlideToRight` / `astroSlideToLeft`
- `theme-split-wipe`

### Guidelines

- Duração: 150-300ms para micro-interações, 300-500ms para transições de página
- Easing: `ease-out` para entradas, `ease-in` para saídas
- Sempre respeitar `prefers-reduced-motion`

---

## Do's and Don'ts

### Faça

- Use `#ffffff` como background principal (light mode)
- Use **Geist Variable** para todo o texto da UI
- Siga o grid de **4px** para margens, padding e gaps
- Use os shadow tokens definidos para elevação
- Use border-radius da escala: .25rem, 2px, 8px, inherit
- Reutilize componentes existentes antes de criar novos

### Não faça

- Não introduza cores fora da paleta sem estender os tokens
- Não misture famílias tipográficas — use Geist Variable consistentemente
- Não use valores arbitrários de spacing — mantenha múltiplos de 4px
- Não crie box-shadow customizados fora dos tokens
- Não use border-radius arbitrários
- Não duplique padrões de componentes existentes
- Não use backdrop-blur ou efeitos de blur

---

## Attribution

| Campo | Valor |
|---|---|
| Source | [Omarchy](https://omarchy.org) |
| Method | Public site CSS extraction via skillui (ultra mode) |
| Extracted | 2026-09-11 |
| License | Design tokens extracted from publicly visible CSS. No affiliation with the brand. |

<!-- Source: https://designmd.app/brands/omarchy · designmd.app -->
