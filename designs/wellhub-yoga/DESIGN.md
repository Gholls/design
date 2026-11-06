---
name: Wellhub Yoga
description: >
  Design system cross-platform open-source da Wellhub (anteriormente Gympass).
  Suporta React (web) e React Native (iOS/Android) com tokens compartilhados,
  componentes acessíveis e tipografia baseada em Rubik e Inter.
colors:
  primary:
    vibin: "#D8385E"
    hope: "#1D856C"
    hopeNew: "#0C8046"
    energy: "#FFC24C"
    relax: "#5340C9"
    relaxNew: "#A880FF"
    neon: "#DCFF79"
    sand: "#FBF8EC"
  brand:
    peace: "#FFB0A7"
    peaceNew: "#FFEBF1"
    verve: "#CA4808"
    brandingVerve: "#FF874C"
    uplift: "#FF4438"
    upliftNew: "#D8385E"
    deepPurple: "#710252"
    deepPurpleNew: "#590931"
    yoga: "#FFEEF2"
  feedback:
    success: "#C1EEDB"
    successNew: "#E3EFC3"
    neutral: "#E0DFFF"
    neutralNew: "#F0E0FF"
    attention: "#FCD6C3"
    inactive: "#AE0000"
  grayscale:
    stamina: "#231B22"
    staminaNew: "#1D1D1F"
    deep: "#6B6B78"
    deepNew: "#57544D"
    medium: "#9898A6"
    mediumNew: "#A6A298"
    light: "#D7D7E0"
    lightNew: "#E1DED7"
    lightest: "#EFEDE7"
    clear: "#F5F5FA"
    clearNew: "#FAF9F5"
    steady: "#8F8F8F"
    white: "#FFFFFF"
typography:
  families:
    - Rubik
    - Inter
  weights:
    light: 300
    regular: 400
    medium: 500
    semiBold: 600
    bold: 700
    black: 900
  sizes:
    xxsmall: 10
    xsmall: 12
    small: 14
    medium: 16
    large: 20
    xlarge: 24
    xxlarge: 32
    xxxlarge: 40
    huge: 48
    xhuge: 60
  lineHeights:
    xxsmall: 12
    xsmall: 16
    small: 20
    medium: 24
    large: 28
    xlarge: 32
    xxlarge: 40
    xxxlarge: 48
    huge: 56
    xhuge: 60
rounded:
spacing:
  zero: 0
  xxxsmall: 4
  xxsmall: 8
  xsmall: 12
  small: 16
  medium: 20
  large: 24
  xlarge: 32
  xxlarge: 40
  xxxlarge: 56
  huge: 72
  xhuge: 80

gallery:
  order: 1706
  author: "designmd.app"
  source: "https://designmd.app/brands/wellhub-yoga"
  tags: ["真实品牌"]
---

## Overview

**Yoga** é o design system open-source da **Wellhub** (anteriormente Gympass), construído para aplicações cross-platform (React web e React Native). O nome remete à missão da empresa: ajudar cada pessoa a alcançar seu maior potencial de bem-estar.

O sistema é organizado como monorepo com pacotes independentes:

| Pacote | Função |
|--------|--------|
| `@gympass/yoga` | Componentes principais (web + native) |
| `@gympass/yoga-tokens` | Design tokens globais |
| `@gympass/yoga-common` | Helpers e utilitários compartilhados |
| `@gympass/yoga-icons` | Biblioteca de ícones |
| `@gympass/yoga-illustrations` | Ilustrações |
| `@gympass/yoga-helpers` | Funções auxiliares |
| `@gympass/yoga-system` | Ferramentas de theming e estilo |

Toda aplicação deve ser envolvida pelo `ThemeProvider` para injetar tokens e temas.

---

## Colors

O Yoga organiza cores em quatro camadas semânticas:

### Primary (Expressivas)

| Token | Hex | Uso |
|-------|-----|-----|
| `vibin` | `#D8385E` | Rosa vibrante — destaque, CTAs primários |
| `hope` | `#1D856C` | Verde esperança — sucesso, ações positivas |
| `hopeNew` | `#0C8046` | Verde atualizado |
| `energy` | `#FFC24C` | Amarelo energia — alertas suaves, destaques |
| `relax` | `#5340C9` | Roxo calmo — elementos meditativos |
| `relaxNew` | `#A880FF` | Roxo claro atualizado |
| `neon` | `#DCFF79` | Verde-limão neon — acentos vibrantes |
| `sand` | `#FBF8EC` | Areia — backgrounds acolhedores |

### Brand

| Token | Hex | Uso |
|-------|-----|-----|
| `peace` | `#FFB0A7` | Rosa suave |
| `peaceNew` | `#FFEBF1` | Rosa muito claro |
| `verve` | `#CA4808` | Laranja intenso |
| `brandingVerve` | `#FF874C` | Laranja marca |
| `uplift` | `#FF4438` | Vermelho vibrante |
| `upliftNew` | `#D8385E` | Rosa-vermelho atualizado |
| `deepPurple` | `#710252` | Roxo profundo |
| `deepPurpleNew` | `#590931` | Roxo escuro atualizado |
| `yoga` | `#FFEEF2` | Rosa clarinho — identidade Yoga |

