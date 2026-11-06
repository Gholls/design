---
name: GOL Linhas Aéreas — Tangerina Design System
description: >
  Design system multi-marca do Grupo GOL Smiles, chamado Tangerina. Primeiro
  design system da América Latina a integrar os setores de companhia aérea e
  fidelidade (loyalty), atendendo as marcas GOL, Smiles, GOLLOG e VoeBiz.
  Lançado em abril de 2024, unifica padrões visuais e práticas de usabilidade
  para experiências digitais consistentes. Tipografia proprietária GOL Sans
  (56 fontes, Fabio Haag Type + FutureBrand). Premiado com iF Design Award 2025
  e Awwwards Honorable Mention (Dec 2024). Design system classificado como
  closed (designsystemsbrasileiros.com).
colors:
  brand:
    primaryMain: "#FF7020"
    primaryDark: "#E55A00"
    primaryDarkest: "#CC4E00"
    primaryLight: "#FF8C4D"
    primaryLightest: "#FFF0E6"
    secondaryMain: "#1D1D1D"
    secondaryLight: "#333333"
    white: "#FFFFFF"
  surface:
    background: "#FFFFFF"
    backgroundWarm: "#FCF9F8"
    surfaceLevel1: "#F5F5F5"
    surfaceLevel2: "#EBEBEB"
    surfaceDark: "#1D1D1D"
  neutral:
    neutral0: "#FFFFFF"
    neutral50: "#FCF9F8"
    neutral100: "#F5F5F5"
    neutral200: "#EBEBEB"
    neutral300: "#D4D4D4"
    neutral400: "#A3A3A3"
    neutral500: "#737373"
    neutral600: "#525252"
    neutral700: "#404040"
    neutral800: "#2D2D2D"
    neutral900: "#1D1D1D"
    neutral1000: "#000000"
  feedback:
    success: "#1B873F"
    successLight: "#E6F4EB"
    warning: "#E5A30A"
    warningLight: "#FFF8E6"
    error: "#DC2626"
    errorLight: "#FEE2E2"
    info: "#2563EB"
    infoLight: "#EFF6FF"
  smiles:
    primaryMain: "#FF7020"
    accent: "#6B21A8"
    accentLight: "#A855F7"
  gollog:
    primaryMain: "#FF7020"
    accent: "#1D4ED8"
typography:
  families:
    - GOL Sans Display
    - GOL Sans Text
    - Nunito Sans (fallback web)
  weights:
    light: 300
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
    extrabold: 800
  widths:
    condensed: "Condensed"
    semiCondensed: "Semi Condensed"
    normal: "Normal"
    expanded: "Expanded"
  opticalSizes:
    display: "Títulos e comunicação — maior contraste, barra inclinada em e/P/R"
    text: "Interface e corpo — menor contraste, ascendentes mais altos, spacing mais aberto"
  sizes:
    caption: 12
    body2: 14
    body1: 16
    subtitle2: 18
    subtitle1: 20
    heading6: 22
    heading5: 24
    heading4: 28
    heading3: 32
    heading2: 40
    heading1: 48
    display2: 56
    display1: 72
  lineHeights:
    tight: 1.2
    normal: 1.4
    relaxed: 1.6
rounded:
  none: "0px"
  circle: "9999px"
spacing:
  quarck: 4
  nano: 8
  xxxs: 12
  xxs: 16
  xs: 24
  sm: 32
  md: 40
  lg: 48
  xl: 56
  xxl: 64
  xxxl: 80
  huge: 96
  giant: 128

gallery:
  order: 1678
  author: "designmd.app"
  source: "https://designmd.app/brands/gol"
  tags: ["真实品牌"]
---

## Overview

**Tangerina** é o design system do **Grupo GOL Smiles**, a maior companhia aérea low-cost do Brasil. É o primeiro design system da América Latina a integrar os setores de aviação e fidelidade (loyalty) numa plataforma unificada, servindo as marcas **GOL**, **Smiles**, **GOLLOG** e **VoeBiz**.

### Números

| Métrica | Valor |
|---------|-------|
| Marcas atendidas | 4 (GOL, Smiles, GOLLOG, VoeBiz) |
| Lançamento | Abril 2024 |
| Premiações | iF Design Award 2025, Awwwards Honorable Mention 2024 |
| Tipografia | GOL Sans — 56 fontes proprietárias |
| Status | Closed (Design System interno) |
| Site showcase | tangerina.golsmiles.com.br |
| Equipes | Designers e desenvolvedores colaborativos |

