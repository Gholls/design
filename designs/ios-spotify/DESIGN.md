---
version: alpha
name: Spotify iOS
description: 音乐流媒体 App 的暗色设计系统：近黑画布、单一 Spotify Green、专辑封面驱动的动态渐变、密集列表与全屏 Now Playing。
gallery:
  order: 200
  platform: mobile
  author: "awesome-ios-design-md"
  source: "https://github.com/Meliwat/awesome-ios-design-md/tree/main/design-md/music/spotify"
  tags: ["音乐", "移动 App", "暗色", "高对比"]
colors:
  primary: "#1DB954"
  on-primary: "#000000"
  primary-pressed: "#169C46"
  logo-green: "#1ED760"
  accent: "#A0C3FF"
  canvas: "#121212"
  background: "#121212"
  canvas-deep: "#000000"
  surface: "#181818"
  surface-alt: "#282828"
  surface-3: "#3E3E3E"
  border: "#2A2A2A"
  divider: "#2A2A2A"
  text: "#FFFFFF"
  muted: "#B3B3B3"
  text-tertiary: "#6A6A6A"
  success: "#1DB954"
  warning: "#FFA42B"
  danger: "#F15E6C"
  explicit: "#8B8B8B"
typography:
  screen-title:
    fontFamily: "Spotify Mix Title"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  now-playing:
    fontFamily: "Spotify Mix Title"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3px
  section-header:
    fontFamily: "Spotify Mix Title"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.3px
  track-title:
    fontFamily: "Spotify Mix UI"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.1px
  card-title:
    fontFamily: "Spotify Mix UI"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.1px
  artist:
    fontFamily: "Spotify Mix UI"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Spotify Mix UI"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
  meta:
    fontFamily: "Spotify Mix UI"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
  label:
    fontFamily: "Spotify Mix UI"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.5px
  button:
    fontFamily: "Spotify Mix UI"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
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
  play-button:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 56px
  tab-bar:
    background: "{colors.canvas}"
    border: "{colors.border}"
    active: "{colors.text}"
    inactive: "{colors.muted}"
  track-row:
    height: 56px
    padding: "{spacing.xs}"
  album-card:
    background: "{colors.surface}"
    rounded: "{rounded.md}"
  search-bar:
    background: "{colors.surface-alt}"
    rounded: "{rounded.md}"
    height: 40px
  now-playing:
    background: "{colors.canvas-deep}"
    controls: "{colors.text}"
---

## Overview

Spotify's iOS app is a dark listening surface built on a near-black canvas (`#121212`) that keeps the album art as the only loud element. Chrome recedes: surfaces lift through `#181818` → `#282828` → `#3E3E3E`, hairlines are `#2A2A2A`, and a single Spotify Green (`#1DB954`) marks play, follow, active tab and download-complete actions. Green text exists only in the active tab label; everywhere else green is a background.

The Now Playing screen is the emotional center: a full-screen vertical gradient derived from the current album cover fades into canvas black, with a 72pt green play button, a scrubber, and a queue sheet. Lists are dense but tappable (56pt rows), typography is Spotify Mix at 400/600/700, and the bottom tab bar is the only persistent chrome.

`Density: 7/10` · `Variance: 4/10` · `Motion: 6/10`

## Color roles

- Canvas `#121212`, cards `#181818`, sheets `#282828`, pressed `#3E3E3E`.
- Text `#FFFFFF`; secondary `#B3B3B3`; tertiary `#6A6A6A`.
- Spotify Green `#1DB954` for primary actions; pressed `#169C46`; logo green `#1ED760` never in UI chrome.
- Podcast blue `#A0C3FF` used sparingly; error `#F15E6C` for playback failures.

## Typography

Spotify Mix Title for screen and Now Playing headers; Spotify Mix UI for track rows, metadata, labels and buttons. Negative tracking only on titles (-0.3 to -0.4px); body sits at 0. Tab labels are 11pt/700. Counts and durations use tabular numerals.

## Components

- Now Playing: full-bleed album gradient, 72pt circular play button, scrubber with elapsed/remaining, shuffle/repeat, like and queue.
- Track row: 56pt, leading art or index, title 16/600, artist 14/400 muted, duration 11/500 tabular.
- Album card: 2:3 art, 8pt radius, title 15/600, artist 14/400.
- Tab bar: 4 tabs, 49pt + safe area, active icon white, inactive `#B3B3B3`.
- Search: 40pt `#282828` field, 8pt radius; browse tiles use saturated gradients.

## Do's and Don'ts

- Do keep the canvas near-black and let album art supply color.
- Do use green as a fill for one primary action per screen, never as body text.
- Do keep rows dense and metadata tabular.
- Do derive the Now Playing background from the current cover.
- Don't introduce a second brand hue or a rainbow of control colors.
- Don't put green text anywhere except the active tab label.
- Don't use pure black as the default canvas; reserve `#000000` for full-screen playback.
- Don't add drop shadows to list rows; use surface steps and hairlines.