### Feedback

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#C1EEDB` | Verde sucesso |
| `successNew` | `#E3EFC3` | Verde-amarelo sucesso |
| `neutral` | `#E0DFFF` | Lilás neutro informativo |
| `neutralNew` | `#F0E0FF` | Lavanda neutro |
| `attention` | `#FCD6C3` | Pêssego atenção/warning |
| `inactive` | `#AE0000` | Vermelho escuro — erro/inativo |

### Grayscale

| Token | Hex | Uso |
|-------|-----|-----|
| `stamina` | `#231B22` | Quase-preto — texto principal |
| `staminaNew` | `#1D1D1F` | Quase-preto atualizado |
| `deep` | `#6B6B78` | Cinza escuro — texto secundário |
| `medium` | `#9898A6` | Cinza médio — placeholders |
| `light` | `#D7D7E0` | Cinza claro — bordas |
| `lightest` | `#EFEDE7` | Cinza bege — backgrounds sutis |
| `clear` | `#F5F5FA` | Quase-branco frio |
| `clearNew` | `#FAF9F5` | Quase-branco quente |
| `steady` | `#8F8F8F` | Cinza neutro |
| `white` | `#FFFFFF` | Branco puro |

---

## Typography

### Font Families

- **Rubik** — Família primária. Sans-serif geométrica arredondada, transmite acessibilidade e modernidade.
- **Inter** — Família secundária. Sans-serif otimizada para interfaces digitais com alta legibilidade em tamanhos pequenos.

Ambas suportam os pesos: light (300), regular (400), medium (500), semiBold (600), bold (700) e black (900), incluindo variantes itálicas.

### Escala Tipográfica

| Token | Tamanho (px) | Line Height (px) | Uso sugerido |
|-------|:---:|:---:|---|
| `xxsmall` | 10 | 12 | Labels mínimos, badges |
| `xsmall` | 12 | 16 | Captions, footnotes |
| `small` | 14 | 20 | Corpo auxiliar, metadata |
| `medium` | 16 | 24 | Corpo padrão |
| `large` | 20 | 28 | Subtítulos, destaques |
| `xlarge` | 24 | 32 | Headings H4 |
| `xxlarge` | 32 | 40 | Headings H3 |
| `xxxlarge` | 40 | 48 | Headings H2 |
| `huge` | 48 | 56 | Headings H1 |
| `xhuge` | 60 | 60 | Display, hero |

---

## Layout

### Grid System

O Yoga implementa um grid responsivo com componentes `Container`, `Row`, `Col` e `Hide`:

| Breakpoint | Largura mínima | Margem | Gutter |
|:---:|:---:|:---:|:---:|
| `xxs` | 0px | 20px | 16px |
| `xs` | 360px | 20px | 16px |
| `sm` | 480px | 20px | 16px |
| `md` | 768px | 20px | 16px |
| `lg` | 1024px | 71px | 24px |
| `xl` | 1200px | 71px | 24px |
| `xxl` | 1366px | 71px | 24px |
| `xxxl` | 1600px | 71px | 24px |

### Spacing Scale

Baseada em incrementos de 4px:

| Token | Valor | Uso |
|-------|:---:|---|
| `zero` | 0px | Reset |
| `xxxsmall` | 4px | Espaçamento mínimo, gaps internos |
| `xxsmall` | 8px | Padding mínimo, gap entre ícone e texto |
| `xsmall` | 12px | Padding interno de chips/tags |
| `small` | 16px | Padding padrão de componentes |
| `medium` | 20px | Margens de seção em mobile |
| `large` | 24px | Espaçamento entre blocos |
| `xlarge` | 32px | Separação entre seções |
| `xxlarge` | 40px | Espaçamento generoso |
| `xxxlarge` | 56px | Separação de seções grandes |
| `huge` | 72px | Padding de hero/banner |
| `xhuge` | 80px | Espaçamento máximo |

---

## Elevation & Depth

O Yoga utiliza um sistema de elevações baseado no Material Design com 4 níveis:

| Nível | Token | Sombras | Uso |
|:---:|-------|---------|-----|
| 0 | `zero` | Nenhuma (flat) | Estado padrão, elementos inline |
| 1 | `small` | Umbra + Penumbra + Ambient (leve) | Cards em repouso, dropdowns |
| 2 | `medium` | Sombras médias | Modais, elementos flutuantes |
| 3 | `large` | Sombras pronunciadas | Dialogs, bottom sheets, elementos em primeiro plano |

Cada nível combina até 3 camadas de sombra (umbra, penumbra, ambient) com opacidades de 0.20, 0.14 e 0.12 respectivamente. A cor base é derivada do token `medium` da grayscale.

### Transições

