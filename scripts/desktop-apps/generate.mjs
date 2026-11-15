#!/usr/bin/env node
// 桌面端样板间：把 platform=desktop 的规范渲染成桌面窗口壳（标题栏 / 侧栏 / 主区 / 检查器）。
// 用法：node scripts/desktop-apps/generate.mjs [--only=slug]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const INDEX = JSON.parse(readFileSync(join(ROOT, 'public/design-index.json'), 'utf8'))
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').split('=')[1]

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

function palette(d) {
  const r = d.roles
  const bg = r.bg || '#ffffff'
  const text = r.text || (lum(bg) < 0.2 ? '#ffffff' : '#111111')
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
    onPrimary,
    accent: r.accent || r.primary || text,
    success: readable(r.success || '#16a34a', bg, text, 3),
    warning: readable(r.warning || '#d97706', bg, text, 3),
    danger: readable(r.danger || '#dc2626', bg, text, 3),
  }
}

const ICONS = {
  file: '<path d="M6 3h7l5 5v13H6z"/><path d="M13 3v5h5"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
  chat: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4 4v-4h-.5A2.5 2.5 0 0 1 4 13.5z"/>',
  code: '<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="m7 9 3 3-3 3M13 15h4"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
}

const sprite = Object.entries(ICONS).map(([n, path]) => `<symbol id="i-${n}" viewBox="0 0 24 24">${path}</symbol>`).join('')
const icon = (n, cls = 'ic') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`

const nav = (groups) => groups.map(([title, items]) => `
    <div class="nav-group">
      <span class="nav-title">${esc(title)}</span>
      ${items.map(([label, ico, on, badge]) => `<button class="nav-item${on ? ' on' : ''}">${icon(ico)}<span>${esc(label)}</span>${badge ? `<em>${esc(badge)}</em>` : ''}</button>`).join('')}
    </div>`).join('')

const kv = (rows) => `<dl class="kv">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`

const toolbar = (left, right = '') => `<div class="toolbar"><div class="tb-left">${left}</div><div class="tb-right">${right}</div></div>`

const btn = (label, kind = '') => `<button class="btn ${kind}">${esc(label)}</button>`

const rule = '<span class="tb-rule"></span>'

const LAYOUTS = {
  figma: (p) => ({
    side: nav([
      ['文件', [['设计文件', 'file', true], ['团队库', 'grid'], ['最近打开', 'layers']]],
      ['图层', [['Hero / 主视觉', 'grid', true], ['导航栏', 'layers'], ['内容区', 'layers'], ['页脚', 'layers']]],
    ]),
    main: `
      ${toolbar(`${btn('移动', 'on')}${btn('框架')}${btn('文字')}${rule}${btn('缩放 100%')}`, `${btn('分享', 'primary')}`)}
      <div class="canvas">
        <div class="board">
          <div class="board-bar"><span>GhollStudio / 首页</span><span>1440 × 900</span></div>
          <div class="board-body">
            <span class="ph ph-hero"></span>
            <span class="ph ph-row"><i></i><i></i><i></i></span>
            <span class="ph ph-text"></span>
            <span class="ph ph-text short"></span>
            <span class="sel"><em>Hero / 主视觉</em></span>
          </div>
        </div>
      </div>`,
    right: `<h3 class="panel-title">设计</h3>${kv([['填充', p.primary], ['圆角', '12'], ['字体', 'Display / 32'], ['不透明度', '100%']])}
      <h3 class="panel-title">自动布局</h3>${kv([['方向', '纵向'], ['间距', '24'], ['内边距', '32 / 40']])}`,
  }),

  notion: () => ({
    side: nav([
      ['工作区', [['快速笔记', 'file', true], ['路线图', 'grid'], ['会议记录', 'file'], ['素材库', 'layers']]],
      ['收藏', [['设计评审', 'check'], ['周报', 'file']]],
    ]),
    main: `
      <div class="doc">
        <span class="doc-crumb">工作区 / 设计规范</span>
        <h1>GhollStudio 设计规范</h1>
        <p class="doc-lead">同一份提示词，在桌面端被重写成一套工具型界面：密度更高、信息更密、操作更快。</p>
        <div class="callout">桌面端的首要任务是“少移动眼睛”：侧栏固定、主区可滚、检查器常驻。</div>
        <h2>本周目标</h2>
        <ul class="todo">
          <li class="done"><span class="box">✓</span>组件令牌对齐</li>
          <li class="done"><span class="box">✓</span>深浅外观切换</li>
          <li><span class="box"></span>命令面板接入</li>
          <li><span class="box"></span>键盘快捷键表</li>
        </ul>
        <h2>排版</h2>
        <p>正文 13–14px，标题 22–32px；行高 1.5，表格行高 40。所有数字使用等宽数字，方便扫读。</p>
        <h2>密度</h2>
        <p>桌面端一屏能看到 3 倍于手机的信息：侧栏 236px、检查器 260px、主区自适应。窄屏小于 900px 时隐藏检查器。</p>
        <h2>键盘</h2>
        <p>⌘K 打开命令面板，⌘N 新建，⌘⇧L 切换深浅外观；所有焦点环统一 2px primary。</p>
      </div>`,
  }),

  'linear-app': (p) => ({
    side: nav([
      ['工作台', [['我的事务', 'check', true, '8'], ['收件箱', 'mail', false, '3'], ['路线图', 'grid']]],
      ['团队', [['前端', 'code'], ['设计', 'layers'], ['增长', 'grid']]],
    ]),
    main: `
      ${toolbar(`${btn('全部事务', 'on')}${btn('我的')}${rule}${icon('search')}${btn('筛选')}`, btn('新建事务', 'primary'))}
      <table class="issues">
        <thead><tr><th>状态</th><th>标题</th><th>负责人</th><th>优先级</th><th>更新</th></tr></thead>
        <tbody>
          ${[
            ['进行中', '侧栏在窄窗口下折叠', '林晚舟', '高', '2 分钟前'],
            ['待评审', '命令面板键盘导航', '周墨白', '中', '1 小时前'],
            ['已完成', '表格列宽记忆', '苏见月', '低', '昨天'],
            ['进行中', '检查器空态文案', '陈屿', '中', '昨天'],
            ['阻塞', '深浅色切换闪烁', '林晚舟', '紧急', '2 天前'],
            ['待评审', '键盘快捷键表补全', '陈屿', '低', '2 天前'],
            ['进行中', '空态插画替换', '苏见月', '低', '3 天前'],
            ['已完成', '表格粘性表头', '周墨白', '中', '3 天前'],
            ['进行中', '侧栏拖拽调宽', '林晚舟', '中', '4 天前'],
            ['已完成', '深浅外观同步状态栏', '陈屿', '低', '5 天前'],
          ].map(([st, title, who, pri, when]) => `<tr class="${title === '侧栏在窄窗口下折叠' ? 'is-selected' : ''}"><td><span class="state" style="--c:${st === '已完成' ? p.success : st === '阻塞' ? p.danger : p.warning}">${esc(st)}</span></td><td class="t-title">${esc(title)}</td><td>${esc(who)}</td><td>${esc(pri)}</td><td class="t-muted">${esc(when)}</td></tr>`).join('')}
        </tbody>
      </table>`,
    right: `<h3 class="panel-title">选中事务</h3><b class="panel-strong">侧栏在窄窗口下折叠</b>
      ${kv([['状态', '进行中'], ['负责人', '林晚舟'], ['优先级', '高'], ['周期', '第 46 周']])}
      <h3 class="panel-title">描述</h3>
      <p class="panel-body">窗口宽度小于 1100px 时，侧栏折叠为 56px 图标条；检查器整块隐藏，主区占满剩余宽度。</p>
      <h3 class="panel-title">活动</h3>
      <ul class="feed"><li>林晚舟 修改了状态</li><li>周墨白 添加了标签 界面</li><li>苏见月 上传了截图</li><li>陈屿 关联了设计规范</li><li>林晚舟 调整了优先级</li><li>周墨白 移动到第 46 周</li></ul>`,
  }),

  raycast: (p) => ({
    launcher: `
      <div class="launcher">
        <div class="cmd">
          <div class="cmd-input">${icon('search')}<span>搜索应用与命令…</span><kbd>⌘K</kbd></div>
          <div class="cmd-group">建议</div>
          ${[['打开 GhollStudio', '⌘ 1', 'grid'], ['新建事务', '⌘ N', 'plus'], ['切换深浅外观', '⌘ ⇧ L', 'layers']].map(([t, k, ic]) => `<button class="cmd-row">${icon(ic)}<span>${esc(t)}</span><kbd>${esc(k)}</kbd></button>`).join('')}
          <div class="cmd-group">最近文件</div>
          ${[['设计规范 · notion', '', 'file'], ['第 46 周路线图', '', 'grid']].map(([t, k, ic]) => `<button class="cmd-row">${icon(ic)}<span>${esc(t)}</span><kbd>${esc(k)}</kbd></button>`).join('')}
        </div>
      </div>`,
  }),

  slack: () => ({
    side: nav([
      ['GhollStudio', [['首页', 'grid', false], ['私信', 'chat', false, '4'], ['活动', 'check']]],
      ['频道', [['#设计', 'chat', true], ['#前端', 'code'], ['#发布', 'terminal'], ['#招聘', 'mail']]],
    ]),
    main: `
      ${toolbar(`<b class="ch">#设计</b><span class="ch-sub">18 位成员</span>`, `${icon('search')}${btn('成员')}`)}
      <div class="thread">
        ${[['苏见月', '09:12', '桌面端的检查器我按规范改成常驻 260px 了，窄屏折叠。'], ['周墨白', '09:15', '命令面板的键盘导航加了吗？⌘K 进去应该能直接回车。'], ['林晚舟', '09:20', '加了，顺带把焦点环统一成 2px primary。'], ['陈屿', '09:24', '表格行高统一到 40 了，数字都改成等宽。'], ['周墨白', '09:31', '状态栏那行副本要不要跟着深浅色走？'], ['苏见月', '09:33', '要，已经跟 surface2 对齐了。']].map(([who, t, msg]) => `
          <article class="msg"><span class="ava">${esc(who.slice(0, 1))}</span><div><header><b>${esc(who)}</b><time>${esc(t)}</time></header><p>${esc(msg)}</p></div></article>`).join('')}
      </div>
      <form class="composer"><input placeholder="发消息到 #设计…"><button class="btn primary">发送</button></form>`,
  }),

  warp: (p) => ({
    side: nav([['会话', [['gholl/design', 'terminal', true], ['api-gateway', 'terminal'], ['infra', 'terminal']]]]),
    main: `
      ${toolbar(`<span class="branch">main</span><span class="ch-sub">~/gholl/design</span>`, btn('新会话'))}
      <div class="term">
        <div class="tblock"><code><span class="prompt">❯</span> npm run build</code></div>
        <pre class="tout">tsc --noEmit