### Princípios de Design

1. **Eficiência** — Simplificar interações complexas de viagem em experiências fluidas e intuitivas
2. **Consistência** — Manter experiência visual coesa entre GOL, Smiles, GOLLOG e VoeBiz
3. **Inclusão** — Acessibilidade como requisito fundamental, não diferencial
4. **Escalabilidade** — Componentes e tokens modulares que crescem com o ecossistema
5. **Digital-first** — Formas e tipografia otimizadas para telas e resoluções diversas

### Características Técnicas

- **Multi-marca** — Tokens semânticos adaptáveis para GOL (aviação), Smiles (fidelidade), GOLLOG (carga) e VoeBiz (corporativo)
- **Token architecture** — Primitivos → semânticos → componente, permitindo theming por marca
- **Dark mode** — Suporte nativo com transições suaves (evidenciado no site showcase)
- **Tipografia proprietária** — GOL Sans (56 fontes) com versões Display e Text
- **Responsive** — Grid system adaptável mobile/tablet/desktop
- **Acessibilidade** — Contraste mínimo 4.5:1 em componentes interativos

---

## Colors

### Filosofia de Cor

> "Surpreenda-se com o pôr do sol laranja no Brasil e no exterior!"

O laranja é a cor-assinatura inconfundível da GOL desde sua fundação em 2001. Representa energia, acessibilidade, calor tropical e a ousadia de uma low-cost que revolucionou a aviação brasileira. A paleta é deliberadamente restrita: laranja vibrante como protagonista absoluto, neutrals escuros para contraste e legibilidade, branco como superfície dominante.

### Brand Colors (Primary Orange)

| Token | Hex | Uso |
|-------|-----|-----|
| `brand.primary.main` | `#FF7020` | Laranja GOL — CTAs, botões primários, header, ícones de marca |
| `brand.primary.dark` | `#E55A00` | Hover, pressed states, ênfase |
| `brand.primary.darkest` | `#CC4E00` | Gradientes profundos, hero backgrounds |
| `brand.primary.light` | `#FF8C4D` | Acentos leves, ícones secundários |
| `brand.primary.lightest` | `#FFF0E6` | Backgrounds sutis, cards de destaque |

### Secondary (Dark)

| Token | Hex | Uso |
|-------|-----|-----|
| `brand.secondary.main` | `#1D1D1D` | Texto principal, nav bar, header escuro |
| `brand.secondary.light` | `#333333` | Texto secundário, ícones |
| `brand.white` | `#FFFFFF` | Background principal, texto sobre laranja |

### Neutrals

| Token | Hex | Uso |
|-------|-----|-----|
| `neutral.0` | `#FFFFFF` | Background principal |
| `neutral.50` | `#FCF9F8` | Background off-white aquecido (assinatura Tangerina) |
| `neutral.100` | `#F5F5F5` | Sections alternadas |
| `neutral.200` | `#EBEBEB` | Bordas, dividers |
| `neutral.300` | `#D4D4D4` | Bordas inativas, separadores |
| `neutral.400` | `#A3A3A3` | Placeholders, texto disabled |
| `neutral.500` | `#737373` | Texto terciário |
| `neutral.600` | `#525252` | Texto secundário |
| `neutral.700` | `#404040` | Texto regular |
| `neutral.800` | `#2D2D2D` | Texto enfatizado |
| `neutral.900` | `#1D1D1D` | Texto principal, headings |
| `neutral.1000` | `#000000` | Background dark mode puro |

### Superfícies

| Token | Hex | Uso |
|-------|-----|-----|
| `surface.background` | `#FFFFFF` | Fundo principal light |
| `surface.backgroundWarm` | `#FCF9F8` | Fundo aquecido (off-white com toque quente — assinatura Tangerina) |
| `surface.level1` | `#F5F5F5` | Cards, sections |
| `surface.level2` | `#EBEBEB` | Inputs, dropdowns |
| `surface.dark` | `#1D1D1D` | Footer, headers dark, nav mobile |

### Feedback / Status