- **Duração curta:** 200ms — micro-interações, hovers, focus
- **Duração longa:** 500ms — aberturas, expansões, revelações
- **Curva:** cubic-bezier(0, 0.75, 0.1, 1) — ease-out acentuado

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `sharp` | 0px | Elementos sem arredondamento |
| `xsmall` | 4px | Tags, badges, chips |
| `small` | 8px | Cards, inputs, botões menores |
| `regular` | 16px | Botões padrão, cards destacados, modais |
| `circle` | 9999px | Avatares, ícones circulares, pills |

### Borders

| Token | Valor | Uso |
|-------|:---:|---|
| `zero` | 0px | Sem borda |
| `small` | 1px | Bordas sutis — inputs, dividers |
| `medium` | 2px | Bordas de destaque — focus ring, active states |

---

## Components

O Yoga oferece uma biblioteca abrangente de componentes para web e mobile:

### Navegação e Estrutura
- **Header** — Cabeçalho de aplicação com logo, navegação e ações
- **NavigationMenu** — Menu de navegação responsivo
- **Drawer** — Painel deslizante lateral
- **Stepper** — Indicador de progresso em etapas
- **Accordion** — Conteúdo colapsável

### Formulários e Inputs
- **Input** — Campo de texto com labels, validação e ícones
- **TextArea** — Campo de texto multilinha
- **AutoComplete** — Input com sugestões de preenchimento
- **Dropdown** — Seletor com opções
- **Checkbox** — Caixas de seleção
- **RadioGroup** — Grupo de seleção única
- **Slider** — Controle deslizante de valores
- **Datepicker** — Seletor de data

### Ações
- **Button** — Botões com variantes (primary, secondary, outline, link)
- **Chips** — Tags interativas de filtro/seleção
- **ActionRequirement** — Ação com requisitos visuais

### Feedback e Informação
- **Banner** — Mensagens informativas em destaque
- **Snackbar** — Notificações temporárias
- **Dialog** — Modais de confirmação/ação
- **Feedback** — Componente de estado (sucesso, erro, loading)
- **Progress** — Barra de progresso
- **Spinner** — Indicador de carregamento
- **Skeleton** — Placeholder de carregamento

### Conteúdo e Display
- **Card** / **PlanCard** / **EventCard** — Containers de conteúdo
- **Avatar** — Imagem de perfil com fallback
- **Tag** — Labels de categorização
- **Rating** — Avaliação por estrelas
- **Text** — Componente de texto com tokens aplicados
- **Heading** — Títulos semânticos (h1-h6)
- **Icon** — Renderização de ícones do pacote `@gympass/yoga-icons`
- **Divider** — Separador visual
- **Popover** — Tooltip/popup ancorado
- **List** — Lista com itens estruturados
- **Box** — Container genérico com props de spacing/layout

### Layout
- **Container** — Wrapper com max-width e margens responsivas
- **Row** — Linha flexível do grid
- **Col** — Coluna com spans responsivos
- **Hide** — Controle de visibilidade por breakpoint
- **BottomSheet** — Painel inferior deslizante (mobile)

---

## Do's and Don'ts

### ✅ Do's

- **Use o ThemeProvider** — Todo app deve ser envolvido por `<ThemeProvider>` para que tokens sejam injetados corretamente
- **Use tokens de spacing** — Nunca valores arbitrários; use a escala de 4px definida nos tokens
- **Respeite a hierarquia tipográfica** — Use `Heading` para títulos e `Text` para corpo, com os tamanhos da escala
- **Aplique elevações com intenção** — Componentes flutuantes (modais, dropdowns) usam elevação; conteúdo inline permanece flat
- **Carregue as fontes** — Use o componente `FontLoader` para garantir Rubik e Inter disponíveis
- **Use feedback colors semanticamente** — Verde para sucesso, pêssego para atenção, lilás para informativo
- **Mantenha consistência cross-platform** — Use os mesmos tokens em web e native para experiência coerente

### ❌ Don'ts

- **Não crie cores fora do sistema** — Todas as cores devem vir dos tokens; evite hex hardcoded
- **Não misture fontes** — Use apenas Rubik e Inter; não introduza outras famílias
- **Não pule níveis de heading** — Mantenha hierarquia semântica (h1 → h2 → h3)
- **Não use sombras CSS customizadas** — Use os níveis de elevação definidos (zero, small, medium, large)
- **Não ignore breakpoints** — O grid é responsivo; use `Col` com props por breakpoint e `Hide` para controlar visibilidade
- **Não hardcode spacing** — Use tokens ao invés de valores como `margin: 13px`
- **Não omita estados de interação** — Todos os componentes interativos devem ter hover, focus, active e disabled definidos

---

## Attribution

| Campo | Valor |
|-------|-------|
| **Source** | [github.com/Gympass/yoga](https://github.com/Gympass/yoga) |
| **Method** | open-source repo |
| **Date** | 2026-07-05 |
| **License** | MIT |
| **Packages** | `@gympass/yoga`, `@gympass/yoga-tokens`, `@gympass/yoga-common`, `@gympass/yoga-icons`, `@gympass/yoga-illustrations`, `@gympass/yoga-helpers`, `@gympass/yoga-system` |
| **Website** | [wellhub.com](https://wellhub.com) |

<!-- Source: https://designmd.app/brands/wellhub-yoga · designmd.app -->
