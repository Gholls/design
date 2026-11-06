---
name: "Mercado Bitcoin"
description: "Design system do Mercado Bitcoin, maior exchange de criptomoedas da América Latina. Interface dark-flat com tipografia híbrida Times New Roman + IBM Plex Sans, paleta industrial e acento azul (#0051c3) para elementos interativos."
colors:
  brand:
    accent: "#0051c3"
    danger: "#e8550c"
    dangerDark: "#de5052"
    dangerDeep: "#521010"
    warning: "#e4d89e"
    info: "#0000ee"
  semantic:
    background: "#1d2327"
    surface: "#000000"
    surfaceAlt: "#0a0a0b"
    textPrimary: "#ffffff"
    textMuted: "#404040"
    textLight: "#595959"
    border: "#474d51"
  neutral:
    light1: "#eaebeb"
    light2: "#f3f4f4"
    light3: "#c8cacc"
    dark1: "#141415"
    dark2: "#5f5c6b"
typography:
  headline:
    fontFamily: "Times New Roman, serif"
    fontSize: "48px"
    fontWeight: 700
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  asymmetric: "5px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"

gallery:
  order: 1684
  author: "designmd.app"
  source: "https://designmd.app/brands/mercadobitcoin"
  tags: ["真实品牌"]
---

## Overview

**Mercado Bitcoin** é a maior exchange de criptomoedas da América Latina, fundada em 2013. Seu design system combina uma estética dark-flat industrial com uma escolha tipográfica ousada: Times New Roman para headlines (evocando confiança e tradição financeira) pareada com IBM Plex Sans para corpo (modernidade e legibilidade técnica).

