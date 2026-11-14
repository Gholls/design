---
version: alpha
name: Strava iOS
description: 运动记录 App 的设计系统：白色/煤黑双主题、单一 Strava Orange、数据即品牌的大号统计、路线地图与活动卡片。
gallery:
  order: 201
  platform: mobile
  author: "awesome-ios-design-md"
  source: "https://github.com/Meliwat/awesome-ios-design-md/tree/main/design-md/fitness/strava"
  tags: ["运动", "移动 App", "数据可视化", "高对比"]
colors:
  primary: "#FC4C02"
  on-primary: "#FFFFFF"
  primary-pressed: "#D44002"
  canvas: "#FFFFFF"
  surface: "#F5F4F2"
  surface-alt: "#F0F0F0"
  border: "#E5E5E5"
  text: "#0E0E0E"
  muted: "#666666"
  text-tertiary: "#9A9A9A"
  dark-canvas: "#0F0F0F"
  dark-surface: "#1A1A1A"
  dark-surface-2: "#262626"
  dark-border: "#2A2A2A"
  dark-text: "#F2F2F2"
  dark-muted: "#A0A0A0"
  success: "#22C55E"
  warning: "#F59E0B"
  danger: "#EF4444"
  gold: "#F5C24A"
  silver: "#C6C6C6"
  bronze: "#CD7F32"
  pace: "#3B82F6"
  heart: "#E74C3C"
  elevation: "#8B6F47"
typography:
  screen-title:
    fontFamily: "SF Pro Display"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  hero-stat:
    fontFamily: "SF Pro Display"
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.6px
  section-header:
    fontFamily: "SF Pro Text"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
  row-title:
    fontFamily: "SF Pro Text"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "SF Pro Text"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.45
  meta:
    fontFamily: "SF Pro Text"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
  pill:
    fontFamily: "SF Pro Text"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
  button:
    fontFamily: "SF Pro Text"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1
  tab-label:
    fontFamily: "SF Pro Text"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  section: 40px
components:
  record-button:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 56px
  activity-card:
    background: "{colors.surface}"
    rounded: "{rounded.lg}"
  stat-grid:
    columns: 3
    value: "{typography.hero-stat}"
  tab-bar:
    background: "{colors.canvas}"
    active: "{colors.primary}"
    inactive: "{colors.text-tertiary}"
  map-card:
    background: "{colors.surface-alt}"
    rounded: "{rounded.lg}"
  challenge-card:
    background: "{colors.dark-canvas}"
    color: "{colors.dark-text}"
---

## Overview

Strava's iOS app is a sweat-stained newspaper for athletes. White canvas in light mode, coal black (`#0F0F0F`) in dark, because the headline of every screen is a map: a route polyline in Strava Orange (`#FC4C02`) over a warm parchment map tile. The orange is the only chromatic accent — Record CTA, active tab, kudos filled, PR chip, route line. Everything else is a gradient of warm grays (`#F5F4F2`, `#F0F0F0`, `#E5E5E5`) to true text black.

Data is the brand. Activity cards are a map snapshot above a 3-up stat grid (distance / time / pace), and those numbers use tabular figures. Cards are flat with a hairline divider; the map photo provides hierarchy. The Record screen is a full-screen live session with a giant elapsed time, distance and pace, plus pause/finish.

`Density: 6/10` · `Variance: 4/10` · `Motion: 5/10`

## Color roles

- Canvas `#FFFFFF` / coal `#0F0F0F`; cards `#F5F4F2` / `#1A1A1A`; elevated `#262626` dark.
- Text `#0E0E0E` / `#F2F2F2`; secondary `#666666` / `#A0A0A0`; tertiary `#9A9A9A`.
- Strava Orange `#FC4C02` for Record, active tab, kudos filled, PR; pressed `#D44002`.
- Rank colors: PR gold `#F5C24A`, silver `#C6C6C6`, bronze `#CD7F32`.

## Typography

SF Pro Display for screen titles and hero stats (44/900 for distance and elapsed time); SF Pro Text for rows, metadata and buttons. Numbers use `monospacedDigit` everywhere. Section headers 20/700; activity titles 17/600; metadata 13/400.

## Components

- Activity card: full-bleed map snapshot, title above, 3-up stat grid below, kudos row.
- Record screen: full-screen live session, elapsed 44/900, distance/pace 3-up, orange pause and finish.
- Stat grid: 3 columns, tabular numbers, uppercase-ish labels at 11/600.
- Segmented stats: 距离 / 时间 / 海拔 with a 2pt orange underline.
- Challenge card: dark surface with orange progress bar.
- Tab bar: 今日 / 训练 / 数据 / 我的, active orange, 49pt + safe area.

## Do's and Don'ts

- Do let the map and the numbers carry the hierarchy.
- Do keep cards flat with hairline dividers; reserve shadows for floating Record controls.
- Do use tabular numerals for every stat.
- Do keep orange for action and active state only.
- Don't add a second brand color or gradient chrome.
- Don't put metric labels above values in a heavy weight.
- Don't use rounded pill cards for activity feeds; use 8–12pt corners.
- Don't animate decorative elements; motion belongs to recording.
