---
name: iFood — Pomodoro Design System
description: >
  Design system interno do iFood (Pomodoro), maior plataforma de delivery do Brasil
  com 80%+ de market share. O sistema serve app mobile (iOS/Android), web (ifood.com.br)
  e interfaces de parceiros (restaurantes, entregadores, mercados). Tipografia custom
  "Tipo iFood" criada pela Fábio Haag Type em parceria com FutureBrand São Paulo.
  Identidade visual dominada pelo vermelho iFood com suporte a rosa, cinza escuro e
  neutros. UI centrada em cards de restaurante, sistema de avaliações, busca e categorias.
colors:
  brand:
    primaryMain: "#EA1D2C"
    primaryLight: "#FF3341"
    primaryLightest: "#FFCFD3"
    primaryDark: "#C8101E"
    primaryDarkest: "#A50D18"
    secondaryMain: "#F7C5CB"
    secondaryLight: "#FBE0E3"
    secondaryDark: "#E8A3AB"
  accent:
    pink: "#F7C5CB"
    pinkLight: "#FBE0E3"
    yellow: "#FFB800"
    green: "#50A773"
  semantic:
    surface: "#FFFFFF"
    surfaceSecondary: "#F7F7F7"
    background: "#FFFFFF"
    backgroundSecondary: "#F2F2F2"
    onBackground: "#1A1A1A"
    onSurface: "#3E3E3E"
    highlight: "#EA1D2C"
    highEmphasis: "#1A1A1A"
    mediumEmphasis: "#6F6F6F"
    lowEmphasis: "#A6A6A6"
    disabled: "#DCDCDC"
  feedback:
    success: "#2E7D32"
    successLight: "#C8E6C9"
    warning: "#F9A825"
    warningLight: "#FFF9C4"
    error: "#EA1D2C"
    errorLight: "#FFCDD2"
    info: "#1976D2"
    infoLight: "#BBDEFB"
  neutral:
    white: "#FFFFFF"
    gray50: "#F7F7F7"
    gray100: "#F2F2F2"
    gray200: "#E8E8E8"
    gray300: "#DCDCDC"
    gray400: "#A6A6A6"
    gray500: "#6F6F6F"
    gray600: "#3E3E3E"
    gray700: "#2B2B2B"
    gray800: "#1A1A1A"
    black: "#000000"
typography:
  families:
    - "Tipo iFood"
    - "iFood RC"
    - "Inter"
    - "-apple-system, BlinkMacSystemFont, sans-serif"
  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
    extrabold: 800
  sizes:
    caption: 12
    body2: 14
    body1: 16
    subtitle: 18
    heading6: 20
    heading5: 24
    heading4: 28
    heading3: 32
    heading2: 40
    heading1: 48
    display: 56
  lineHeights:
    tight: 1.2
    normal: 1.4
    relaxed: 1.6
rounded:
  none: "0px"
  circle: "9999px"
spacing:
  none: "0px"
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  xxxl: 64

gallery:
  order: 1677
  author: "designmd.app"
  source: "https://designmd.app/brands/ifood"
  tags: ["真实品牌"]
---

## Overview

**iFood** é a maior plataforma de food delivery e marketplace do Brasil, com mais de 80% de market share e operação em 1.700+ cidades. O **Pomodoro** é o design system interno (distribuído via `@ifood-design-system/pomodoro`) que unifica a experiência de todas as superfícies: app consumidor (iOS/Android), web, apps de parceiros (restaurantes e mercados) e app de entregadores.

### Identidade Visual

O iFood possui identidade visual centrada no **vermelho iFood** (`#EA1D2C`), que evoca apetite, urgência e energia. O logo usa tipografia lowercase "ifood" com os "oo" como discos ovais preenchidos e uma seta curva abaixo formando um sorriso, tudo em vermelho sólido.