| Token | Hex | Uso |
|-------|-----|-----|
| `feedback.success` | `#1B873F` | Confirmações de reserva, check-in completo |
| `feedback.warning` | `#E5A30A` | Alertas de embarque, alterações de voo |
| `feedback.error` | `#DC2626` | Erros de pagamento, voo cancelado |
| `feedback.info` | `#2563EB` | Informações de portão, status de voo |

### Multi-marca (Smiles / GOLLOG)

| Marca | Primary | Accent | Uso |
|-------|---------|--------|-----|
| **GOL** | `#FF7020` | `#1D1D1D` | Compra de passagens, check-in, app |
| **Smiles** | `#FF7020` | `#6B21A8` | Programa de fidelidade, milhas, resgate |
| **GOLLOG** | `#FF7020` | `#1D4ED8` | Logística, rastreio de carga |
| **VoeBiz** | `#FF7020` | `#1D1D1D` | Corporativo, gestão de viagens |

---

## Typography

### GOL Sans — A Tipografia Proprietária

A **GOL Sans** é a família tipográfica exclusiva da GOL, desenhada pela **Fabio Haag Type** em colaboração com **FutureBrand** como parte do rebranding #NovaGOL. Totaliza **56 fontes** que cobrem todas as necessidades de comunicação da marca.

#### Conceito e Design

O mindset **digital-first** guiou o design das formas, que possuem:
- Formas simples e minimalistas
- Contadores abertos para legibilidade em telas de baixa resolução
- Variedade de usos contemplada (sinalização aeroportuária até menus de bordo multilíngue)

#### Especificações da Família

| Dimensão | Valores |
|----------|---------|
| Optical sizes | 2: **Display** (títulos, comunicação) e **Text** (interface, corpo) |
| Widths | 4 variações de largura |
| Weights | 6 pesos por width |
| Italics | Itálicos verdadeiros (não oblíquos) para todos os pesos |
| Total de fontes | **56** |

#### GOL Sans Display — Comunicação

- Projetada para tamanhos grandes (títulos, hero, marketing)
- Barra inclinada nas letras **'e', 'P' e 'R'** — detalhe sutil e exclusivo que confere identidade
- Maior contraste entre traços
- Uma simples listagem de preços com **R$** em tamanho grande já identifica a GOL
- Ideal para: headlines, marketing, sinalização, campanhas, preços

#### GOL Sans Text — Interface

- Projetada para tamanhos menores (UI, corpo, menus)
- Ascendentes e descendentes mais altos que a versão Display
- Espaçamento entre letras mais generoso
- Menor contraste para melhor legibilidade em texto corrido
- Ideal para: interface web/app, botões, labels, formulários, texto de bordo

#### Fallback Web

Para contextos onde a fonte proprietária não está disponível, utiliza-se **Nunito Sans** (Google Fonts) como fallback por compartilhar proporções geométricas similares, x-height generoso e neutralidade.

### Escala Tipográfica

| Token | Tamanho | Uso |
|-------|:---:|---|
| `caption` | 12px | Legendas, footnotes, disclaimers, classe tarifária |
| `body2` | 14px | Texto secundário, detalhes de voo |
| `body1` | 16px | Corpo padrão, informações de embarque |
| `subtitle2` | 18px | Subtítulos menores, labels de seção |
| `subtitle1` | 20px | Subtítulos, nome do destino |
| `heading6` | 22px | Headings de seção |
| `heading5` | 24px | Headings médios |
| `heading4` | 28px | Headings de destaque |
| `heading3` | 32px | Títulos de tela/página |
| `heading2` | 40px | Títulos hero |
| `heading1` | 48px | Display app/web |
| `display2` | 56px | Display marketing |
| `display1` | 72px | Display hero, preços promocionais |

### Pesos e Hierarquia

| Role | Weight | Uso |
|------|:------:|-----|
| Display / Hero | 700–800 | Títulos principais, preços, promoções |
| Heading | 600 (Semibold) | Subtítulos, headings de seção |
| Body | 400 (Regular) | Texto corrido, informações de voo |
| Emphasis | 600–700 | Ênfase em corpo, CTAs |
| Light | 300 | Dados grandes, contadores, saldos de milhas |

### Citações sobre a Tipografia