A filosofia visual é minimalista e flat — elevação é comunicada através de shifts de cor e bordas, nunca sombras. O azul (#0051c3) é usado cirurgicamente para CTAs e elementos interativos, contrastando com a paleta predominantemente monocromática.

### Princípios de design

1. **Flat-first** — Sem sombras; hierarquia via cor de superfície e bordas
2. **Confiança institucional** — Times New Roman em headlines evoca tradição financeira
3. **Clareza técnica** — IBM Plex Sans para dados, números e interface
4. **Acento cirúrgico** — Azul (#0051c3) reservado exclusivamente para ações
5. **Densidade informacional** — Grid de 4px permite layouts densos para dados de mercado

---

## Colors

### Paleta de marca

| Token | Hex | Uso |
|---|---|---|
| `accent` | `#0051c3` | CTAs, links, focus rings, estados ativos |
| `background` | `#1d2327` | Fundo principal das páginas |
| `surface` | `#000000` | Cards, painéis e containers |
| `textPrimary` | `#ffffff` | Títulos e corpo de texto |
| `textMuted` | `#404040` | Captions, placeholders, info secundária |
| `border` | `#474d51` | Divisores, bordas de cards, outlines |
| `danger` | `#e8550c` | Estados de erro, quedas de preço |
| `warning` | `#e4d89e` | Alertas, indicadores de atenção |

### Aplicação de cor

- Use `#0051c3` para o CTA principal e elementos que pedem interação
- Use `#1d2327` como background padrão em todas as páginas
- Use `#000000` para superfícies elevadas (cards, modais)
- Mantenha texto em `#ffffff` para alto contraste; use `#404040` para texto secundário
- Bordas sempre em `#474d51` para separação sutil
- **Nunca use gradientes** — a paleta é sólida e flat

---

## Typography

### Famílias

| Papel | Família | Especificação |
|---|---|---|
| Headlines | Times New Roman | Bold (700), serif clássico |
| Body/UI | IBM Plex Sans | Regular (400), sans-serif técnico |

### Hierarquia sugerida

| Token | Tamanho | Peso | Uso |
|---|---:|---:|---|
| `h1` | 48px / 3rem | 700 | Hero headlines, títulos principais |
| `h2` | 32px / 2rem | 600 | Títulos de seção |
| `h3` | 24px / 1.5rem | 600 | Subtítulos, cards |
| `body` | 16px / 1rem | 400 | Texto corrido, descrições |
| `caption` | 12px / 0.75rem | 400 | Labels, metadados, timestamps |

### Regras tipográficas

- Limite a 2 famílias por tela: Times New Roman + IBM Plex Sans
- Use Times New Roman para headlines e IBM Plex Sans para corpo/UI
- Mantenha hierarquia consistente: máximo 3-4 tamanhos por tela
- Line-height: 1.5 para corpo, 1.2 para headlines
- Use cor e opacidade para hierarquia secundária, não tamanhos adicionais

---

## Layout

O Mercado Bitcoin utiliza um grid baseado em **4px**, permitindo composições compactas típicas de interfaces de trading. A densidade é compacta, com escala de spacing: 4, 8, 12, 14, 16, 20, 24, 28px.

### Spacing como significado

| Spacing | Uso |
|---|---|
| 4-8px | Tight: itens relacionados dentro de um grupo |
| 12-16px | Medium: entre grupos |
| 24-32px | Wide: entre seções |
| 48px+ | Vast: quebras de seção principais |

### Max-width

Conteúdo limitado a **1280px** em containers principais.

---

## Elevation & Depth

O Mercado Bitcoin segue uma filosofia **totalmente flat**. Não há box-shadows no sistema — elevação é comunicada exclusivamente através de:

### Estratégia de elevação

| Nível | Técnica | Uso |
|---|---|---|
| 0 — Base | Cor de background | Fundo da página |
| 1 — Raised | Superfície mais clara + borda sutil | Cards, painéis |
| 2 — Floating | Superfície ainda mais clara + borda forte | Dropdowns, popovers |
| 3 — Overlay | Backdrop + superfície modal | Modais, dialogs |

### Anti-patterns detectados

- ❌ Sem box-shadow em nenhum elemento
- ❌ Sem gradientes de fundo
- ❌ Sem blur ou backdrop-blur
- ❌ Sem zebra striping em tabelas

---

## Shapes

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `xs` | 2px | Tags, badges compactos |
| `sm` | 4px | Inputs, campos de formulário |
| `md` | 8px | Cards padrão |
| `asymmetric` | 5px 5px 0px 0px | Cards com topo arredondado |

A linguagem de formas é industrial e funcional — raios pequenos, sem excessos decorativos.

---

## Components

### Botões

- **Primário:** fundo `#0051c3`, texto branco
- **Ghost:** fundo transparente, borda `#474d51`
- **Padding:** 8px 16px
- **Radius:** 5px 5px 0px 0px (assimétrico)
- **Hover:** opacity 0.9 ou shade mais claro
- **Focus:** ring com `#0051c3`

### Cards

- Background: `#000000`
- Border: `1px solid #474d51`
- Radius: `5px 5px 0px 0px`
- Padding: `16px`
- **Sem sombras** — use bordas e cores de superfície para profundidade

### Inputs

- Background: `#1d2327`
- Border: `1px solid #474d51`
- Focus: `border-color: #0051c3`
- Radius: `5px 5px 0px 0px`
- Label: `#404040`, 12px

### Stats/Dados de mercado

- Surface: `#000000`
- Label: `#404040` (muted, 12px, uppercase)
- Value: `#ffffff` (primary, 24-32px, bold)
- Variação positiva: usar cor de success
- Variação negativa: usar `#e8550c` (danger)

---

## Do's and Don'ts

### Faça

- Use `#0051c3` para elementos interativos (botões, links, focus rings)
- Use `#1d2327` como background principal
- Combine Times New Roman (headlines) com IBM Plex Sans (corpo)
- Siga o grid de **4px** para margens, padding e gaps
- Use bordas e shifts de background para elevação — não sombras
- Use border-radius da escala: 2px, 4px, 5px 5px 0px 0px, 8px

### Não faça

- Não introduza cores fora da paleta sem estender os tokens
- Não adicione famílias tipográficas além de Times New Roman e IBM Plex Sans
- Não use valores arbitrários de spacing — mantenha múltiplos de 4px
- Não adicione box-shadow — este design system usa elevação flat
- Não use gradientes — o design usa cores sólidas apenas
- Não use border-radius arbitrários
- Não use backdrop-blur ou efeitos de blur

---

## Attribution

| Campo | Valor |
|---|---|
| Source | [Mercado Bitcoin](https://www.mercadobitcoin.com.br) |
| Method | Public site CSS extraction via skillui |
| Extracted | 2026-09-11 |
| License | Design tokens extracted from publicly visible CSS. No affiliation with the brand. |

<!-- Source: https://designmd.app/brands/mercadobitcoin · designmd.app -->