A tipografia custom **"Tipo iFood"** foi criada pela [Fábio Haag Type](https://fabiohaagtype.com/en/ifood-font/) em parceria com FutureBrand São Paulo e a equipe de Design Ops do iFood. Formas abertas e incomuns em letras como 'f', 't' e 'r' inspiram tecnologia sem frieza, conferindo distinção e reconhecimento de marca enquanto letras mais convencionais garantem legibilidade.

### Princípios de Design

1. **Simplicidade** — Facilitar a vida do usuário com mínimo de fricção para pedir comida
2. **Confiança** — Informações claras sobre restaurantes, avaliações, tempos e preços
3. **Apetite** — Visual que estimula o desejo de pedir (food photography de alta qualidade)
4. **Velocidade** — UI que comunica rapidez na entrega e na interação
5. **Acessibilidade** — Servir 80M+ de brasileiros com interfaces inclusivas

### Plataformas

| Superfície | Stack | Público |
|---|---|---|
| App consumidor iOS/Android | React Native | Clientes finais |
| Web (ifood.com.br) | React/Next.js | Clientes finais |
| Portal de parceiros | React | Restaurantes, mercados |
| App entregador | React Native | Entregadores |
| Institucional | Web | Público geral |

---

## Colors

O iFood organiza seu sistema de cores em torno do vermelho como protagonista absoluto, com rosa como complementar de marca e uma paleta neutra extensa para hierarquia de conteúdo.

### Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `primary.main` | `#EA1D2C` | Vermelho iFood — CTAs, logo, badges, elementos de destaque |
| `primary.light` | `#FF3341` | Hover sobre primary, estados ativos |
| `primary.lightest` | `#FFCFD3` | Backgrounds sutis sobre primary (tags, banners leves) |
| `primary.dark` | `#C8101E` | Pressed state, botões em dark backgrounds |
| `primary.darkest` | `#A50D18` | Active/focus intenso |
| `secondary.main` | `#F7C5CB` | Rosa iFood — backgrounds femininos, promoções, cupons |
| `secondary.light` | `#FBE0E3` | Rosa muito claro — cards de destaque |
| `secondary.dark` | `#E8A3AB` | Rosa escuro — hover em elementos rosa |

### Accent Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `accent.pink` | `#F7C5CB` | Cupons, promoções, destaques de ofertas |
| `accent.pinkLight` | `#FBE0E3` | Background de banners promocionais |
| `accent.yellow` | `#FFB800` | Estrelas de avaliação, destaques de programa fidelidade |
| `accent.green` | `#50A773` | Status de entrega, "Aberto agora", frete grátis |

### Feedback Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#2E7D32` | Pedido confirmado, entrega realizada, restaurante aberto |
| `warning` | `#F9A825` | Tempo de espera alto, estoque baixo |
| `error` | `#EA1D2C` | Erros de validação, pedido cancelado (compartilha com primary) |
| `info` | `#1976D2` | Links, informações adicionais, rastreamento |

### Neutral Scale

| Token | Hex | Uso |
|-------|-----|-----|
| `white` | `#FFFFFF` | Backgrounds de cards, superfícies primárias |
| `gray50` | `#F7F7F7` | Background da página, alternância de listagens |
| `gray100` | `#F2F2F2` | Backgrounds secundários, search bar |
| `gray200` | `#E8E8E8` | Bordas sutis, dividers |
| `gray300` | `#DCDCDC` | Bordas padrão, inputs em repouso |
| `gray400` | `#A6A6A6` | Placeholders, texto desabilitado |
| `gray500` | `#6F6F6F` | Texto secundário (tempo de entrega, distância) |
| `gray600` | `#3E3E3E` | Texto principal (nomes de restaurante) |
| `gray700` | `#2B2B2B` | Headings, ênfase máxima |
| `gray800` | `#1A1A1A` | Texto de máximo contraste, títulos hero |
| `black` | `#000000` | Uso restrito — overlays de modal |

---

## Typography

### Font Families

- **Tipo iFood** — Família principal custom, criada pela Fábio Haag Type. Sans-serif com formas abertas e incomuns em 'f', 't', 'r' que conferem personalidade tecnológica sem frieza. Inclui versão Text otimizada para tamanhos menores com 'a' e 'g' redesenhados para legibilidade.
- **iFood RC** — Família complementar/legada usada em materiais de comunicação.
- **Inter** — Fallback funcional para web quando a custom font não carrega.
- **System stack** — `-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif` como fallback final.

### Variantes da Tipo iFood

| Variante | Uso |
|----------|-----|
| Tipo iFood Display | Headlines hero, títulos de seção grandes |
| Tipo iFood Text | Corpo de texto, labels, descrições menores |
| Tipo iFood Condensed | Espaços restritos, badges, tags compactas |

### Pesos Tipográficos

| Peso | Valor | Uso |
|------|:-----:|-----|
| Regular | 400 | Corpo de texto, descrições |
| Medium | 500 | Labels de navegação, subtítulos |
| Semibold | 600 | Nomes de restaurante, preços |
| Bold | 700 | Headings, CTAs, badges |
| Extrabold | 800 | Títulos hero, números de destaque |

### Escala Tipográfica

| Token | Tamanho | Uso |
|-------|:-------:|-----|
| `caption` | 12px | Overlines, horários, distância |
| `body2` | 14px | Descrições curtas, reviews, categorias |
| `body1` | 16px | Corpo padrão, nomes de itens do menu |
| `subtitle` | 18px | Nomes de restaurante em cards |
| `heading6` | 20px | Títulos de seção ("Os melhores restaurantes") |
| `heading5` | 24px | Heading de categorias |
| `heading4` | 28px | Títulos de página |
| `heading3` | 32px | Headlines de landing |
| `heading2` | 40px | Hero titles |
| `heading1` | 48px | Hero principal homepage |
| `display` | 56px | Números de destaque, promoções |

### Line Heights

| Token | Multiplicador | Uso |
|-------|:---:|---|
| `tight` | 1.2× | Headings, títulos curtos |
| `normal` | 1.4× | Corpo padrão, descrições |
| `relaxed` | 1.6× | Textos longos, parágrafos |

---

## Layout

### Spacing Scale

Escala baseada em incrementos de 4px:

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Reset |
| `xxs` | 4px | Gaps mínimos (ícone–badge, star gaps) |
| `xs` | 8px | Padding interno de tags, gap entre estrelas |
| `sm` | 12px | Padding de chips, margin entre elementos inline |
| `md` | 16px | Padding padrão de cards, inputs |
| `lg` | 24px | Espaçamento entre cards na grid |
| `xl` | 32px | Separação entre seções |
| `xxl` | 48px | Margin de seções no mobile |
| `xxxl` | 64px | Espaçamento máximo entre blocos hero |

### Grid e Breakpoints

| Breakpoint | Largura | Colunas | Uso |
|---|:---:|:---:|---|
| Mobile | < 768px | 1–2 | App nativo, web mobile |
| Tablet | 768–1024px | 2–3 | Grid de restaurantes em tablet |
| Desktop | 1024–1280px | 3–4 | Web desktop padrão |
| Wide | > 1280px | 4–5 | Web widescreen |

### Container

- **Max-width**: 1200px (conteúdo principal web)
- **Padding lateral**: 16px (mobile), 24px (tablet), 32px (desktop)
- **Gap entre cards**: 16px (mobile), 24px (desktop)

---

## Elevation & Depth

O iFood utiliza elevação sutil para hierarquizar surfaces, com preferência por UI flat complementada por sombras leves:

| Token | Box-shadow | Uso |
|-------|-----------|-----|
| `none` | Nenhuma | Elementos flat, inline, listas simples |
| `low` | `0 1px 3px rgba(0,0,0,0.08)` | Cards de restaurante em repouso |
| `medium` | `0 2px 8px rgba(0,0,0,0.12)` | Cards em hover, search bar |
| `high` | `0 4px 16px rgba(0,0,0,0.16)` | Modais, bottom sheets, menus flutuantes |
| `highest` | `0 8px 24px rgba(0,0,0,0.20)` | Overlays full-screen, cart drawer |

### Overlay

| Token | Valor | Uso |
|-------|-------|-----|
| `scrim` | `rgba(0,0,0,0.5)` | Backdrop de modais e bottom sheets |
| `scrimLight` | `rgba(0,0,0,0.3)` | Overlay de imagens com texto sobre |
| `imageGradient` | `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)` | Texto sobre fotos de restaurantes |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Imagens full-bleed, headers |
| `xs` | 4px | Tags, badges inline compactos |
| `sm` | 8px | Inputs, selects, cards menores |
| `md` | 12px | Cards de restaurante, cards de promo |
| `lg` | 16px | Bottom sheets, modais, cards de destaque |
| `xl` | 24px | Search bar, CTAs arredondados, chips |
| `pill` | 999px | Botões pill, tags de categoria, filtros |
| `circle` | 50% | Avatares de restaurante, ícones circulares |

### Padrão de Cards

O card de restaurante (componente mais frequente) usa `border-radius: 12px` com cantos uniformes, criando uma estética moderna e amigável que é marca registrada da UI do iFood.

---

## Components

O Pomodoro design system oferece componentes otimizados para delivery e marketplace:

### Navegação e Busca
- **SearchBar** — Barra de busca com ícone, placeholder "Buscar em iFood", border-radius pill (24px), background gray100
- **CategoryNav** — Scroll horizontal de categorias com ícones (Restaurante, Mercado, Bebidas, Farmácia, Pet Shop)
- **TabBar** — Bottom navigation com 4–5 tabs (Home, Busca, Pedidos, Perfil)
- **TopBar** — Endereço de entrega + ícone de sino (notificações)
- **FilterChips** — Chips filtrantes horizontais (Ordenar, Entrega grátis, Super Restaurante, Distância)

### Cards de Restaurante
- **RestaurantCard** — Card com imagem (aspect-ratio 16:9), logo do restaurante, nome, avaliação (★), categoria, tempo de entrega, valor mínimo e taxa de entrega. Border-radius 12px.
- **RestaurantCardCompact** — Versão horizontal menor para listagens, com thumb quadrada à esquerda
- **PromoCard** — Card de promoção com background rosa/vermelho, texto de desconto e CTA
- **CouponBanner** — Banner horizontal com gradiente rosa, texto do cupom e botão "Pegar cupom"

### Avaliação e Social Proof
- **RatingStars** — Estrelas em amarelo (`#FFB800`), 1-5, com nota numérica ao lado
- **RatingBadge** — Badge compacto com ★ + nota (ex: "★ 4.7") em fundo amarelo
- **ReviewCard** — Card com avatar do usuário, estrelas, texto do review e data

### Pedido e Carrinho
- **MenuItem** — Item de menu com nome, descrição, preço e foto thumb
- **CartButton** — Botão flutuante fixo no bottom com contagem de itens e valor total, vermelho iFood
- **OrderStatus** — Progress tracker horizontal com etapas (Pedido aceito → Preparando → Saiu para entrega → Entregue)
- **DeliveryTimeTag** — Tag com ícone de relógio + "30–40 min"

### Formulários
- **TextField** — Input com label flutuante, border gray300, focus border primary
- **AddressInput** — Campo de endereço com ícone de pin e autocomplete
- **QuantitySelector** — Stepper com – [número] + em estilo pill

### Feedback
- **Toast** — Notificação temporária (sucesso verde, erro vermelho)
- **Badge** — Indicador numérico (vermelho) sobre ícones de sino/carrinho
- **EmptyState** — Ilustração + texto para estados vazios (sem pedidos, sem resultados)
- **Skeleton** — Placeholder de carregamento com shimmer animation em gray200

### Ações
- **Button** — Variantes: filled (vermelho), outlined (borda vermelha), ghost (apenas texto). Border-radius pill. Tamanhos: sm (36px), md (44px), lg (52px).
- **IconButton** — Botões circulares para ações (favoritar ❤️, compartilhar, info)
- **Link** — Texto clicável em vermelho com underline on hover

---

## Do's and Don'ts

### ✅ Do's

- **Use vermelho com parcimônia** — O #EA1D2C é poderoso. Reserve para CTAs primários, logo e badges de destaque. Não sature a tela de vermelho.
- **Priorize food photography** — Fotos de comida de alta qualidade são o principal driver de conversão. Use aspect-ratio 16:9 consistente em cards.
- **Mantenha cards com border-radius 12px** — É a identidade visual dos cards iFood. Consistência gera reconhecimento.
- **Use a escala neutra para hierarquia** — gray800 para títulos, gray600 para corpo, gray500 para meta (tempo, distância), gray400 para placeholders.
- **Estrelas sempre em amarelo #FFB800** — Avaliações usam exclusivamente esta cor. Nunca vermelho para estrelas.
- **Search bar com border-radius pill** — A barra de busca sempre usa arredondamento máximo (24px+) com background sutil.
- **Respeite a "Tipo iFood"** — Use a tipografia custom como primary. Display para headlines, Text para corpo.
- **Mantenha CTAs em formato pill** — Botões primários usam border-radius pill (999px) com fundo #EA1D2C e texto branco.
- **Use rosa para promoções e cupons** — O #F7C5CB é a cor de ofertas, descontos e gamification.
- **Cards de restaurante são clean** — Fundo branco, informações essenciais, sem excesso de adornos.

### ❌ Don'ts

- **Não use vermelho para texto longo** — #EA1D2C é baixo contraste em body text. Use apenas para links curtos ou badges.
- **Não misture border-radius** — Cards sempre 12px, buttons sempre pill, inputs sempre 8px. Nunca valores arbitrários.
- **Não use sombras pesadas** — O iFood é predominantemente flat. Sombras são sutis (máx 0.12 opacity) para cards em repouso.
- **Não use tipografia genérica como primary** — Tipo iFood é a fonte oficial. Inter ou system fonts são apenas fallback.
- **Não coloque texto sobre fotos sem gradient overlay** — Sempre aplique `imageGradient` quando há texto sobre food photography.
- **Não use cores de feedback para decoração** — Verde é "aberto/sucesso", amarelo é "atenção/estrelas", vermelho é "erro/primário". Nunca como decoração.
- **Não crie componentes com cantos sharp (0px)** — O iFood é arredondado por identidade. Mínimo 4px para qualquer elemento interativo.
- **Não sobrecarregue cards** — Restaurant cards mostram no máximo: foto, nome, rating, categoria, tempo, entrega. Nada mais.
- **Não use fontes condensadas para corpo** — Tipo iFood Condensed é apenas para badges e espaços restritos.
- **Não ignore o mobile-first** — 90%+ do tráfego iFood é mobile. Toda decisão de design começa pelo mobile.

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [ifood.com.br](https://www.ifood.com.br) |
| Design System | Pomodoro (`@ifood-design-system/pomodoro`) |
| Typography | [Tipo iFood por Fábio Haag Type + FutureBrand São Paulo](https://fabiohaagtype.com/en/ifood-font/) |
| Method | Public site CSS extraction + brand asset analysis |
| Date | 2026-07-05 |

<!-- Source: https://designmd.app/brands/ifood · designmd.app -->