vite build
✓ built in 1.43s
postbuild · 279 个 meta 壳</pre>
        <div class="tblock"><code><span class="prompt">❯</span> npm run design:lint</code></div>
        <pre class="tout">共校验 279 份规范：0 errors，6485 warnings</pre>
        <div class="tblock"><code><span class="prompt">❯</span> git status --short</code></div>
        <pre class="tout"> M scripts/desktop-apps/generate.mjs
 M public/generated/figma/index.html
?? .omo/</pre>
        <div class="tblock"><code><span class="prompt">❯</span> <span class="caret"></span></code></div>
      </div>`,
    status: `<span>${esc(p.accent)}</span><span>zsh · node 22</span>`,
  }),

  superhuman: () => ({
    side: nav([['邮箱', [['收件箱', 'mail', true, '12'], ['提醒', 'check'], ['已发送', 'mail']]], ['标签', [['设计评审', 'file'], ['招聘', 'chat']]]]),
    main: `
      ${toolbar(`${btn('收件箱', 'on')}${btn('未读 12')}${rule}${icon('search')}`, btn('撰写', 'primary'))}
      <div class="mail-split">
        <div class="mail-list">
          ${[['林晚舟', '桌面端检查器宽度确认', '按 260px 常驻，窄屏折叠…', '09:12', true], ['周墨白', '命令面板快捷键表', '⌘K / ⌘N / ⌘⇧L 三个先落地…', '08:40', true], ['苏见月', '第 46 周周报', '本周完成 8 项，1 项阻塞…', '昨天', false], ['陈屿', '表格列宽的记忆策略', '按 slug 存 sessionStorage…', '昨天', false], ['周墨白', '缩略图重拍清单', '8 个桌面页需要重拍…', '周一', false]].map(([who, subj, prev, t, unread]) => `
            <button class="mail-row${unread ? ' unread' : ''}${who === '林晚舟' ? ' active' : ''}"><span class="dot"></span><div><b>${esc(who)}</b><span class="m-subj">${esc(subj)}</span><p>${esc(prev)}</p></div><time>${esc(t)}</time></button>`).join('')}
        </div>
        <div class="mail-read">
          <span class="doc-crumb">收件箱 / 林晚舟</span>
          <h2>桌面端检查器宽度确认</h2>
          <p class="doc-lead">按规范把检查器固定为 260px，窗口小于 1100px 时折叠为图标条。</p>
          <p>另外两处细节：表格行高统一 40px；所有数字使用等宽字体，扫读更快。</p>
          <p>窄窗口下检查器整块隐藏，用 ⌘⇧I 临时唤起，避免挤压主区。切回宽屏时恢复上一次的宽度。</p>
          <div class="callout">侧栏、检查器、状态栏的底色统一取 surface2，主区取 surface，画布取 bg。</div>
          <div class="mail-actions">${btn('回复', 'primary')}${btn('稍后')}</div>
        </div>
      </div>`,
  }),

  cursor: () => ({
    side: nav([['资源管理器', [['src', 'code', false], ['GalleryPage.tsx', 'file', true], ['router.ts', 'file'], ['scripts', 'terminal'], ['designs', 'file']]]]),
    main: `
      ${toolbar(`<span class="ch-sub">src/pages/GalleryPage.tsx</span>`, `${btn('运行')}${btn('AI', 'on')}`)}
      <div class="editor">
        <ol class="gutter">${Array.from({ length: 12 }, (_, i) => `<li>${i + 1}</li>`).join('')}</ol>
        <pre class="code"><span class="k">const</span> <span class="v">galleryMemory</span> = {
  <span class="p">category</span>: <span class="s">'all'</span>,
  <span class="p">tag</span>: <span class="k">null</span>,
  <span class="p">query</span>: <span class="s">''</span>,
  <span class="p">shown</span>: <span class="n">48</span>,
  <span class="p">scrollY</span>: <span class="n">0</span>,
}