> "Este projeto destaca todas as vantagens de encomendar uma tipografia sob medida: foi criada junto com a FutureBrand e com as equipes de design e tecnologia do cliente; pesos e estilos foram cuidadosamente considerados para atender as necessidades específicas da GOL. E além disso, é exclusiva — um ativo valioso para a marca." — **Fabio Haag**, type designer

> "GOL Sans traz mais propriedade à comunicação da marca e consistência visual em todos os nossos pontos de contato." — **German Goytia Carmona Junior**, Gerente de Marketing, GOL

---

## Layout

### Spacing Scale

O Tangerina utiliza escala progressiva baseada em múltiplos de 4px e 8px:

| Token | Valor | Uso |
|-------|:---:|---|
| `quarck` | 4px | Micro-espaçamento, gap ícone interno |
| `nano` | 8px | Gap ícone-texto, padding mínimo |
| `xxxs` | 12px | Padding interno compacto |
| `xxs` | 16px | Padding padrão de componentes |
| `xs` | 24px | Espaçamento entre elementos |
| `sm` | 32px | Separação entre blocos |
| `md` | 40px | Espaçamento de seção |
| `lg` | 48px | Separação generosa |
| `xl` | 56px | Espaçamento entre seções |
| `xxl` | 64px | Separação grande de áreas |
| `xxxl` | 80px | Margens externas |
| `huge` | 96px | Separação máxima |
| `giant` | 128px | Hero spacing |

### Grid System

| Contexto | Colunas | Margem | Gutter |
|----------|:---:|:---:|:---:|
| Mobile (< 375px) | 4 | 16px | 16px |
| Mobile (≥ 375px) | 4 | 24px | 16px |
| Tablet (768px) | 8 | 32px | 24px |
| Desktop (1024px+) | 12 | Auto | 24px |
| Wide (1440px+) | 12 | Auto (max-width 1200px) | 32px |

### Breakpoints

| Nome | Valor | Contexto |
|------|:---:|---|
| `mobile` | 0–767px | Smartphones, app webview |
| `tablet` | 768–1023px | Tablets, totems aeroporto |
| `desktop` | 1024–1439px | Desktop padrão |
| `wide` | 1440px+ | Monitores grandes |

### Container

O conteúdo principal é centrado com `max-width: 1200px` em desktop/wide, com margens laterais automáticas. Seções hero e banners podem ocupar full-width (100vw).

---

## Elevation & Depth

### Filosofia

O site da GOL adota abordagem predominantemente **flat** com backgrounds brancos e off-white (`#FCF9F8`). Elevação é usada com moderação — apenas para elementos que flutuam sobre o conteúdo (dropdowns de busca, modais de seleção de voo, cards de tarifa destacados).

### Box Shadows

| Token | Box-shadow | Uso |
|-------|-----------|-----|
| `elevation.none` | Nenhuma | Elementos inline, seções flat |
| `elevation.low` | `0 2px 4px 0 rgba(0,0,0,0.06)` | Cards de voo em repouso |
| `elevation.medium` | `0 4px 12px 0 rgba(0,0,0,0.10)` | Cards de tarifa selecionados, dropdowns |
| `elevation.high` | `0 8px 24px 0 rgba(0,0,0,0.14)` | Modal de busca, seletor de datas |
| `elevation.highest` | `0 16px 48px 0 rgba(0,0,0,0.18)` | Overlays full-screen, bottom sheets |

### Dark Mode

No dark mode (suportado pelo Tangerina), elevação é comunicada por variação de luminosidade:

| Nível | Light Mode | Dark Mode |
|-------|-----------|-----------|
| 0 (base) | `#FFFFFF` | `#1D1D1D` |
| 1 | `#F5F5F5` | `#2D2D2D` |
| 2 | Sombra low | `#3D3D3D` |
| 3 | Sombra medium | `#4D4D4D` |

### Opacity

| Token | Valor | Uso |
|-------|:---:|---|
| `transparent` | 0.0 | Invisível |
| `disabled` | 0.38 | Elementos desabilitados, voos indisponíveis |
| `overlay` | 0.48 | Scrim de modais leve |
| `scrim` | 0.72 | Scrim de modais/sheets, imagem hero overlay |
| `opaque` | 1.0 | Totalmente opaco |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Imagens full-bleed, banners hero |
| `small` | 4px | Tags de tarifa, badges de status |
| `medium` | 8px | Inputs, cards de voo, containers |
| `large` | 12px | Cards destacados, seletor de datas |
| `xLarge` | 16px | Modais, bottom sheets |
| `xxLarge` | 24px | Grandes containers, sections arredondadas |
| `pill` | 999px | Botões primários, chips de filtro, search bar |
| `circle` | 50% | Avatares, ícones circulares, checkmarks |

