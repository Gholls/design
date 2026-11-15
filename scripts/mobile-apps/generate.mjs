#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const INDEX = JSON.parse(readFileSync(join(ROOT, 'public/design-index.json'), 'utf8'))
const RUNTIME_JS = readFileSync(join(ROOT, 'scripts/mobile-apps/runtime.js'), 'utf8')

const parseHex = (h) => {
  const s = String(h || '').replace('#', '')
  if (![3, 4, 6, 8].includes(s.length)) return null
  const full = s.length <= 4 ? s.slice(0, 3).split('').map((c) => c + c).join('') : s.slice(0, 6)
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16))
}
const lum = (hex) => {
  const rgb = parseHex(hex)
  if (!rgb) return 1
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }
  return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2])
}
const contrast = (a, b) => {
  const l1 = lum(a), l2 = lum(b)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}
const mix = (a, b, t) => {
  const A = parseHex(a), B = parseHex(b)
  if (!A || !B) return a
  return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join('')
}
const readable = (fg, bg, text, min = 3.4) => (contrast(fg, bg) >= min ? fg : mix(fg, text, 0.45))
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

const DOMAIN_LABEL = { music: '音乐', fitness: '运动', finance: '金融', messaging: '消息', video: '视频', food: '餐饮', travel: '旅行', dating: '约会', productivity: '效率', social: '社交', tools: '工具' }
const AI = new Set(['ios-chatgpt', 'ios-claude', 'ios-gemini', 'ios-copilot', 'ios-grok', 'ios-deepseek', 'ios-perplexity', 'ios-character-ai', 'ios-midjourney'])
const SPECIAL = {
  'ios-gmail': 'messaging', 'ios-kindle': 'social', 'ios-goodreads': 'social', 'ios-duolingo': 'productivity',
  'ios-google-calendar': 'productivity', 'ios-github': 'tools', 'ios-dropbox': 'tools', 'ios-evernote': 'productivity',
  'ios-obsidian': 'productivity', 'ios-notion': 'productivity', 'ios-bear': 'productivity', 'ios-craft': 'productivity',
  'ios-cal-ai': 'tools', 'ios-zoom': 'messaging', 'ios-microsoft-teams': 'messaging', 'ios-slack': 'messaging',
  'ios-apple-tv': 'video', 'ios-apple-music': 'music', 'ios-youtube-music': 'music', 'ios-kindle': 'social',
}
const TAG_DOMAIN = { '音乐': 'music', '运动': 'fitness', '金融': 'finance', '消息': 'messaging', '视频': 'video', '餐饮': 'food', '旅行': 'travel', '约会': 'dating', '效率': 'productivity', '社交': 'social', '工具': 'tools' }
const domainOf = (d) => {
  if (AI.has(d.slug)) return 'tools'
  if (SPECIAL[d.slug]) return SPECIAL[d.slug]
  if ((d.tags || []).includes('约会')) return 'dating'
  const byTag = (d.tags || []).map((t) => TAG_DOMAIN[t]).find(Boolean)
  if (byTag) return byTag
  const src = d.source || ''
  const m = src.match(/design-md\/([^/]+)\//)
  const cat = m?.[1] || ''
  return CATEGORY_DOMAIN[cat] || 'tools'
}
const CATEGORY_DOMAIN = { music: 'music', fitness: 'fitness', finance: 'finance', messaging: 'messaging', video: 'video', food: 'food', travel: 'travel', dating: 'dating', productivity: 'productivity', social: 'social', misc: 'tools' }

const iconSet = ['home', 'search', 'library', 'user', 'chart', 'chat', 'calendar', 'play', 'cart', 'compass', 'heart', 'check', 'tool', 'bell']

function palette(d) {
  const r = d.roles
  const bg = r.bg || '#ffffff'
  const text = r.text || (lum(bg) < 0.2 ? '#ffffff' : '#111111')
  // Keep the spec's brand fill even when it sits close to bg (Wise lime, Bumble
  // yellow): buttons carry their own onPrimary. Only an exact bg copy is useless.
  const brand = r.primary || text
  const primary = brand.toLowerCase() === bg.toLowerCase() ? text : brand
  const onPrimary = contrast(r['on-primary'] || '#ffffff', primary) >= 4.5
    ? r['on-primary'] || '#ffffff'
    : (contrast('#ffffff', primary) >= contrast('#000000', primary) ? '#ffffff' : '#000000')
  return {
    bg,
    surface: r.surface || (lum(bg) < 0.2 ? mix(bg, '#ffffff', 0.08) : mix(bg, '#000000', 0.04)),
    surface2: r['surface-alt'] || (lum(bg) < 0.2 ? mix(bg, '#ffffff', 0.14) : mix(bg, '#000000', 0.08)),
    text,
    muted: readable(r.muted || mix(text, bg, 0.45), bg, text, 3.4),
    border: r.border || mix(bg, text, 0.16),
    primary,
    primaryText: readable(primary, bg, text, 4.5),
    onPrimary,
    accent: r.accent || r.primary || text,
    success: readable(r.success || '#16a34a', bg, text, 3),
    warning: readable(r.warning || '#d97706', bg, text, 3),
    danger: readable(r.danger || '#dc2626', bg, text, 3),
  }
}

const art = (label, c1, c2) => ({ label, c1, c2 })

function artFrom(p, i) {
  const sets = [[p.primary, p.accent], [p.accent, p.success], [p.warning, p.primary], [p.danger, p.accent], [p.primary, p.surface2]]
  return art('', ...sets[i % sets.length])
}

function domainConfig(d, domain) {
  const p = palette(d)
  const app = d.name.replace(/\s+iOS$/i, '')
  const A = (label, i) => {
    const pair = artFrom(p, i)
    return art(label || app.slice(0, 2).toUpperCase(), pair.c1, pair.c2)
  }
  const person = (n, i) => ({ name: n, sub: ['产品', '设计', '工程', '运营'][i % 4], art: A(n.slice(0, 2), i + 1) })
  const base = {
    app,
    name: d.name,
    domain,
    domainLabel: DOMAIN_LABEL[domain],
    palette: p,
    font: d.fontFamilyBase,
    radius: d.radius,
    tagline: (d.summary || '').slice(0, 110),
  }

  if (domain === 'music') {
    const albums = [
      { id: 'a1', title: 'Neon Ledger', sub: `${app} Sessions`, art: A('NL', 0) },
      { id: 'a2', title: 'Afterglow', sub: '林晚舟', art: A('AG', 1) },
      { id: 'a3', title: 'Low Orbit', sub: '周墨白', art: A('LO', 2) },
      { id: 'a4', title: 'Paper Planes', sub: '苏见月', art: A('PP', 3) },
      { id: 'a5', title: 'Glasshouse', sub: '陈屿', art: A('GH', 4) },
    ]
    const tracks = [
      { id: 't1', title: 'Night Shift', sub: 'Neon Ledger · 3:42', art: albums[0].art },
      { id: 't2', title: 'Static Bloom', sub: 'Neon Ledger · 2:58', art: albums[0].art },
      { id: 't3', title: 'Slow Motion', sub: 'Afterglow · 3:18', art: albums[1].art },
      { id: 't4', title: 'Telemetry', sub: 'Low Orbit · 4:12', art: albums[2].art },
    ]
    const details = {}
    for (const a of albums) details[a.id] = { title: a.title, blocks: [{ type: 'hero', kicker: 'ALBUM', title: a.title, sub: a.sub, art: a.art, cta: { label: '播放', live: true } }, { type: 'stats', items: [['曲目', '3'], ['时长', '11 分钟'], ['年份', '2026']] }, { type: 'list', rows: tracks.slice(0, 3).map((t) => ({ ...t, meta: '3:42' })) }] }
    for (const t of tracks) details[t.id] = { title: t.title, blocks: [{ type: 'hero', kicker: 'TRACK', title: t.title, sub: t.sub, art: t.art, cta: { label: '播放', live: true } }, { type: 'stats', items: [['时长', '3:42'], ['音质', '无损'], ['播放', '2.3M']] }, { type: 'note', text: '点击播放进入全屏 Now Playing，支持进度、上一首/下一首与队列。' }] }
    return {
      ...base,
      tabs: [['home', '首页', 'home'], ['search', '搜索', 'search'], ['library', '音乐库', 'library'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '继续收听', title: 'Neon Ledger', sub: `${app} Sound · 第 2 首`, art: A('NL', 0), cta: { label: '播放', live: true } }, { type: 'rail', title: '最近播放', items: albums }, { type: 'list', title: '为你打造', rows: tracks }, { type: 'rail', title: '新发行', items: albums.slice(1) }],
        search: [{ type: 'chips', items: ['全部', '音乐', '播客'] }, { type: 'posters', title: '浏览全部', items: albums }, { type: 'list', title: '热门曲目', rows: tracks }],
        library: [{ type: 'list', title: '播放列表', rows: [{ id: 'pl1', title: 'Deep Work', sub: '24 首', meta: '24' }, { id: 'pl2', title: '交付日', sub: '18 首', meta: '18' }, { id: 'pl3', title: '夜航', sub: '31 首', meta: '31' }] }, { type: 'list', title: '已喜欢的歌曲', rows: tracks.slice(0, 3) }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 设计负责人`, art: A('林', 2), stats: [['本月', '42h'], ['艺人', '38'], ['歌单', '12']] }, { type: 'settings', rows: [['高品质音频', 'Wi-Fi 下 320kbps', true], ['离线模式', '只播放已下载', false], ['动态封面', '跟随专辑取色', true]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 音乐领域样板间` }],
      },
      details,
      live: { kind: 'music', title: 'Night Shift', sub: 'Neon Ledger · 3:42', art: A('NL', 0), duration: 222 },
      search: [...albums, ...tracks].map((x) => ({ id: x.id, title: x.title, sub: x.sub })),
    }
  }

  if (domain === 'fitness') {
    const acts = [
      { id: 'f1', title: '晨间跑步', sub: '今天 06:42 · 8.2 km', meta: '46:18', art: A('跑', 0) },
      { id: 'f2', title: '午间骑行', sub: '今天 12:20 · 12.4 km', meta: '38:02', art: A('骑', 1) },
      { id: 'f3', title: '滨江节奏跑', sub: '昨天 19:05 · 10.0 km', meta: '52:40', art: A('跑', 2) },
    ]
    const details = {}
    for (const a of acts) details[a.id] = { title: a.title, blocks: [{ type: 'hero', kicker: 'ACTIVITY', title: a.title, sub: a.sub, art: a.art, cta: { label: '查看记录', live: false } }, { type: 'stats', items: [['距离', a.meta], ['配速', '5:39'], ['心率', '152']] }, { type: 'chart', title: '分段配速', values: [42, 55, 48, 68, 62, 74, 58], labels: ['1', '2', '3', '4', '5', '6', '7'], unit: 's' }, { type: 'note', text: '活动卡 = 地图 + 3-up 统计 + kudos；点击开始记录可进入全屏计时。' }] }
    return {
      ...base,
      tabs: [['home', '今日', 'home'], ['train', '训练', 'chart'], ['stats', '数据', 'chart'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '本周目标', title: '32.4 km', sub: '已完成 65% · 还差 17.6 km', art: A('65', 0), cta: { label: '开始记录', live: true } }, { type: 'stats', items: [['时间', '3h12'], ['爬升', '480m'], ['活动', '4']] }, { type: 'list', title: '今天', rows: acts }, { type: 'tools', title: '挑战', items: [['200 km', 'November Distance', '66%'], ['3,000m', 'Climbing', '66%'], ['7 天', 'Streak', '71%']] }],
        train: [{ type: 'list', title: '本周训练', rows: [{ id: 'p1', title: '间歇 6×800m', sub: '周三 · 操场 · 4:10/km', meta: '45m' }, { id: 'p2', title: '恢复跑 30 分钟', sub: '周四 · Z2 · 步频 170+', meta: '30m' }, { id: 'p3', title: '核心 + 髋部', sub: '周五 · 20 分钟', meta: '20m' }, { id: 'p4', title: '长距离 18 km', sub: '周六 · 滨江 · 5:45/km', meta: '105m' }] }, { type: 'note', text: '训练计划按周排布，点击任一项查看目标配速与区间。' }],
        stats: [{ type: 'chart', title: '近 7 天距离（km）', values: [6.2, 8.4, 0, 10.1, 5.2, 12, 4.6], labels: ['一', '二', '三', '四', '五', '六', '日'], unit: 'km' }, { type: 'list', title: '个人纪录', rows: [{ id: 'r1', title: '5K', sub: '2026-09-18', meta: '20:42' }, { id: 'r2', title: '10K', sub: '2026-10-02', meta: '43:18' }, { id: 'r3', title: '半马', sub: '2026-03-22', meta: '1:36' }] }],
        me: [{ type: 'profile', name: '林晚舟', sub: '杭州 · 跑步 / 骑行', art: A('林', 2), stats: [['本年', '1,284'], ['活动', '96'], ['徽章', '18']] }, { type: 'settings', rows: [['公制单位', '公里 / 米', true], ['语音播报', '每公里播报配速', true], ['自动暂停', '停止移动 10 秒', true]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 运动领域样板间` }],
      },
      details,
      live: { kind: 'fitness', title: '记录中', sub: '户外跑步', art: A('GPS', 0), duration: 0 },
      search: acts.map((a) => ({ id: a.id, title: a.title, sub: a.sub })),
    }
  }

  if (domain === 'finance') {
    const holdings = [
      { id: 'h1', title: 'NVDA', sub: '42 股 · 平均 $118.40', meta: '+12.4%', art: A('NV', 0) },
      { id: 'h2', title: 'AAPL', sub: '18 股 · 平均 $186.20', meta: '+4.8%', art: A('AA', 1) },
      { id: 'h3', title: 'TSLA', sub: '12 股 · 平均 $244.10', meta: '-2.1%', art: A('TS', 2) },
      { id: 'h4', title: 'BTC', sub: '0.18 BTC', meta: '+8.9%', art: A('BT', 3) },
    ]
    const details = {}
    for (const h of holdings) details[h.id] = { title: h.title, blocks: [{ type: 'hero', kicker: h.title, title: h.meta, sub: h.sub, art: h.art, cta: { label: '交易', live: false } }, { type: 'stats', items: [['市值', '$9,842'], ['今日', '+$214'], ['占比', '18.4%']] }, { type: 'chart', title: '近 30 天', values: [30, 34, 31, 44, 40, 52, 58, 49, 62], labels: ['1', '', '', '', '10', '', '', '', '30'], unit: '$' }] }
    return {
      ...base,
      tabs: [['home', '资产', 'home'], ['market', '行情', 'chart'], ['trade', '交易', 'compass'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '投资组合', title: '$128,420.50', sub: '今日 +$3,184.20 (+2.4%)', art: A('+2.4', 0), cta: { label: '查看详情', live: false } }, { type: 'stats', items: [['现金', '$12,840'], ['今日', '+2.4%'], ['持仓', '8']] }, { type: 'chart', title: '组合走势', values: [38, 42, 36, 52, 48, 64, 58, 72, 66, 80], labels: ['9:30', '', '', '', '12:00', '', '', '', '15:00', ''], unit: '$' }, { type: 'list', title: '持仓', rows: holdings }],
        market: [{ type: 'chips', items: ['自选', '股票', '加密', 'ETF'] }, { type: 'list', title: '自选', rows: holdings }, { type: 'chart', title: '市场情绪', values: [44, 52, 39, 58, 66, 54, 72], labels: ['一', '二', '三', '四', '五', '六', '日'], unit: '' }],
        trade: [{ type: 'tools', title: '快捷操作', items: [['买入', '按金额下单', 'Buy'], ['卖出', '按股数下单', 'Sell'], ['定投', '每周自动', 'Auto'], ['转账', '银行出入金', 'Cash']] }, { type: 'list', title: '最近订单', rows: [{ id: 'o1', title: 'NVDA · 买入', sub: '今天 09:42 · 市价', meta: '$4,736' }, { id: 'o2', title: 'AAPL · 卖出', sub: '昨天 14:18 · 限价', meta: '$1,862' }] }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 长期投资者`, art: A('林', 2), stats: [['资产', '$128k'], ['收益', '+18.4%'], ['年限', '4']] }, { type: 'settings', rows: [['价格提醒', '自选股异动', true], ['生物识别', 'Face ID 确认交易', true], ['月度报告', '每月 1 日', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 金融领域样板间` }],
      },
      details,
      live: null,
      search: holdings.map((h) => ({ id: h.id, title: h.title, sub: h.sub })),
    }
  }

  if (domain === 'messaging') {
    const chats = [
      { id: 'c1', title: '云栖支付 · 项目群', sub: '周五前给到对账原型', meta: '09:42', art: A('云', 0) },
      { id: 'c2', title: '设计系统小组', sub: '新增了 12 个语义 token', meta: '昨天', art: A('设', 1) },
      { id: 'c3', title: '青柠出行 · Slot', sub: '灰度清单已确认', meta: '昨天', art: A('青', 2) },
      { id: 'c4', title: 'Lumen 运维', sub: '季度审计报告已上传', meta: '10-30', art: A('L', 3) },
    ]
    const details = {
      c1: { title: '云栖支付 · 项目群', blocks: [{ type: 'bubbles', messages: [['them', 'Atlas 的 UAT 反馈已整理成 6 条。', '09:31'], ['them', '优先处理金额对不上的两条。', '09:36'], ['me', '收到，今天下午给修复版本。', '09:40']] }, { type: 'composer', placeholder: '发消息…' }] },
      c2: { title: '设计系统小组', blocks: [{ type: 'bubbles', messages: [['them', '新增 12 个语义 token，命名按场景/角色重排。', '17:20'], ['me', '收到，我先在官网跑一遍。', '17:26']] }, { type: 'composer', placeholder: '发消息…' }] },
      c3: { title: '青柠出行 · Slot', blocks: [{ type: 'bubbles', messages: [['them', '灰度清单已确认，周四放 10%。', '15:02'], ['me', '监控与回滚脚本今天补齐。', '15:08']] }, { type: 'composer', placeholder: '发消息…' }] },
      c4: { title: 'Lumen 运维', blocks: [{ type: 'bubbles', messages: [['them', '季度审计报告已上传，SLA 全绿。', '10:12']] }, { type: 'composer', placeholder: '发消息…' }] },
    }
    return {
      ...base,
      tabs: [['home', '聊天', 'chat'], ['contacts', '联系人', 'user'], ['discover', '发现', 'compass'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'chips', items: ['全部', '未读', '群组'] }, { type: 'list', title: '最近会话', rows: chats }],
        contacts: [{ type: 'list', title: '联系人', rows: [person('周墨白', 0), person('苏见月', 1), person('陈屿', 2), person('林晚舟', 3)].map((x, i) => ({ id: 'u' + i, title: x.name, sub: x.sub, art: x.art })) }],
        discover: [{ type: 'tools', title: '发现', items: [['群组', '加入项目群', 'Group'], ['频道', '订阅更新', 'Channel'], ['附近', '同城协作者', 'Nearby'], ['邀请', '添加成员', 'Invite']] }, { type: 'note', text: '消息以会话列表为主，点击进入推送式聊天。' }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 在线`, art: A('林', 2), stats: [['会话', '12'], ['群组', '4'], ['未读', '3']] }, { type: 'settings', rows: [['消息通知', '提及与私聊', true], ['已读回执', '双向', true], ['媒体自动下载', '仅 Wi-Fi', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 消息领域样板间` }],
      },
      details,
      live: null,
      search: chats.map((c) => ({ id: c.id, title: c.title, sub: c.sub })),
    }
  }

  if (domain === 'video') {
    const titles = [
      { id: 'v1', title: 'Afterlight', sub: '2026 · 剧情 · 1h 48m', art: A('AL', 0) },
      { id: 'v2', title: 'Deep Field', sub: '2025 · 纪录 · 52m', art: A('DF', 1) },
      { id: 'v3', title: 'Night Runner', sub: '2026 · 动作 · 2h 06m', art: A('NR', 2) },
      { id: 'v4', title: 'Glasshouse', sub: '2024 · 悬疑 · 1h 32m', art: A('GH', 3) },
      { id: 'v5', title: 'Low Orbit', sub: '2026 · 科幻 · 1h 58m', art: A('LO', 4) },
    ]
    const details = {}
    for (const t of titles) details[t.id] = { title: t.title, blocks: [{ type: 'hero', kicker: 'FEATURED', title: t.title, sub: t.sub, art: t.art, cta: { label: '播放', live: true } }, { type: 'stats', items: [['匹配', '98%'], ['年份', '2026'], ['时长', '1h 48m']] }, { type: 'note', text: '点击播放进入全屏播放器；海报轨道按 2:3 比例排列。' }] }
    return {
      ...base,
      tabs: [['home', '首页', 'home'], ['search', '搜索', 'search'], ['list', '片单', 'heart'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '本周精选', title: 'Afterlight', sub: '一场关于光与记忆的公路电影', art: A('AL', 0), cta: { label: '播放', live: true } }, { type: 'posters', title: '继续观看', items: titles.slice(0, 4) }, { type: 'posters', title: '新上映', items: titles.slice(1) }],
        search: [{ type: 'chips', items: ['全部', '电影', '剧集', '纪录片'] }, { type: 'posters', title: '热门', items: titles }, { type: 'list', title: '搜索建议', rows: titles.slice(0, 3) }],
        list: [{ type: 'list', title: '我的片单', rows: titles }, { type: 'note', text: '片单保存到本地，点击任一项查看详情与播放。' }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 标准会员`, art: A('林', 2), stats: [['片单', '24'], ['本月', '18h'], ['设备', '3']] }, { type: 'settings', rows: [['自动播放下一集', 'Wi-Fi 下', true], ['下载', '仅 Wi-Fi', true], ['字幕', '简体中文', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 视频领域样板间` }],
      },
      details,
      live: { kind: 'video', title: 'Afterlight', sub: '2026 · 剧情', art: A('AL', 0), duration: 108 },
      search: titles.map((t) => ({ id: t.id, title: t.title, sub: t.sub })),
    }
  }

  if (domain === 'food') {
    const places = [
      { id: 'r1', title: 'Harbor Kitchen', sub: '海鲜 · 2.1 km · ¥¥', meta: '4.8', art: A('HK', 0) },
      { id: 'r2', title: 'Noodle Lab', sub: '拉面 · 0.8 km · ¥', meta: '4.7', art: A('NL', 1) },
      { id: 'r3', title: 'Green Table', sub: '沙拉 · 1.4 km · ¥¥', meta: '4.6', art: A('GT', 2) },
      { id: 'r4', title: 'Morning Bake', sub: '烘焙 · 0.4 km · ¥', meta: '4.9', art: A('MB', 3) },
    ]
    const dishes = [
      { id: 'd1', title: '招牌豚骨拉面', sub: 'Noodle Lab · 32 分钟', meta: '¥48', art: A('拉', 1) },
      { id: 'd2', title: '烤三文鱼碗', sub: 'Harbor Kitchen · 28 分钟', meta: '¥68', art: A('鱼', 0) },
      { id: 'd3', title: '牛油果吐司', sub: 'Morning Bake · 18 分钟', meta: '¥36', art: A('吐', 3) },
    ]
    const details = {}
    for (const r of places) details[r.id] = { title: r.title, blocks: [{ type: 'hero', kicker: 'RESTAURANT', title: r.title, sub: r.sub, art: r.art, cta: { label: '加入购物车', live: false } }, { type: 'stats', items: [['评分', r.meta], ['配送', '28 分钟'], ['起送', '¥35']] }, { type: 'list', title: '热门菜', rows: dishes }] }
    return {
      ...base,
      tabs: [['home', '首页', 'home'], ['search', '搜索', 'search'], ['orders', '订单', 'cart'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '限时', title: '首单减 ¥20', sub: '附近 30 分钟送达 · 免配送费', art: A('20', 0), cta: { label: '去点餐', live: false } }, { type: 'chips', items: ['附近', '评分', '最快', '低价'] }, { type: 'list', title: '附近餐厅', rows: places }, { type: 'rail', title: '热门菜', items: dishes }],
        search: [{ type: 'chips', items: ['全部', '拉面', '咖啡', '烘焙'] }, { type: 'list', title: '搜索结果', rows: places }, { type: 'rail', title: '猜你想吃', items: dishes }],
        orders: [{ type: 'list', title: '进行中', rows: [{ id: 'o1', title: 'Noodle Lab', sub: '2 件 · 骑手已取餐', meta: '12m' }] }, { type: 'list', title: '历史订单', rows: [{ id: 'o2', title: 'Harbor Kitchen', sub: '昨天 · 3 件', meta: '¥126' }, { id: 'o3', title: 'Morning Bake', sub: '10-28 · 2 件', meta: '¥72' }] }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 会员`, art: A('林', 2), stats: [['订单', '36'], ['收藏', '12'], ['积分', '820']] }, { type: 'settings', rows: [['无接触配送', '放门口', true], ['餐具', '不需要', true], ['推送', '订单状态', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 餐饮领域样板间` }],
      },
      details,
      live: null,
      search: [...places, ...dishes].map((x) => ({ id: x.id, title: x.title, sub: x.sub })),
    }
  }

  if (domain === 'travel') {
    const stays = [
      { id: 's1', title: '京都 · 町屋庭院', sub: '京都 · 4.96 · 2 晚', meta: '¥1,280', art: A('京', 0) },
      { id: 's2', title: '里斯本 · 河景公寓', sub: '里斯本 · 4.88 · 3 晚', meta: '¥980', art: A('里', 1) },
      { id: 's3', title: '大理 · 山景小院', sub: '大理 · 4.92 · 2 晚', meta: '¥760', art: A('大', 2) },
    ]
    const details = {}
    for (const s of stays) details[s.id] = { title: s.title, blocks: [{ type: 'hero', kicker: 'STAY', title: s.title, sub: s.sub, art: s.art, cta: { label: '预订', live: false } }, { type: 'stats', items: [['评分', s.sub.split('· ')[1]], ['每晚', s.meta], ['可住', '2 人']] }, { type: 'note', text: '选择日期后进入确认页；此样板间演示目的地与房源浏览。' }] }
    return {
      ...base,
      tabs: [['home', '探索', 'compass'], ['trips', '行程', 'calendar'], ['saved', '收藏', 'heart'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '本周灵感', title: '去有风的地方', sub: '大理 · 3 天 2 晚 · 从 ¥760 起', art: A('大', 2), cta: { label: '查看房源', live: false } }, { type: 'chips', items: ['全部', '住', '体验', '服务'] }, { type: 'rail', title: '目的地', items: stays }, { type: 'list', title: '为你推荐', rows: stays }],
        trips: [{ type: 'list', title: '即将开始', rows: [{ id: 't1', title: '京都 · 町屋庭院', sub: '12-18 至 12-20 · 2 位', meta: '已确认' }] }, { type: 'list', title: '过去行程', rows: [{ id: 't2', title: '里斯本 · 河景公寓', sub: '10-02 至 10-05', meta: '已完成' }] }],
        saved: [{ type: 'list', title: '心愿单', rows: stays }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 旅行者`, art: A('林', 2), stats: [['行程', '8'], ['城市', '14'], ['收藏', '26']] }, { type: 'settings', rows: [['价格提醒', '心愿单降价', true], ['消息', '房东与行程', true], ['语言', '简体中文', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 旅行领域样板间` }],
      },
      details,
      live: null,
      search: stays.map((s) => ({ id: s.id, title: s.title, sub: s.sub })),
    }
  }

  if (domain === 'dating') {
    const profiles = [
      { id: 'p1', title: '林夏', sub: '27 · 产品设计师 · 3 km', art: A('林', 0) },
      { id: 'p2', title: '周野', sub: '29 · 建筑师 · 5 km', art: A('周', 1) },
      { id: 'p3', title: '苏禾', sub: '26 · 摄影师 · 2 km', art: A('苏', 2) },
    ]
    const details = {}
    for (const x of profiles) details[x.id] = { title: x.title, blocks: [{ type: 'hero', kicker: 'PROFILE', title: x.title, sub: x.sub, art: x.art, cta: { label: '喜欢', live: false } }, { type: 'stats', items: [['匹配', '92%'], ['距离', '3 km'], ['共同', '5']] }, { type: 'note', text: '左右滑动或点击按钮；喜欢/跳过会即时反馈。' }] }
    return {
      ...base,
      tabs: [['home', '发现', 'compass'], ['likes', '喜欢', 'heart'], ['messages', '消息', 'chat'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'swipe', item: { id: 'p1', name: '林夏', sub: '27 · 产品设计师 · 3 km', art: A('林', 0) } }, { type: 'rail', title: '今天喜欢', items: profiles }],
        likes: [{ type: 'list', title: '喜欢我的', rows: profiles.map((x) => ({ ...x, meta: '92%' })) }],
        messages: [{ type: 'list', title: '匹配', rows: profiles.map((x) => ({ ...x, sub: '你们已匹配', meta: '刚刚' })) }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 完善度 80%`, art: A('林', 2), stats: [['匹配', '18'], ['喜欢', '42'], ['超级', '3']] }, { type: 'settings', rows: [['仅展示附近', '10 km 内', true], ['隐藏距离', '关闭', false], ['推送', '新匹配', true]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 约会领域样板间` }],
      },
      details,
      live: null,
      search: profiles.map((x) => ({ id: x.id, title: x.title, sub: x.sub })),
    }
  }

  if (domain === 'productivity') {
    const tasks = [
      { id: 't1', title: '确认 Atlas 对账原型', sub: '今天 11:00 · 云栖支付', done: false },
      { id: 't2', title: '复核 ProVision 走查', sub: '今天 14:30 · ProVision', done: false },
      { id: 't3', title: '更新 Slot 灰度清单', sub: '今天 16:00 · 青柠出行', done: true },
      { id: 't4', title: '整理本周交付报告', sub: '明天 · GhollStudio', done: false },
    ]
    const projects = [
      { id: 'pr1', title: 'Atlas 对账模块', sub: '进行中 · 86%', meta: '11-18', art: A('AT', 0) },
      { id: 'pr2', title: 'Slot 排期引擎', sub: '进行中 · 62%', meta: '11-26', art: A('SL', 1) },
      { id: 'pr3', title: '海雾品牌官网', sub: '复核通过 · 92%', meta: '11-15', art: A('海', 2) },
    ]
    const details = {}
    for (const t of tasks) details[t.id] = { title: t.title, blocks: [{ type: 'stats', items: [['状态', t.done ? '完成' : '待办'], ['截止', '今天'], ['项目', 'GhollStudio']] }, { type: 'note', text: '点击任务前的圆环可切换完成；项目页展示进度与里程碑。' }] }
    for (const p of projects) details[p.id] = { title: p.title, blocks: [{ type: 'hero', kicker: 'PROJECT', title: p.title, sub: p.sub, art: p.art }, { type: 'stats', items: [['进度', p.sub.split('· ')[1]], ['截止', p.meta], ['成员', '3']] }, { type: 'list', rows: tasks.slice(0, 3).map((t) => ({ ...t, id: t.id, meta: '' })) }] }
    return {
      ...base,
      tabs: [['home', '今日', 'home'], ['projects', '项目', 'library'], ['inbox', '收件箱', 'chat'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'hero', kicker: '今日', title: '3 项待办', sub: '1 项已完成 · 2 项进行中', art: A('3', 0), cta: { label: '新建任务', live: false } }, { type: 'tasks', title: '今天', rows: tasks }, { type: 'list', title: '最近项目', rows: projects }],
        projects: [{ type: 'list', title: '项目', rows: projects }, { type: 'note', text: '点击项目查看进度与任务；任务卡支持完成切换。' }],
        inbox: [{ type: 'list', title: '收件箱', rows: [{ id: 'i1', title: '周墨白 提到了你', sub: 'Atlas 对账 · 5 分钟前', meta: '新' }, { id: 'i2', title: '海雾官网复核通过', sub: '可以安排上线', meta: '2h' }] }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 设计负责人`, art: A('林', 2), stats: [['今日', '3'], ['本周', '18'], ['项目', '8']] }, { type: 'settings', rows: [['每日回顾', '21:00 提醒', true], ['完成音效', '轻触反馈', true], ['日历同步', '双向', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 效率领域样板间` }],
      },
      details,
      live: null,
      search: [...tasks, ...projects].map((x) => ({ id: x.id, title: x.title, sub: x.sub })),
    }
  }

  if (domain === 'social') {
    const posts = [
      { id: 's1', title: '周墨白', sub: 'Atlas 对账的差异视图定稿了，明天走查。', meta: '09:12', art: A('周', 0) },
      { id: 's2', title: '苏见月', sub: 'Nimbus 看板的指标口径整理成一页纸。', meta: '08:48', art: A('苏', 1) },
      { id: 's3', title: '林晚舟', sub: '海雾官网的设计 Token 已交付，下周上线。', meta: '昨天', art: A('林', 2) },
    ]
    const details = {}
    for (const x of posts) details[x.id] = { title: x.title, blocks: [{ type: 'bubbles', messages: [['them', x.sub, x.meta], ['me', '收到，下午同步。', '刚刚']] }, { type: 'composer', placeholder: '写评论…' }] }
    return {
      ...base,
      tabs: [['home', '动态', 'home'], ['search', '发现', 'search'], ['notifications', '通知', 'bell'], ['me', '我的', 'user']],
      screens: {
        home: [{ type: 'rail', title: '故事', items: posts.map((x) => ({ id: x.id, title: x.title, sub: x.meta, art: x.art })) }, { type: 'list', title: '动态', rows: posts }, { type: 'note', text: '点开动态可进入评论会话；喜欢按钮即时反馈。' }],
        search: [{ type: 'chips', items: ['推荐', '关注', '附近'] }, { type: 'list', title: '发现', rows: posts }],
        notifications: [{ type: 'list', title: '通知', rows: [{ id: 'n1', title: '周墨白 赞了你的动态', sub: '海雾官网 · 2h', meta: '新' }, { id: 'n2', title: '苏见月 关注了你', sub: '设计系统小组', meta: '昨天' }] }],
        me: [{ type: 'profile', name: '林晚舟', sub: `${app} · @wanzhou`, art: A('林', 2), stats: [['动态', '42'], ['关注', '186'], ['粉丝', '1.2k']] }, { type: 'settings', rows: [['私密账号', '仅关注者可见', false], ['评论过滤', '默认开启', true], ['推送', '互动与私信', true]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 社交领域样板间` }],
      },
      details,
      live: null,
      search: posts.map((x) => ({ id: x.id, title: x.title, sub: x.sub })),
    }
  }

  const isAI = AI.has(d.slug) || /chatgpt|claude|gemini|copilot|grok|deepseek|perplexity/i.test(app)
  const tools = isAI
    ? [[app, '开始对话', 'Chat'], ['写作', '长文与提纲', 'Write'], ['代码', '解释与重构', 'Code'], ['分析', '数据与图表', 'Data']]
    : [[app, '打开工作区', 'Home'], ['自动化', '连接外部服务', 'Auto'], ['模板', '从模板开始', 'Tpl'], ['API', '密钥与用量', 'API']]
  const recents = [
    { id: 'x1', title: isAI ? '把这份设计规范变成任务清单' : '本周交付清单', sub: '刚刚 · 12 条消息', meta: '刚刚' },
    { id: 'x2', title: isAI ? '解释 Atlas 对账的差异视图' : 'Atlas 对账字段映射', sub: '昨天 · 8 条消息', meta: '昨天' },
    { id: 'x3', title: isAI ? '写一段发布公告' : '海雾官网 Token 导出', sub: '10-28', meta: '10-28' },
  ]
  const details = {}
  for (const x of recents) details[x.id] = { title: x.title, blocks: [{ type: 'bubbles', messages: [['me', x.title, '10:02'], ['them', isAI ? '已整理成 4 个步骤，可从任务清单开始。' : '已打开工作区，包含 12 个字段与 3 个校验规则。', '10:03']] }, { type: 'composer', placeholder: isAI ? '继续追问…' : '输入命令…' }] }
  return {
    ...base,
    tabs: [['home', '首页', 'home'], ['search', '搜索', 'search'], ['recent', '最近', 'library'], ['me', '我的', 'user']],
    screens: {
      home: [isAI ? { type: 'hero', kicker: 'AI WORKSPACE', title: '今天想做什么？', sub: '写作、代码、分析，或者整理一份交付清单。', art: A('AI', 0) } : { type: 'hero', kicker: 'WORKSPACE', title: `${app}`, sub: base.tagline, art: A(app.slice(0, 2), 0) }, { type: 'prompt', placeholder: isAI ? '描述你的任务…' : '搜索工具与文档…', button: isAI ? '发送' : '打开' }, { type: 'tools', title: '快捷入口', items: tools }, { type: 'list', title: '最近', rows: recents }],
      search: [{ type: 'chips', items: ['全部', '工具', '文档', '模板'] }, { type: 'list', title: '搜索结果', rows: recents }, { type: 'tools', title: '分类', items: tools }],
      recent: [{ type: 'list', title: '最近使用', rows: recents }, { type: 'note', text: '最近记录保存在本地；点击继续会话或打开工具。' }],
      me: [{ type: 'profile', name: '林晚舟', sub: `${app} · 工作区`, art: A('林', 2), stats: [['会话', '24'], ['工具', '8'], ['用量', '62%']] }, { type: 'settings', rows: [['同步', '跨设备', true], ['通知', '任务完成', true], ['高级模型', '按需开启', false]] }, { type: 'note', text: `由 AI agent 依 GOLDEN PROMPT + DESIGN.md「${d.name}」生成 · 工具领域样板间` }],
    },
    details,
    live: null,
    search: recents.map((x) => ({ id: x.id, title: x.title, sub: x.sub })),
  }
}

function renderHTML(d, domain) {
  const cfg = domainConfig(d, domain)
  const p = cfg.palette
  const dark = lum(p.bg) < 0.25
  const radius = d.radius || { card: '12px', control: '8px', badge: '9999px' }
  const font = `${d.fontFamilyBase || 'system-ui, sans-serif'}, 'PingFang SC', 'Microsoft YaHei', sans-serif`
  const tabs = cfg.tabs.map(([id, label, icon]) => ({ id, label, icon }))
  const data = {
    app: cfg.app,
    name: cfg.name,
    domain: cfg.domain,
    tabs,
    screens: cfg.screens,
    details: cfg.details,
    live: cfg.live,
    search: cfg.search,
  }
  return `<!doctype html>
<!--
  GOLDEN PROMPT 产物 · ${esc(cfg.app)} · 规范：${esc(d.name)}
  决策溯源：见 designs/${d.slug}/DESIGN.md（colors / typography / rounded / spacing / components）
  ─ canvas ${esc(p.bg)} · surface ${esc(p.surface)} · text ${esc(p.text)} · primary ${esc(p.primary)}
  ─ 字体 ${esc((d.fontFamilyBase || '').split(',')[0])} · card ${esc(radius.card)} / control ${esc(radius.control)}
  ─ 领域：${esc(cfg.domainLabel)}；共享手机外壳与交互，领域页面按规范气质重建
-->
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="${esc(p.bg)}">
<title>${esc(cfg.app)} · ${esc(d.name)}</title>
<style>
:root{
--bg:${esc(p.bg)};--surface:${esc(p.surface)};--surface2:${esc(p.surface2)};--text:${esc(p.text)};--muted:${esc(p.muted)};--border:${esc(p.border)};
--primary:${esc(p.primary)};--primary-text:${esc(p.primaryText)};--on-primary:${esc(p.onPrimary)};--accent:${esc(p.accent)};--ok:${esc(p.success)};--warn:${esc(p.warning)};--danger:${esc(p.danger)};
--r-card:${esc(radius.card)};--r-ctl:${esc(radius.control)};--r-pill:9999px;
--font:${font};
--shadow:0 12px 32px rgba(0,0,0,${dark ? '.45' : '.12'});
}
*{box-sizing:border-box;margin:0;transition:background-color .18s ease,color .18s ease,border-color .18s ease}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:6px}
input:focus-visible{outline:2px solid var(--primary);outline-offset:0}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
html,body{height:100%}
body{background:${dark ? '#0a0a0a' : '#e9e7e2'};color:var(--text);font:400 15px/1.45 var(--font);display:grid;place-items:center;-webkit-font-smoothing:antialiased}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer}
input{font:inherit;color:inherit;border:0;outline:0;background:none}
::-webkit-scrollbar{width:0;height:0}
.app{position:relative;width:390px;height:844px;display:flex;flex-direction:column;overflow:hidden;background:var(--bg);color:var(--text)}
.icon{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}
.statusbar{display:flex;align-items:center;justify-content:space-between;height:42px;padding:2px 22px 0;font:600 13px/1 var(--font);flex:none}
.statusbar svg{display:block}
.appbar{display:flex;align-items:center;gap:10px;padding:4px 16px 8px;flex:none}
.appbar div{flex:1;min-width:0}
.appbar h1{font:700 26px/1.15 var(--font);letter-spacing:-.4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.appbar .sub{display:block;font:400 11px/1.4 var(--font);color:var(--muted);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.iconbtn{position:relative;display:grid;place-items:center;width:36px;height:36px;border-radius:50%;color:var(--text);flex:none}
.iconbtn::before{content:"";position:absolute;inset:-4px}
.iconbtn:active{background:var(--surface2)}
.avatar{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:color-mix(in srgb,var(--primary) 18%,transparent);color:var(--primary-text);font:700 11px/1 var(--font);flex:none}
.content{position:relative;flex:1;min-height:0;overflow:hidden}
.view{display:none;height:100%;overflow-y:auto;padding-bottom:86px}
.view.on{display:block;animation:vin .18s ease-out}
@keyframes vin{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.tabbar{position:relative;z-index:20;display:grid;grid-template-columns:repeat(4,1fr);grid-auto-flow:column;height:70px;padding:6px 8px 18px;border-top:1px solid var(--border);background:var(--bg);flex:none}
.tab{display:grid;justify-items:center;gap:3px;padding:3px 0;color:var(--muted);font:600 10px/1 var(--font)}
.tab .icon{width:23px;height:23px;stroke-width:1.7}
.tab.on{color:var(--primary-text)}
.tab.on .icon{stroke-width:2.2}
.homebar{position:absolute;bottom:5px;left:50%;transform:translateX(-50%);width:130px;height:5px;border-radius:99px;background:var(--text);opacity:.5}
.section{padding:16px 16px 0}
.section-head{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:10px}
.section-head b{font:700 19px/1.25 var(--font);letter-spacing:-.2px}
.section-head span{font:600 11px/1 var(--font);color:var(--muted)}
.hero{position:relative;margin:0 16px;padding:18px;border-radius:var(--r-card);overflow:hidden;background:linear-gradient(135deg,var(--c1),var(--c2));min-height:170px;display:flex;align-items:flex-end;color:#fff}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.48))}
.hero-art{position:relative;z-index:1;width:84px;height:84px;border-radius:var(--r-ctl);background:rgba(255,255,255,.2);display:grid;place-items:center;font:800 24px/1 var(--font);flex:none;margin-right:14px;backdrop-filter:blur(6px)}
.hero-copy{position:relative;z-index:1;flex:1;min-width:0}
.hero-copy small{font:700 10px/1 var(--font);letter-spacing:1px;opacity:.85;text-transform:uppercase}
.hero-copy b{display:block;font:700 22px/1.15 var(--font);letter-spacing:-.3px;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hero-copy p{font:400 12px/1.4 var(--font);opacity:.85;margin-top:3px}
.hero-btn{position:absolute;right:16px;bottom:16px;z-index:2;min-height:36px;padding:0 14px;border-radius:var(--r-pill);background:var(--primary);color:var(--on-primary);font:700 12px/1 var(--font)}
.stats{display:grid;gap:8px;margin:12px 16px 0;padding:12px;border-radius:var(--r-card);background:var(--surface)}
.stats.cols3{grid-template-columns:repeat(3,1fr)}
.stats small{display:block;font:600 10px/1 var(--font);letter-spacing:.4px;color:var(--muted)}
.stats b{display:block;font:800 19px/1.2 var(--font);font-variant-numeric:tabular-nums;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rail{display:flex;gap:12px;overflow-x:auto;padding:2px 16px 4px}
.tile{flex:none;width:128px;text-align:left}
.art{position:relative;width:100%;aspect-ratio:1;border-radius:var(--r-ctl);overflow:hidden;background:linear-gradient(145deg,var(--c1),var(--c2));display:grid;place-items:center;color:#fff;font:800 20px/1 var(--font)}
.art::before{content:"";position:absolute;width:70%;aspect-ratio:1;border-radius:50%;right:-18%;top:-24%;background:rgba(255,255,255,.16)}
.art span{position:relative;z-index:1}
.tile b{display:block;font:600 14px/1.3 var(--font);margin-top:7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tile small{display:block;font:400 12px/1.3 var(--font);color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.posters{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;padding:2px 16px 4px}
.poster{text-align:left}
.poster .art{aspect-ratio:2/3;font-size:15px}
.poster b{display:block;font:600 12px/1.3 var(--font);margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.poster small{display:block;font:400 10px/1.3 var(--font);color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.list{display:grid;padding:0 16px}
.row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);text-align:left;width:100%}
.row:last-child{border-bottom:0}
.row .art{width:44px;height:44px;aspect-ratio:auto;font-size:13px;flex:none}
.row-main{flex:1;min-width:0}
.row-main b{display:block;font:600 15px/1.3 var(--font);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row-main span{display:block;font:400 12px/1.4 var(--font);color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row-meta{font:600 11px/1.2 var(--font);color:var(--muted);font-variant-numeric:tabular-nums;flex:none;text-align:right}
.chips{display:flex;gap:7px;padding:2px 16px 14px;overflow-x:auto}
.chip{position:relative;flex:none;padding:6px 11px;border-radius:var(--r-pill);background:var(--surface);color:var(--text);font:600 11px/1 var(--font);white-space:nowrap}
.chip::after{content:"";position:absolute;inset:-11px 0}
.ptr{position:fixed;left:50%;top:72px;transform:translate(-50%,-10px);opacity:0;transition:opacity .15s ease,transform .15s ease;pointer-events:none;z-index:70;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:var(--surface);box-shadow:var(--shadow)}
.ptr.on{opacity:1;transform:translate(-50%,0)}
.ptr span{width:16px;height:16px;border-radius:50%;border:2px solid var(--border);border-top-color:var(--primary);display:block}
.chip.on{background:var(--text);color:var(--bg)}
.chart{margin:12px 16px 0;padding:14px;border-radius:var(--r-card);background:var(--surface)}
.chart-head{display:flex;justify-content:space-between;font:600 12px/1.2 var(--font);color:var(--muted);margin-bottom:10px}
.bars{display:flex;align-items:flex-end;gap:6px;height:116px}
.bars div{flex:1;display:grid;grid-template-rows:1fr auto;align-items:end;justify-items:center;gap:4px;height:100%}
.bars i{width:100%;border-radius:3px 3px 0 0;background:var(--surface2)}
.bars i.hot{background:var(--primary)}
.bars span{font:500 9px/1.2 var(--font);color:var(--muted)}
.tools{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;padding:2px 16px}
.tool{display:flex;align-items:center;gap:10px;padding:12px;border-radius:var(--r-ctl);background:var(--surface);text-align:left}
.tool i{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--primary-text);font-style:normal;font:700 11px/1 var(--font);flex:none}
.tool div{min-width:0}
.tool b{display:block;font:600 13px/1.3 var(--font);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tool span{display:block;font:400 10px/1.3 var(--font);color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tasks{display:grid;padding:0 16px}
.task{display:flex;align-items:flex-start;gap:11px;padding:10px 0;border-bottom:1px solid var(--border);text-align:left;width:100%}
.check{width:20px;height:20px;border:1.5px solid var(--muted);border-radius:50%;display:grid;place-items:center;margin-top:1px;flex:none;color:transparent}
.check.done{background:var(--ok);border-color:var(--ok);color:#fff}
.check .icon{width:11px;height:11px;stroke-width:3}
.task.done .row-main b{color:var(--muted);text-decoration:line-through}
.swipe{margin:4px 16px;position:relative}
.swipe .art{aspect-ratio:3/4;border-radius:18px;font-size:34px;justify-items:start;align-items:end;padding:18px;display:flex;flex-direction:column;justify-content:flex-end}
.swipe-name{font:800 26px/1.1 var(--font);color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.4)}
.swipe-sub{font:500 13px/1.4 var(--font);color:rgba(255,255,255,.86);margin-top:3px}
.swipe-actions{display:flex;justify-content:center;gap:14px;margin-top:14px}
.swipe-actions button{width:52px;height:52px;border-radius:50%;background:var(--surface);display:grid;place-items:center;color:var(--text)}
.swipe-actions .pass{color:var(--danger)}
.swipe-actions .like{background:var(--primary);color:var(--on-primary)}
.profile{display:flex;align-items:center;gap:12px;padding:6px 16px 12px}
.profile .avatar{width:62px;height:62px;font-size:20px}
.profile b{display:block;font:700 23px/1.2 var(--font)}
.profile span{font:400 12px/1.4 var(--font);color:var(--muted)}
.profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 16px 12px;padding:12px;border-radius:var(--r-card);background:var(--surface);text-align:center}
.profile-stats b{display:block;font:800 19px/1.1 var(--font);font-variant-numeric:tabular-nums}
.profile-stats span{font:400 10px/1.3 var(--font);color:var(--muted)}
.settings{display:grid;margin:0 16px;border:1px solid var(--border);border-radius:var(--r-card);overflow:hidden}
.setting{display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid var(--border);text-align:left}
.setting:last-child{border-bottom:0}
.setting-main{flex:1;min-width:0}
.setting-main b{display:block;font:600 14px/1.35 var(--font)}
.setting-main span{display:block;font:400 11px/1.4 var(--font);color:var(--muted);margin-top:2px}
.switch{width:44px;height:26px;border-radius:99px;background:var(--surface2);position:relative;flex:none;transition:background .18s}
.switch::before{content:"";position:absolute;inset:-9px 0}
.switch::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.2);transition:transform .18s}
.switch.on{background:var(--primary)}
.switch.on::after{transform:translateX(18px)}
.note{margin:16px;padding:12px 14px;border-radius:var(--r-ctl);background:var(--surface);font:400 11px/1.6 var(--font);color:var(--muted);text-align:center}
.bubbles{display:flex;flex-direction:column;gap:8px;padding:4px 0 10px}
.bubble{max-width:82%;padding:9px 12px;border-radius:14px;background:var(--surface);font:400 14px/1.45 var(--font);color:var(--text)}
.bubble.me{align-self:flex-end;background:var(--primary);color:var(--on-primary);border-bottom-right-radius:4px}
.bubble.them{align-self:flex-start;border-bottom-left-radius:4px}
.bubble time{display:block;margin-top:2px;font:400 9px/1.3 var(--font);opacity:.65}
.composer{display:flex;gap:8px;padding-top:10px;border-top:1px solid var(--border)}
.composer input{flex:1;min-width:0;height:40px;padding:0 12px;border-radius:var(--r-ctl);background:var(--surface);color:var(--text);font:400 14px/1.3 var(--font)}
.composer button{height:40px;padding:0 14px;border-radius:var(--r-pill);background:var(--primary);color:var(--on-primary);font:700 12px/1 var(--font);flex:none}
.prompt{display:flex;gap:8px;margin:12px 16px 0;padding:8px;border:1px solid var(--border);border-radius:calc(var(--r-card) + 4px);background:var(--surface)}
.prompt input{flex:1;min-width:0;height:38px;padding:0 10px;font:400 13px/1.3 var(--font);color:var(--text)}
.prompt button{padding:0 14px;border-radius:var(--r-ctl);background:var(--primary);color:var(--on-primary);font:700 12px/1 var(--font);flex:none}
.sheet{position:absolute;inset:0;z-index:60;display:flex;align-items:flex-end;background:rgba(0,0,0,.48);opacity:0;visibility:hidden;transition:opacity .22s,visibility .22s}
.sheet.on{opacity:1;visibility:visible}
.sheet-panel{width:100%;max-height:84%;display:flex;flex-direction:column;background:var(--bg);border-radius:18px 18px 0 0;box-shadow:var(--shadow);transform:translateY(100%);transition:transform .28s cubic-bezier(.32,.72,0,1)}
.sheet.on .sheet-panel{transform:none}
.grab{width:36px;height:4px;border-radius:99px;background:var(--border);margin:8px auto 2px;flex:none}
.sheet-head{display:flex;align-items:center;justify-content:space-between;padding:6px 16px 8px;flex:none}
.sheet-head b{font:700 18px/1.3 var(--font)}
.sheet-body{flex:1;min-height:0;overflow-y:auto;padding:0 16px 24px}
.searchview{position:absolute;inset:0;z-index:50;display:flex;flex-direction:column;background:var(--bg);opacity:0;visibility:hidden;transition:opacity .16s,visibility .16s}
.searchview.on{opacity:1;visibility:visible}
.searchbar{display:flex;align-items:center;gap:8px;margin:46px 16px 10px;padding:0 12px;height:42px;border-radius:var(--r-ctl);background:var(--surface);color:var(--muted);flex:none}
.searchbar input{flex:1;min-width:0;color:var(--text);font:400 14px/1.3 var(--font)}
.search-results{flex:1;overflow-y:auto}
.live{position:absolute;inset:0;z-index:70;display:none;flex-direction:column;color:#fff;padding:50px 22px 26px}
.live.on{display:flex}
.live-bg{position:absolute;inset:0;background:linear-gradient(160deg,var(--c1),var(--c2));opacity:.92}
.live-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.75))}
.live-head,.live-main,.live-actions{position:relative;z-index:1}
.live-head{display:flex;justify-content:space-between;align-items:center;font:700 10px/1 var(--font);letter-spacing:1.2px}
.live-main{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.live-art{width:190px;height:190px;border-radius:16px;background:rgba(255,255,255,.18);display:grid;place-items:center;font:800 42px/1 var(--font);margin-bottom:22px}
.live-main h2{font:700 22px/1.2 var(--font)}
.live-main p{font:400 13px/1.4 var(--font);opacity:.8;margin-top:4px}
.live-time{font:900 46px/1 var(--font);font-variant-numeric:tabular-nums;margin:18px 0 0}
.live-progress{width:100%;height:4px;border-radius:99px;background:rgba(255,255,255,.25);margin-top:18px;overflow:hidden}
.live-progress i{display:block;height:100%;width:0;background:#fff;border-radius:99px}
.live-actions{display:flex;justify-content:center;gap:18px;padding-top:22px}
.live-actions button{width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.16);color:#fff;display:grid;place-items:center}
.live-actions .main{background:#fff;color:#111;width:66px;height:66px}
.live-actions .icon{width:24px;height:24px;fill:currentColor;stroke:none}
.toast{position:absolute;left:50%;bottom:92px;z-index:90;max-width:calc(100% - 40px);padding:9px 14px;border-radius:var(--r-ctl);background:var(--text);color:var(--bg);font:600 12px/1.4 var(--font);text-align:center;opacity:0;transform:translate(-50%,8px);transition:opacity .18s,transform .18s;pointer-events:none}
.toast.on{opacity:1;transform:translate(-50%,0)}
@media(max-width:430px){.app{width:100vw;height:100dvh}}
@media(min-width:431px){body{padding:24px}.app{border-radius:32px;box-shadow:0 40px 90px rgba(0,0,0,${dark ? '.6' : '.24'})}}
</style>
</head>
<body>
<svg style="position:absolute;width:0;height:0" aria-hidden="true">
${iconSet.map((n) => `<symbol id="i-${n}" viewBox="0 0 24 24">${{ home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>', search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>', library: '<path d="M4 5v14M8 5v14M12 5v14M16 5v14"/><path d="m19 6 1.5 12"/>', user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.6 3.5-5.5 7-5.5s6.2 1.9 7 5.5"/>', chart: '<path d="M5 20V10M12 20V4M19 20v-7"/>', chat: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"/>', calendar: '<rect x="4" y="5.5" width="16" height="14" rx="2.5"/><path d="M4 10h16M8 3.5v4M16 3.5v4"/>', play: '<path d="M8 5.5v13l11-6.5z"/>', cart: '<path d="M4 5h2l2.2 10.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H7"/><circle cx="10" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/>', compass: '<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>', heart: '<path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.6-7 9-7 9z"/>', check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>', tool: '<path d="M14.5 6.5a4 4 0 0 0-5.2 5.2L4 17v3h3l5.3-5.3a4 4 0 0 0 5.2-5.2l-2.3 2.3-2.7-2.7z"/>', bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>' }[n]}</symbol>`).join('\n')}
<symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
<symbol id="i-pause" viewBox="0 0 24 24"><rect x="7" y="5" width="3.6" height="14" rx="1"/><rect x="13.4" y="5" width="3.6" height="14" rx="1"/></symbol>
<symbol id="i-stop" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/></symbol>
</svg>
<div class="app" id="app">
  <div class="statusbar"><span>9:41</span><span style="display:flex;gap:5px;align-items:center"><svg width="17" height="11" viewBox="0 0 17 12"><rect x="0" y="7" width="3" height="5" rx=".6" fill="currentColor"/><rect x="4.5" y="5" width="3" height="7" rx=".6" fill="currentColor"/><rect x="9" y="2.5" width="3" height="9.5" rx=".6" fill="currentColor"/><rect x="13.5" y="0" width="3" height="12" rx=".6" fill="currentColor"/></svg><svg width="16" height="11" viewBox="0 0 16 12"><path d="M8 11.2 5.2 8.4a4 4 0 0 1 5.6 0zM3.2 6.4 1 4.2a9.9 9.9 0 0 1 14 0l-2.2 2.2a6.7 6.7 0 0 0-9.6 0z" fill="currentColor"/></svg><svg width="24" height="11" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="16" height="8" rx="1.8" fill="currentColor"/></svg></span></div>
  <header class="appbar"><div><h1 id="title"></h1><span class="sub" id="sub"></span></div><button class="iconbtn" id="searchBtn" aria-label="搜索"><svg class="icon"><use href="#i-search"/></svg></button><span class="avatar" id="avatar">${esc(cfg.app.slice(0, 1))}</span></header>
  <main class="content" id="content"></main>
  <nav class="tabbar" id="tabbar" role="tablist" aria-label="主导航"></nav>
  <div class="sheet" id="sheet"><div class="sheet-panel"><div class="grab"></div><div class="sheet-head"><b id="sheetTitle"></b><button class="iconbtn" id="sheetClose" aria-label="关闭"><svg class="icon"><use href="#i-close"/></svg></button></div><div class="sheet-body" id="sheetBody"></div></div></div>
  <div class="searchview" id="searchview"><div class="searchbar"><svg class="icon" style="width:18px;height:18px"><use href="#i-search"/></svg><input id="searchInput" placeholder="搜索 ${esc(cfg.domainLabel)} 内容" autocomplete="off"><button class="iconbtn" id="searchClose" aria-label="关闭"><svg class="icon"><use href="#i-close"/></svg></button></div><div class="search-results" id="searchResults"></div></div>
  <div class="live" id="live"><div class="live-bg" id="liveBg"></div><div class="live-head"><span id="liveKicker">LIVE</span><button class="iconbtn" id="liveClose" aria-label="关闭"><svg class="icon"><use href="#i-close"/></svg></button></div><div class="live-main"><div class="live-art" id="liveArt"></div><h2 id="liveTitle"></h2><p id="liveSub"></p><div class="live-time" id="liveTime"></div><div class="live-progress"><i id="liveFill"></i></div></div><div class="live-actions"><button id="livePlay" aria-label="播放/暂停"><svg class="icon"><use href="#i-pause"/></svg></button><button class="main" id="liveMain" aria-label="结束"><svg class="icon"><use href="#i-stop"/></svg></button></div></div>
  <div class="toast" id="toast" role="status"></div>
</div>
<script>
${RUNTIME_JS.replace('__APP__', JSON.stringify(data))}
</script>
</body>
</html>
`
}

const only = process.argv.find((a) => a.startsWith('--only='))?.slice(7)
const force = process.argv.includes('--force')
const BENCHMARKS = new Set(['ios-spotify', 'ios-strava'])
const mobile = INDEX.filter((d) => d.platform === 'mobile')
let made = 0
for (const d of mobile) {
  if (BENCHMARKS.has(d.slug)) continue
  if (only && d.slug !== only) continue
  const out = join(ROOT, 'public/generated', d.slug, 'index.html')
  if (existsSync(out) && !force) continue
  const domain = domainOf(d)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, renderHTML(d, domain))
  made++
  if (only) console.log(`${d.slug} -> ${domain} -> ${out}`)
}
console.log(`generated ${made} / ${mobile.length} mobile samples`)