<span class="k">export function</span> <span class="f">navigate</span>(to, opts) {
  <span class="k">if</span> (opts?.replace) history.<span class="f">replaceState</span>(<span class="k">null</span>, <span class="s">''</span>, to)
  <span class="k">else</span> history.<span class="f">pushState</span>(<span class="k">null</span>, <span class="s">''</span>, to)
  window.<span class="f">dispatchEvent</span>(<span class="k">new</span> <span class="f">PopStateEvent</span>(<span class="s">'popstate'</span>))
}</pre>
      </div>`,
    right: `<h3 class="panel-title">AI 对话</h3>
      <div class="ai">
        <p class="ai-user">把画廊的筛选状态存到组件之外，返回时复原。</p>
        <p class="ai-bot">已用模块级 <code>galleryMemory</code> 保存 category / tag / query / shown / scrollY，并在挂载后用 rAF 复原滚动位置。</p>
        <p class="ai-user">滚动恢复会不会和浏览器的自动恢复冲突？</p>
        <p class="ai-bot">不会：pushState 进入新条目时浏览器不会恢复滚动，只有 popstate 会；两者取值一致，rAF 之后以我们的值为准。</p>
      </div>
      <form class="composer"><input placeholder="继续提问…"><button class="btn primary">发送</button></form>`,
  }),
}

const PRODUCT = {
  figma: { label: 'Figma', kind: '设计协作', status: '已同步 · 云端文件' },
  notion: { label: 'Notion', kind: '文档工作区', status: '已保存' },
  'linear-app': { label: 'Linear', kind: '事务追踪', status: '8 个进行中' },
  raycast: { label: 'Raycast', kind: '启动器', status: '命令面板' },
  slack: { label: 'Slack', kind: '团队消息', status: '4 条未读' },
  warp: { label: 'Warp', kind: '终端', status: '构建通过' },
  superhuman: { label: 'Superhuman', kind: '邮件', status: '12 封未读' },
  cursor: { label: 'Cursor', kind: '代码编辑器', status: 'TypeScript' },
}

function page(d) {
  const p = palette(d)
  const meta = PRODUCT[d.slug] || { label: d.name, kind: '桌面工具', status: '' }
  const built = LAYOUTS[d.slug](p)
  const dark = lum(p.bg) < 0.25
  const font = `${d.fontFamilyBase || 'system-ui, sans-serif'}, 'PingFang SC', 'Microsoft YaHei', sans-serif`
  const radius = d.radius || { card: '12px', control: '8px', badge: '9999px' }
  const hasSide = Boolean(built.side)
  const cols = [hasSide && '236px', '1fr', built.right && '260px'].filter(Boolean).join(' ')

  return `<!doctype html>