### Linguagem de Forma

A GOL utiliza border-radius generoso, tendendo ao **pill shape** para CTAs e botões primários. Essa escolha reforça a personalidade amigável e acessível da marca low-cost, diferenciando-se de companhias tradicionais que utilizam formas mais rígidas.

### Iconografia

- **Estilo**: Line icons com traço consistente de 2px
- **Tamanhos**: 16px (compact), 20px (default), 24px (large), 32px (hero)
- **Touch target**: Mínimo 44×44px
- **Temas**: Aviação (avião, mala, assento), viagem (mapa, pin, calendário), serviços (check, info, alert)
- **Cor**: Herdam cor do contexto; ícones de ação em laranja primary

---

## Components

O Tangerina Design System oferece componentes reutilizáveis multi-marca que servem GOL, Smiles, GOLLOG e VoeBiz:

### Navegação
- **AppBar** — Barra de navegação com logo GOL, busca e menu
- **BottomNavigation** — Navegação mobile (Home, Minhas Viagens, Serviços, Check-in, Conta)
- **TabBar** — Abas horizontais (tipo de viagem: ida/volta, só ida, múltiplos trechos)
- **Breadcrumb** — Trilha de navegação para fluxo de compra
- **MegaMenu** — Menu expansível desktop com categorias (Serviços, Informações, Atendimento, Negócios)

### Busca e Reserva
- **FlightSearch** — Formulário de busca de voos (origem, destino, datas, passageiros)
- **DatePicker** — Seletor de datas com calendário e indicador de preços
- **AirportSelector** — Autocomplete com código IATA e nome da cidade
- **PassengerCounter** — Incrementador de adultos, crianças, bebês
- **FareCard** — Card comparativo de tarifas (Light, Plus, Max, Premium)
- **FlightCard** — Card de resultado de busca com horários, duração, escalas

### Cards e Containers
- **Card** — Container base com variantes (elevated, flat, outlined)
- **PromoCard** — Card de oferta/promoção com imagem, destino e preço
- **DestinationCard** — Card de destino com foto, nome e "a partir de"
- **BottomSheet** — Sheet deslizante mobile para detalhes e seleções
- **Modal** — Dialog para confirmações, alertas e fluxos secundários

### Formulários
- **TextField** — Input com label flutuante, validação, máscara (CPF, passaporte)
- **Select** — Dropdown de seleção (classe, tarifa, nacionalidade)
- **Checkbox** — Seleção múltipla (serviços adicionais, bagagem extra)
- **RadioButton** — Seleção exclusiva (tarifa, forma de pagamento)
- **Switch** — Toggle on/off (notificações, preferências)
- **CreditCardInput** — Input formatado para cartão de crédito com detecção de bandeira

### Ações
- **Button** — Primário (filled laranja), secundário (outlined), terciário (ghost)
- **IconButton** — Botão com ícone (fechar, voltar, favoritar)
- **LinkButton** — Link textual com seta ou ícone
- **FloatingActionButton** — Chat de atendimento, assistente virtual

### Feedback
- **Alert** — Mensagens contextuais (embarque, alteração, cancelamento)
- **Snackbar** — Notificações temporárias (reserva salva, check-in realizado)
- **ProgressStepper** — Stepper de progresso (Busca → Seleção → Pagamento → Confirmação)
- **Spinner** — Loading circular (buscando voos)
- **Skeleton** — Placeholder de carregamento para cards de voo
- **StatusBadge** — Badge de status de voo (no horário, atrasado, cancelado, embarcando)

### Dados de Viagem
- **BoardingPass** — Representação digital do cartão de embarque
- **FlightStatus** — Painel de status com portão, terminal, horário
- **SeatMap** — Mapa de assentos interativo (normal, conforto, indisponível)
- **BaggageSelector** — Seletor de bagagem com peso/quantidade
- **MilesBalance** — Exibição de saldo Smiles com conversão