<!--
  GOLDEN PROMPT 产物 · ${esc(meta.label)} · 规范：${esc(d.name)}
  决策溯源：见 designs/${d.slug}/DESIGN.md
  ─ canvas ${esc(p.bg)} · surface ${esc(p.surface)} · text ${esc(p.text)} · primary ${esc(p.primary)}
-->
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${esc(p.bg)}">
<title>${esc(meta.label)} · ${esc(d.name)}</title>
<style>
:root{
--bg:${esc(p.bg)};--surface:${esc(p.surface)};--surface2:${esc(p.surface2)};--text:${esc(p.text)};--muted:${esc(p.muted)};--border:${esc(p.border)};
--primary:${esc(p.primary)};--on-primary:${esc(p.onPrimary)};--accent:${esc(p.accent)};--ok:${esc(p.success)};--warn:${esc(p.warning)};--danger:${esc(p.danger)};
--r-card:${esc(radius.card)};--r-ctl:${esc(radius.control)};
--font:${font};
--shadow:0 24px 64px rgba(0,0,0,${dark ? '.55' : '.18'});
}
*{box-sizing:border-box;margin:0}
html,body{height:100%}
body{background:${dark ? mix(p.bg, '#ffffff', 0.04) : mix(p.bg, '#000000', 0.08)};color:var(--text);font-family:var(--font);font-size:13px;-webkit-font-smoothing:antialiased;display:grid;place-items:center;padding:24px}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:6px}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
button{font:inherit;color:inherit;cursor:pointer}
svg.ic{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex:none}
.win{width:min(1180px,100%);height:min(760px,calc(100vh - 48px));background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);box-shadow:var(--shadow);display:flex;flex-direction:column;overflow:hidden}
.titlebar{display:flex;align-items:center;gap:10px;height:44px;padding:0 14px;border-bottom:1px solid var(--border);background:var(--surface2);flex:none}
.lights{display:flex;gap:6px}
.lights i{width:11px;height:11px;border-radius:50%;background:var(--border)}
.lights i:nth-child(1){background:#ff5f57}.lights i:nth-child(2){background:#febc2e}.lights i:nth-child(3){background:#28c840}
.win-title{font-size:12px;color:var(--muted);margin-left:6px}
.win-title b{color:var(--text)}
.win-tools{margin-left:auto;display:flex;gap:6px;align-items:center;color:var(--muted);font-size:11px}
.body{display:grid;grid-template-columns:${cols};min-height:0;flex:1}
.side{border-right:1px solid var(--border);background:var(--surface2);padding:10px 8px;overflow:auto}
.nav-group{margin-bottom:14px}
.nav-title{display:block;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:4px 8px}
.nav-item{display:flex;align-items:center;gap:8px;width:100%;height:32px;padding:0 8px;border:0;background:transparent;border-radius:var(--r-ctl);color:var(--muted);font-size:12.5px;text-align:left}
.nav-item:hover{background:color-mix(in srgb,var(--text) 6%,transparent);color:var(--text)}
.nav-item.on{background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text);font-weight:600}
.nav-item em{margin-left:auto;font-style:normal;font-size:10px;color:var(--muted)}
.main{min-width:0;display:flex;flex-direction:column;overflow:hidden}
.toolbar{display:flex;align-items:center;gap:6px;height:46px;padding:0 12px;border-bottom:1px solid var(--border);flex:none}
.tb-left{display:flex;align-items:center;gap:6px}
.tb-right{margin-left:auto;display:flex;align-items:center;gap:6px}
.tb-rule{width:1px;height:18px;background:var(--border);margin:0 4px}
.btn{height:28px;padding:0 10px;white-space:nowrap;flex:none;border:1px solid var(--border);background:var(--surface);border-radius:var(--r-ctl);font-size:12px;color:var(--muted)}
.btn:hover{color:var(--text);border-color:color-mix(in srgb,var(--text) 24%,var(--border))}
.btn.on{background:color-mix(in srgb,var(--primary) 16%,transparent);border-color:transparent;color:var(--text);font-weight:600}
.btn.primary{background:var(--primary);color:var(--on-primary);border-color:transparent;font-weight:600}
.kv{display:grid;gap:6px;padding:0 4px}
.kv>div{display:flex;justify-content:space-between;gap:12px;font-size:12px}
.kv dt{color:var(--muted)}
.kv dd{font-variant-numeric:tabular-nums}
.panel-title{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:14px 4px 6px}
.panel-strong{display:block;padding:0 4px 8px;font-size:13px;line-height:1.4}
.panel-body{padding:0 4px;font-size:12px;line-height:1.65;color:var(--muted)}
.right{border-left:1px solid var(--border);background:var(--surface2);padding:10px;overflow:auto}
.statusbar{height:26px;display:flex;align-items:center;gap:12px;padding:0 12px;border-top:1px solid var(--border);background:var(--surface2);color:var(--muted);font-size:11px;flex:none}
.statusbar span:last-child{margin-left:auto}
.canvas{flex:1;overflow:auto;padding:28px;background-image:radial-gradient(circle at 1px 1px,color-mix(in srgb,var(--text) 12%,transparent) 1px,transparent 0);background-size:22px 22px}
.board{width:min(680px,100%);margin:0 auto;background:var(--bg);border:1px solid var(--border);border-radius:var(--r-card);overflow:hidden;position:relative}
.board-bar{display:flex;justify-content:space-between;padding:8px 12px;font-size:11px;color:var(--muted);border-bottom:1px solid var(--border)}
.board-body{padding:22px;display:flex;flex-direction:column;gap:12px;position:relative}
.ph{display:block;border-radius:8px;background:color-mix(in srgb,var(--text) 7%,transparent)}
.ph-hero{height:120px;background:linear-gradient(120deg,var(--primary),var(--accent));opacity:.85}
.ph-row{display:flex;gap:10px;background:transparent}
.ph-row i{flex:1;height:64px;border-radius:8px;background:color-mix(in srgb,var(--text) 7%,transparent)}
.ph-text{height:10px;width:82%}
.ph-text.short{width:54%}
.sel{position:absolute;inset:16px 16px 78px;border:1.5px solid var(--primary);border-radius:6px}
.sel em{position:absolute;top:-20px;left:-1px;background:var(--primary);color:var(--on-primary);font-style:normal;font-size:10px;padding:2px 6px;border-radius:4px}
.doc{padding:36px 44px;overflow:auto}
.doc-crumb{font-size:11px;color:var(--muted)}
.doc h1{font-size:32px;line-height:1.2;margin:8px 0 10px;letter-spacing:-.01em}
.doc-lead{color:var(--muted);font-size:14px;line-height:1.6;margin-bottom:16px}
.doc h2{font-size:16px;margin:22px 0 8px}
.doc p{line-height:1.7;color:color-mix(in srgb,var(--text) 82%,var(--muted))}
.callout{border-left:3px solid var(--primary);background:color-mix(in srgb,var(--primary) 10%,transparent);padding:10px 12px;border-radius:6px;font-size:13px;line-height:1.6;margin:14px 0}
.todo{list-style:none;padding:0;display:grid;gap:6px;margin:6px 0 0}
.todo li{display:flex;align-items:center;gap:8px;font-size:13px}
.todo li.done{color:var(--muted);text-decoration:line-through}
.box{width:14px;height:14px;border:1.5px solid var(--border);border-radius:4px;display:grid;place-items:center;font-size:10px;color:var(--primary)}
.todo li.done .box{border-color:var(--primary);background:color-mix(in srgb,var(--primary) 18%,transparent)}
.issues{width:100%;border-collapse:collapse;font-size:12.5px}
.issues th{text-align:left;font-weight:600;color:var(--muted);font-size:11px;padding:8px 12px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--surface)}
.issues td{padding:0 12px;height:40px;border-bottom:1px solid var(--border)}
.issues tr:hover td{background:color-mix(in srgb,var(--text) 4%,transparent)}
.issues tr.is-selected td{background:color-mix(in srgb,var(--text) 13%,transparent)}
.issues tr.is-selected td:first-child{box-shadow:inset 3px 0 0 var(--primary)}
.issues tr.is-selected .t-title{font-weight:700}
.t-title{font-weight:600}
.t-muted{color:var(--muted);font-variant-numeric:tabular-nums}
.state{display:inline-flex;align-items:center;gap:6px;color:var(--muted)}
.state::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--c)}
.feed{list-style:none;padding:0 4px;display:grid;gap:8px;font-size:12px;color:var(--muted)}
.ch{font-size:13px}
.ch-sub{color:var(--muted);font-size:11.5px;margin-left:8px}
.thread{flex:1;overflow:auto;padding:16px 18px;display:grid;gap:14px;align-content:end}
.msg{display:flex;gap:10px}
.ava{width:30px;height:30px;border-radius:8px;background:color-mix(in srgb,var(--primary) 22%,transparent);color:var(--text);display:grid;place-items:center;font-size:12px;font-weight:700;flex:none}
.msg header{display:flex;gap:8px;align-items:baseline}
.msg b{font-size:12.5px}
.msg time{color:var(--muted);font-size:11px}
.msg p{margin-top:3px;line-height:1.6;font-size:13px}
.composer{display:flex;gap:8px;padding:12px;border-top:1px solid var(--border);flex:none}
.composer input{flex:1;height:34px;border:1px solid var(--border);background:var(--surface);border-radius:var(--r-ctl);padding:0 12px;color:var(--text);font:inherit}
.term{flex:1;overflow:auto;padding:16px 18px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px}
.tblock{margin-bottom:4px}
.tblock code{display:block;padding:6px 10px;background:var(--surface2);border-radius:6px;border-left:2px solid var(--primary)}
.prompt{color:var(--primary);margin-right:6px}
.tout{white-space:pre-wrap;color:var(--muted);line-height:1.7;padding:4px 12px 14px;margin:0}
.caret{display:inline-block;width:7px;height:13px;background:var(--primary);vertical-align:-2px;animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.branch{font-size:11px;background:color-mix(in srgb,var(--primary) 16%,transparent);padding:2px 8px;border-radius:999px}
.mail-split{flex:1;display:grid;grid-template-columns:320px 1fr;min-height:0}
.mail-list{border-right:1px solid var(--border);overflow:auto}
.mail-row{display:flex;gap:8px;width:100%;text-align:left;border:0;background:transparent;padding:12px;border-bottom:1px solid var(--border);align-items:flex-start}
.mail-row:hover{background:color-mix(in srgb,var(--text) 4%,transparent)}
.mail-row.active{background:color-mix(in srgb,var(--primary) 10%,transparent);box-shadow:inset 2px 0 0 var(--primary)}
.mail-row .dot{width:7px;height:7px;border-radius:50%;margin-top:6px;flex:none;background:transparent}
.mail-row.unread .dot{background:var(--primary)}
.mail-row b{font-size:12.5px}
.m-subj{display:block;font-size:12.5px;margin-top:2px}
.mail-row p{color:var(--muted);font-size:12px;margin-top:2px;line-height:1.4}
.mail-row time{margin-left:auto;color:var(--muted);font-size:11px}
.mail-read{padding:28px 32px;overflow:auto}
.mail-read h2{font-size:22px;margin:6px 0 10px}
.mail-actions{display:flex;gap:8px;margin-top:18px}
.launcher{flex:1;display:grid;place-items:center;background:color-mix(in srgb,var(--bg) 55%,transparent)}
.cmd{width:min(560px,90%);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);box-shadow:var(--shadow);overflow:hidden}
.cmd-input{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid var(--border);color:var(--muted)}
.cmd-input span{flex:1}
kbd{font:inherit;font-size:11px;color:var(--muted);border:1px solid var(--border);border-radius:4px;padding:1px 5px}
.cmd-group{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 16px 4px}
.cmd-row{display:flex;align-items:center;gap:10px;width:100%;border:0;background:transparent;padding:9px 16px;text-align:left}
.cmd-row:hover,.cmd-row:first-of-type{background:color-mix(in srgb,var(--primary) 14%,transparent)}
.cmd-row span{flex:1;font-size:12.5px}
.editor{flex:1;display:flex;min-height:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px}
.gutter{list-style:none;padding:14px 10px;margin:0;text-align:right;color:var(--muted);border-right:1px solid var(--border);user-select:none}
.gutter li{height:20px}
.code{margin:0;padding:14px 16px;overflow:auto;line-height:20px;white-space:pre;color:var(--text)}
.k{color:var(--primary)}.s{color:var(--ok)}.n{color:var(--warn)}.f{color:var(--accent)}.p{color:var(--muted)}.v{color:var(--text);font-weight:600}
.ai{display:grid;gap:10px;padding:4px}
.ai-user{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px;line-height:1.6;font-size:12.5px}
.ai-bot{line-height:1.7;font-size:12.5px;color:var(--muted)}
.ai-bot code{background:color-mix(in srgb,var(--text) 8%,transparent);padding:1px 5px;border-radius:4px;font-size:11.5px}
@media (max-width:900px){.body{grid-template-columns:200px 1fr}.right{display:none}}
</style>
</head>
<body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true">${sprite}</svg>
<div class="win" role="application" aria-label="${esc(meta.label)} 桌面样板间">
  <div class="titlebar">
    <span class="lights" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="win-title">GhollStudio · <b>${esc(meta.label)}</b> — ${esc(d.name)}</span>
    <span class="win-tools">${esc(meta.kind)}</span>
  </div>
  <div class="body">
    ${hasSide ? `<aside class="side" aria-label="侧栏">${built.side}</aside>` : ''}
    <main class="main">${built.launcher || built.main || ''}</main>
    ${built.right ? `<aside class="right" aria-label="检查器">${built.right}</aside>` : ''}
  </div>
  <div class="statusbar"><span>${esc(built.status || meta.status)}</span><span>${esc(d.name)}</span></div>
</div>
</body>
</html>
`
}

const desktop = (Array.isArray(INDEX) ? INDEX : INDEX.designs || []).filter((d) => d.platform === 'desktop')
const targets = ONLY ? desktop.filter((d) => d.slug === ONLY) : desktop
let made = 0
for (const d of targets) {
  const out = join(ROOT, 'public/generated', d.slug, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, page(d))
  made++
  console.log(`✓ ${d.slug} → public/generated/${d.slug}/index.html`)
}
console.log(`generated ${made} / ${desktop.length} desktop samples`)