### Mídia e Display
- **Avatar** — Foto de perfil do cliente
- **Badge** — Indicadores (promoção, novo, milhas)
- **Tag** — Labels categóricos (tarifa, classe, status Smiles)
- **Divider** — Separador visual
- **HeroBanner** — Banner hero com imagem de destino e CTA
- **Carousel** — Carrossel de ofertas e destinos

---

## Do's and Don'ts

### ✅ Do's

- **Use o laranja como protagonista** — `#FF7020` é GOL. Reservar para CTAs primários, elementos de marca e destaques de preço
- **Respeite a hierarquia tipográfica** — GOL Sans Display para títulos e preços; GOL Sans Text para corpo e interface
- **Mantenha backgrounds limpos** — Branco (`#FFFFFF`) ou off-white quente (`#FCF9F8`) como superfícies dominantes
- **Use tokens semânticos** — Sempre `color.primary`, nunca hardcode de hex. Os tokens adaptam por marca (GOL, Smiles, GOLLOG)
- **Priorize o digital-first** — Componentes e tipografia foram desenhados para telas. Teste em múltiplas resoluções
- **Aplique pill shapes em CTAs** — Botões primários com `border-radius: 999px` reforçam acessibilidade e identidade amigável
- **Preserve o contraste** — Texto sobre laranja deve ser branco; texto sobre branco deve ser `#1D1D1D`
- **Siga a escala de spacing** — Use tokens em múltiplos de 4/8px; nunca valores arbitrários
- **Teste multi-marca** — Valide que o componente funciona com theming GOL, Smiles, GOLLOG e VoeBiz
- **Suporte dark mode** — Teste ambos os modos; use variação de luminosidade para comunicar elevação

### ❌ Don'ts

- **Não dilua o laranja** — Nunca use como background de seções inteiras; reservar para elementos pontuais de alta importância
- **Não misture GOL Sans Display e Text na mesma superfície** — Cada uma tem seu contexto: Display para comunicação, Text para interface
- **Não use sombras pesadas** — O design é predominantemente flat; elevação deve ser sutil e proposital
- **Não ignore o off-white** — O `#FCF9F8` (warm background) é assinatura do Tangerina; backgrounds devem ter esse toque quente
- **Não use cinza frio** — Os neutrals do sistema são levemente quentes; cinzas azulados ou frios quebram a identidade
- **Não reduza touch targets** — Mínimo 44×44px para elementos interativos (contexto mobile/app)
- **Não substitua GOL Sans por Nunito Sans arbitrariamente** — Nunito é fallback técnico; em comunicação de marca, sempre usar GOL Sans
- **Não ignore o multi-marca** — Componentes devem aceitar theming; nunca hardcodar cores de uma marca específica
- **Não crie novas cores fora da paleta** — O sistema é deliberadamente restrito (laranja + neutrals); cores adicionais devem ser apenas feedback
- **Não use o logotipo sem os dois "O" entrelaçados** — O símbolo GOL (dois círculos interligados — laranja e escuro) é indissociável da marca

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [voegol.com.br](https://www.voegol.com.br) |
| Design System | [tangerina.golsmiles.com.br](https://tangerina.golsmiles.com.br) |
| iF Design Award | [ifdesign.com/en/winner-ranking/project/tangerina-design-system/713061](https://ifdesign.com/en/winner-ranking/project/tangerina-design-system/713061) |
| Awwwards | [awwwards.com/sites/tangerina-design-system-1](https://www.awwwards.com/sites/tangerina-design-system-1) |
| Typography (GOL Sans) | [fabiohaagtype.com/en/gol/](https://fabiohaagtype.com/en/gol/) |
| Typography Foundry | Fabio Haag Type + FutureBrand |
| Brand History | [1000logos.net/gol-linhas-aereas-inteligentes-logo/](https://1000logos.net/gol-linhas-aereas-inteligentes-logo/) |
| DS Brasileiros | [designsystemsbrasileiros.com](https://designsystemsbrasileiros.com) (classificado como closed) |
| Method | Public site CSS extraction, Awwwards color palette, iF Design Award documentation, typography foundry case study |
| Date | 2026-07-05 |

<!-- Source: https://designmd.app/brands/gol · designmd.app -->
