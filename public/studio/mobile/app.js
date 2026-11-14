(() => {
  const D = window.GS_DATA
  const $ = (sel, root = document) => root.querySelector(sel)
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]
  const clone = (v) => JSON.parse(JSON.stringify(v))
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

  const TITLES = { home: 'GhollStudio', projects: 'GhollStudio', tickets: 'GhollStudio', messages: 'GhollStudio', me: 'GhollStudio' }
  const TONES = {
    待审核: ['#f8df72', 'rgba(248,223,114,.32)'],
    复核通过: ['#2a9d97', 'rgba(78,203,196,.18)'],
    驳回重做: ['#e8384f', 'rgba(232,56,79,.16)'],
    已上架: ['#2f9e44', 'rgba(98,210,111,.2)'],
    进行中: ['#4573d2', 'rgba(69,115,210,.14)'],
    待启动: ['#6d6e6f', 'rgba(109,110,111,.12)'],
  }
  const HUES = ['#4573d2', '#4ecbc4', '#f1bd6c', '#5a3fff', '#62d26f', '#f26fd3']

  const state = {
    tab: 'home',
    theme: localStorage.getItem('gs-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    projectFilter: '全部',
    projectQuery: '',
    ticketFilter: '全部',
    activeThread: null,
    projects: clone(D.projects),
    tickets: clone(D.tickets),
    conversations: clone(D.conversations),
    notifications: clone(D.notifications),
    tasks: clone(D.tasks),
  }

  const pendingCount = () => state.tickets.filter((t) => t.status === '待审核').length
  const activeProjects = () => state.projects.filter((p) => p.status === '进行中').length
  const unreadCount = () => state.conversations.reduce((n, c) => n + c.unread, 0)
  const notifUnread = () => state.notifications.filter((n) => n.unread).length

  function pill(status) {
    const [hue, tint] = TONES[status] || TONES['待启动']
    return `<span class="pill" style="--hue:${hue};--tint:${tint}">${esc(status)}</span>`
  }

  function avatar(person, size = '') {
    return `<span class="avatar ${size}" style="--hue:${person.hue}">${esc(person.initials)}</span>`
  }

  function toast(text) {
    const el = $('#toast')
    el.textContent = text
    el.classList.add('on')
    clearTimeout(toast.timer)
    toast.timer = setTimeout(() => el.classList.remove('on'), 1900)
  }

  function applyTheme(theme) {
    state.theme = theme
    document.documentElement.dataset.theme = theme
    localStorage.setItem('gs-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1e1f21' : '#ffffff')
    $('#themeSwitch')?.classList.toggle('on', theme === 'dark')
  }

  function renderHome() {
    const tasks = state.tasks
    $('#homeBody').innerHTML = `
      <div class="home-head">
        <div class="home-greet">
          <div>
            <h1>早上好，晚舟</h1>
            <p class="home-date">11 月 14 日 · 周五 · 晴 18°</p>
          </div>
          ${avatar(D.me, 'avatar-lg')}
        </div>
      </div>
      <div class="avail-card">
        <b>本月余 ${D.studio.seats} 个交付席位</b>
        <p>固定价 + 里程碑验收，12 月档期开放预约。</p>
        <button class="btn btn-primary" data-act="schedule">查看排期</button>
      </div>
      <div class="kpi-row">
        <div class="kpi"><b>6</b><span>本月交付</span></div>
        <div class="kpi"><b>${activeProjects()}</b><span>进行中项目</span></div>
        <div class="kpi"><b>${pendingCount()}</b><span>待审核工单</span></div>
      </div>
      <div class="quick">
        <button data-act="new-project"><i style="--hue:#f06a6a"><svg class="icon"><use href="#i-plus"/></svg></i>新建项目</button>
        <button data-act="new-ticket"><i style="--hue:#4573d2"><svg class="icon"><use href="#i-ticket"/></svg></i>新建工单</button>
        <button data-act="team"><i style="--hue:#4ecbc4"><svg class="icon"><use href="#i-user"/></svg></i>邀请成员</button>
        <button data-act="audit"><i style="--hue:#f1bd6c"><svg class="icon"><use href="#i-card"/></svg></i>导出报表</button>
      </div>
      <div class="section-head"><b>今日交付</b><button data-act="tab" data-tab="tickets">全部工单</button></div>
      ${tasks.map((t) => `
        <div class="task-row ${t.done ? 'done' : ''}">
          <button class="circle ${t.done ? 'done' : ''}" data-act="task" data-id="${t.id}" aria-label="完成 ${esc(t.title)}"><svg class="icon"><use href="#i-check"/></svg></button>
          <div class="task-main"><b>${esc(t.title)}</b><span>${esc(t.project)}</span></div>
          <span class="task-due">${esc(t.due)}</span>
        </div>`).join('')}
      <div class="section-head"><b>团队动态</b><button data-act="tab" data-tab="messages">消息</button></div>
      ${D.activity.map((a) => `
        <div class="activity-row">
          <span class="avatar ${a.hue === '#f06a6a' ? '' : 'avatar-sm'}" style="--hue:${a.hue}">${esc(a.initials)}</span>
          <div class="activity-main"><b>${esc(a.who)}</b> ${esc(a.text)}<time>${esc(a.time)}</time></div>
        </div>`).join('')}
      <div style="height:96px"></div>`
  }

  function renderProjectChips() {
    const options = ['全部', '进行中', '待启动', '复核通过']
    $('#projectChips').innerHTML = options.map((o) => `<button class="chip ${state.projectFilter === o ? 'on' : ''}" data-act="project-filter" data-value="${o}">${o}</button>`).join('')
  }

  function renderProjects() {
    const q = state.projectQuery.trim().toLowerCase()
    const list = state.projects.filter((p) => {
      if (state.projectFilter !== '全部' && p.status !== state.projectFilter) return false
      if (!q) return true
      return (p.name + p.client + p.owner + p.type).toLowerCase().includes(q)
    })
    $('#projectSub').textContent = `${state.projects.length} 个项目 · ${activeProjects()} 个进行中`
    renderProjectChips()
    $('#projectList').innerHTML = list.length ? list.map((p) => `
      <button class="project-card" data-act="project" data-id="${p.id}">
        <div class="project-top"><b>${esc(p.name)}</b>${pill(p.status)}</div>
        <p class="project-meta">${esc(p.client)} · ${esc(p.type)} · ${esc(p.owner)}</p>
        <div class="progress"><i style="--hue:${p.hue};width:${p.progress}%"></i></div>
        <div class="project-foot"><span>截止 ${esc(p.due)}</span><b>${p.progress}%</b></div>
      </button>`).join('') : '<div class="empty">没有匹配的项目。<br>换个关键词或筛选条件试试。</div>'
  }

  function renderTicketChips() {
    const options = ['全部', '待审核', '复核通过', '驳回重做', '已上架']
    $('#ticketChips').innerHTML = options.map((o) => `<button class="chip ${state.ticketFilter === o ? 'on' : ''}" data-act="ticket-filter" data-value="${o}">${o}</button>`).join('')
  }

  function renderTickets() {
    const list = state.tickets.filter((t) => state.ticketFilter === '全部' || t.status === state.ticketFilter)
    $('#ticketSub').textContent = `${state.tickets.length} 张工单 · ${pendingCount()} 张待审核`
    renderTicketChips()
    $('#ticketList').innerHTML = list.length ? list.map((t) => `
      <button class="ticket-row" data-act="ticket" data-id="${t.id}">
        <div class="ticket-main"><b>${esc(t.project)}</b><span>${esc(t.id)} · ${esc(t.client)} · ${esc(t.updated)}</span></div>
        <div class="ticket-side">${pill(t.status)}<span class="ticket-amount">¥${t.amount.toLocaleString()}</span></div>
      </button>`).join('') : '<div class="empty">这个状态下没有工单。</div>'
    $('#ticketFoot').textContent = `${list.length} / ${state.tickets.length} 单 · 待审核 ${pendingCount()} 张 · 下拉状态即时写入复核记录`
  }

  function renderConversations() {
    $('#convList').innerHTML = state.conversations.map((c) => `
      <button class="conv-row" data-act="thread" data-id="${c.id}">
        <span class="avatar avatar-lg" style="--hue:${c.hue}">${esc(c.name.slice(0, 1))}</span>
        <div class="conv-main"><b>${esc(c.name)} ${c.unread ? '<i></i>' : ''}</b><p>${esc(c.messages[c.messages.length - 1].text)}</p></div>
        <div class="conv-side"><time>${esc(c.time)}</time>${c.unread ? `<span class="unread">${c.unread}</span>` : ''}</div>
      </button>`).join('')
  }

  function renderTabbar() {
    $$('.tab').forEach((b) => b.classList.toggle('on', b.dataset.tab === state.tab))
    $('#screen').dataset.tab = state.tab
    $('#appbarTitle').textContent = TITLES[state.tab]
    $('#bellDot').textContent = String(notifUnread())
    $('#bellDot').classList.toggle('on', notifUnread() > 0)
    $('#ctxNew').style.display = state.tab === 'me' ? 'none' : ''
  }

  function setTab(tab) {
    state.tab = tab
    if (tab !== 'messages') closeThread()
    $$('.view').forEach((v) => v.classList.toggle('on', v.id === 'v-' + tab))
    renderTabbar()
    const view = $('#v-' + tab)
    if (view) view.scrollTop = 0
    if (tab === 'home') renderHome()
    if (tab === 'projects') renderProjects()
    if (tab === 'tickets') renderTickets()
    if (tab === 'messages') renderConversations()
    if (tab === 'me') $('#themeSwitch')?.classList.toggle('on', state.theme === 'dark')
  }

  function renderThread() {
    const c = state.conversations.find((x) => x.id === state.activeThread)
    if (!c) return
    $('#threadName').textContent = c.name
    $('#threadMeta').textContent = `${c.messages.length} 条消息 · 项目群`
    $('#threadBody').innerHTML = c.messages.map((m) => `<div class="msg ${m.from}">${esc(m.text)}<time>${esc(m.time)}</time></div>`).join('')
    const body = $('#threadBody')
    requestAnimationFrame(() => { body.scrollTop = body.scrollHeight })
  }

  function openThread(id) {
    state.activeThread = id
    const c = state.conversations.find((x) => x.id === id)
    if (!c) return
    c.unread = 0
    renderConversations()
    renderThread()
    $('#thread').classList.add('on')
    $('#thread').setAttribute('aria-hidden', 'false')
    renderTabbar()
  }

  function closeThread() {
    state.activeThread = null
    $('#thread').classList.remove('on')
    $('#thread').setAttribute('aria-hidden', 'true')
  }

  function openSheet(title, body, foot = '') {
    $('#sheetTitle').textContent = title
    $('#sheetBody').innerHTML = body
    $('#sheetFoot').innerHTML = foot || '<button class="btn" data-act="close-sheet">关闭</button>'
    $('#sheet').classList.add('on')
    $('#sheet').setAttribute('aria-hidden', 'false')
    requestAnimationFrame(() => {
      const target = $('#sheetBody input, #sheetBody select, #sheetBody textarea')
      target?.focus({ preventScroll: true })
    })
  }

  function closeSheet() {
    $('#sheet').classList.remove('on')
    $('#sheet').setAttribute('aria-hidden', 'true')
  }

  function projectSheet(id) {
    const p = state.projects.find((x) => x.id === id)
    if (!p) return
    const done = p.milestones.filter((m) => m[1]).length
    openSheet('项目详情', `
      <div class="detail-head"><b>${esc(p.name)}</b>${pill(p.status)}</div>
      <div class="detail-meta"><span class="pill" style="--hue:${p.hue}">${esc(p.type)}</span><span class="pill" style="--hue:#6d6e6f;--tint:rgba(109,110,111,.12)">${esc(p.client)}</span></div>
      <div class="detail-grid">
        <div class="detail-stat"><span>负责人</span><b>${esc(p.owner)}</b></div>
        <div class="detail-stat"><span>截止日期</span><b>${esc(p.due)}</b></div>
        <div class="detail-stat"><span>里程碑</span><b>${done}/${p.milestones.length}</b></div>
        <div class="detail-stat"><span>进度</span><b>${p.progress}%</b></div>
      </div>
      <div class="progress" style="margin-bottom:14px"><i style="--hue:${p.hue};width:${p.progress}%"></i></div>
      ${p.milestones.map((m) => `<div class="milestone ${m[1] ? '' : 'pending'}"><svg class="icon"><use href="#${m[1] ? 'i-check' : 'i-chevron'}"/></svg>${esc(m[0])}</div>`).join('')}
      <p class="sheet-note">改动会同步到网站与桌面端的项目卡片墙。</p>`,
      `<button class="btn" data-act="close-sheet">关闭</button><button class="btn btn-primary" data-act="project-message" data-id="${p.id}">项目群</button>`)
  }

  function ticketSheet(id) {
    const t = state.tickets.find((x) => x.id === id)
    if (!t) return
    const options = ['待审核', '复核通过', '驳回重做', '已上架']
    openSheet(`${t.id} · 更新状态`, `
      <div class="detail-head"><b>${esc(t.project)}</b>${pill(t.status)}</div>
      <p class="sheet-note" style="margin:0 0 10px">${esc(t.client)} · ${esc(t.stage)} · ¥${t.amount.toLocaleString()} · ${esc(t.updated)}</p>
      <div class="sheet-list">${options.map((o) => `<button class="sheet-option ${o === t.status ? 'on' : ''}" data-act="set-status" data-id="${t.id}" data-status="${o}">${o === t.status ? '<svg class="icon"><use href="#i-check"/></svg>' : '<svg class="icon"><use href="#i-chevron"/></svg>'}${o}</button>`).join('')}</div>
      <p class="sheet-note">状态变更会即时记入复核记录，并更新首页待审核 KPI。</p>`)
  }

  function notificationsSheet() {
    openSheet('通知中心', `
      <div class="sheet-list">
        ${state.notifications.map((n) => `<div class="notif-row ${n.unread ? '' : 'read'}"><span class="notif-dot" style="--hue:${n.hue}"></span><div class="notif-main"><b>${esc(n.title)}</b><span>${esc(n.detail)}</span><time>${esc(n.time)}</time></div></div>`).join('')}
      </div>`,
      `<button class="btn" data-act="close-sheet">关闭</button><button class="btn btn-primary" data-act="read-all">全部已读</button>`)
  }

  function scheduleSheet() {
    const list = [...state.projects].sort((a, b) => a.due.localeCompare(b.due)).slice(0, 5)
    openSheet('近期排期', `
      <div class="sheet-list">${list.map((p) => `<div class="setting-row"><span class="setting-icon" style="--hue:${p.hue}"><svg class="icon"><use href="#i-calendar"/></svg></span><div class="setting-main"><b>${esc(p.name)}</b><span>${esc(p.client)} · 截止 ${esc(p.due)}</span></div>${pill(p.status)}</div>`).join('')}</div>
      <p class="sheet-note">本月剩余 ${D.studio.seats} 个交付席位，可预约 12 月档期。</p>`)
  }

  function teamSheet() {
    openSheet('团队与权限', `
      <div class="sheet-list">${D.team.map((m) => `<div class="setting-row"><span class="avatar" style="--hue:${m.hue}">${m.initials}</span><div class="setting-main"><b>${esc(m.name)}</b><span>${esc(m.role)}</span></div><span class="pill" style="--hue:#2a9d97;--tint:rgba(78,203,196,.18)">可编辑</span></div>`).join('')}</div>
      <p class="sheet-note">外部协作者 2 人 · 仅可查看工单与复核记录。</p>`,
      `<button class="btn" data-act="close-sheet">关闭</button><button class="btn btn-primary" data-act="invite">邀请成员</button>`)
  }

  function newProjectSheet() {
    openSheet('新建项目', `
      <div class="field" id="npNameField"><label>项目名称 *</label><input id="npName" placeholder="例：结算中心重构" autocomplete="off"><div class="field-error">请填写项目名称</div></div>
      <div class="field-pair">
        <div class="field"><label>类型</label><select id="npType"><option>Web 交付</option><option>设计系统</option><option>AI 流水线</option><option>运维审计</option></select></div>
        <div class="field"><label>负责人</label><select id="npOwner"><option>林晚舟</option><option>周墨白</option><option>苏见月</option><option>陈屿</option></select></div>
      </div>
      <div class="field-pair">
        <div class="field"><label>客户</label><input id="npClient" placeholder="客户名称"></div>
        <div class="field"><label>截止日期</label><input id="npDue" type="date" value="2026-11-28"></div>
      </div>
      <div class="field"><label>预计工期：<b id="npWeeks">8</b> 周</label><input id="npRange" type="range" min="2" max="24" value="8"></div>
      <div class="field"><label>项目简介（<span id="npCount">0</span>/120）</label><textarea id="npDesc" maxlength="120" placeholder="一句话说明验收目标…"></textarea></div>`,
      `<button class="btn" data-act="close-sheet">取消</button><button class="btn btn-primary" data-act="save-project">保存并排期</button>`)
  }

  function newTicketSheet() {
    openSheet('新建工单', `
      <div class="field" id="ntProjectField"><label>项目名称 *</label><input id="ntProject" placeholder="例：Atlas 对账模块" autocomplete="off"><div class="field-error">请填写项目名称</div></div>
      <div class="field-pair">
        <div class="field"><label>客户</label><input id="ntClient" placeholder="云栖支付"></div>
        <div class="field"><label>金额（元）</label><input id="ntAmount" type="number" min="0" step="1000" value="86000"></div>
      </div>
      <div class="field"><label>阶段</label><select id="ntStage"><option>设计</option><option>开发</option><option>联调</option><option>UAT</option><option>发布</option></select></div>
      <p class="sheet-note">保存后进入「待审核」，可在工单列表内直接更新状态。</p>`,
      `<button class="btn" data-act="close-sheet">取消</button><button class="btn btn-primary" data-act="save-ticket">创建工单</button>`)
  }

  function newMessageSheet() {
    openSheet('新建会话', `
      <div class="field" id="nmNameField"><label>会话名称 *</label><input id="nmName" placeholder="例：几何建筑 · Token 咨询" autocomplete="off"><div class="field-error">请填写会话名称</div></div>
      <div class="field"><label>第一条消息</label><textarea id="nmText" placeholder="写点什么…"></textarea></div>`,
      `<button class="btn" data-act="close-sheet">取消</button><button class="btn btn-primary" data-act="save-thread">创建会话</button>`)
  }

  function settingsSheet(kind) {
    const map = {
      billing: ['订阅与账单', '标准档 · ¥6万/月<br>下一期 12-01 自动续费<br>已用席位 4 / 6 · 超额按 ¥8000/人计'],
      audit: ['交付与审计', '最近审计 10-28 · SLA 99.97%<br>季度成本复盘已归档<br>下次审计 01-28'],
      invite: ['邀请成员', '邀请链接已复制到剪贴板。<br>外部协作者仅可查看工单与复核记录。'],
    }
    const [title, body] = map[kind] || map.audit
    openSheet(title, `<p class="sheet-note" style="font-size:14px;line-height:1.7">${body}</p>`)
  }

  function renderSearch(q) {
    const query = q.trim().toLowerCase()
    if (!query) {
      $('#searchBody').innerHTML = `<div class="search-group">快速入口</div>
        <button class="search-row" data-act="search-tab" data-tab="projects"><svg class="icon"><use href="#i-folder"/></svg><div><b>项目</b><span>${state.projects.length} 个项目</span></div></button>
        <button class="search-row" data-act="search-tab" data-tab="tickets"><svg class="icon"><use href="#i-ticket"/></svg><div><b>工单</b><span>${state.tickets.length} 张工单 · ${pendingCount()} 待审核</span></div></button>
        <button class="search-row" data-act="search-tab" data-tab="messages"><svg class="icon"><use href="#i-chat"/></svg><div><b>消息</b><span>${unreadCount()} 条未读</span></div></button>`
      return
    }
    const projects = state.projects.filter((p) => (p.name + p.client + p.owner + p.type).toLowerCase().includes(query))
    const tickets = state.tickets.filter((t) => (t.id + t.project + t.client + t.status).toLowerCase().includes(query))
    const convs = state.conversations.filter((c) => (c.name + c.messages.map((m) => m.text).join(' ')).toLowerCase().includes(query))
    const groups = []
    if (projects.length) groups.push(`<div class="search-group">项目 · ${projects.length}</div>` + projects.slice(0, 6).map((p) => `<button class="search-row" data-act="search-project" data-id="${p.id}"><svg class="icon"><use href="#i-folder"/></svg><div><b>${esc(p.name)}</b><span>${esc(p.client)} · ${esc(p.type)} · ${p.progress}%</span></div>${pill(p.status)}</button>`).join(''))
    if (tickets.length) groups.push(`<div class="search-group">工单 · ${tickets.length}</div>` + tickets.slice(0, 6).map((t) => `<button class="search-row" data-act="search-ticket" data-id="${t.id}"><svg class="icon"><use href="#i-ticket"/></svg><div><b>${esc(t.project)}</b><span>${esc(t.id)} · ¥${t.amount.toLocaleString()}</span></div>${pill(t.status)}</button>`).join(''))
    if (convs.length) groups.push(`<div class="search-group">消息 · ${convs.length}</div>` + convs.slice(0, 6).map((c) => `<button class="search-row" data-act="search-thread" data-id="${c.id}"><svg class="icon"><use href="#i-chat"/></svg><div><b>${esc(c.name)}</b><span>${esc(c.messages[c.messages.length - 1].text)}</span></div></button>`).join(''))
    $('#searchBody').innerHTML = groups.length ? groups.join('') : `<div class="empty">没有找到「${esc(q)}」。<br>试试项目名、单号或客户。</div>`
  }

  function openSearch() {
    $('#search').classList.add('on')
    $('#search').setAttribute('aria-hidden', 'false')
    renderSearch('')
    setTimeout(() => $('#globalSearch').focus(), 60)
  }

  function closeSearch() {
    $('#search').classList.remove('on')
    $('#search').setAttribute('aria-hidden', 'true')
    $('#globalSearch').value = ''
  }

  function saveProject() {
    const name = $('#npName')
    const field = $('#npNameField')
    if (!name.value.trim()) {
      field.classList.add('invalid')
      name.focus()
      return
    }
    const project = {
      id: 'p' + Date.now(),
      name: name.value.trim(),
      client: $('#npClient').value.trim() || '未命名客户',
      type: $('#npType').value,
      owner: $('#npOwner').value,
      progress: 0,
      status: '待启动',
      due: ($('#npDue').value || '2026-11-28').slice(5).replace('-', '-'),
      hue: HUES[state.projects.length % HUES.length],
      milestones: [['需求体检', false], ['方案与报价', false], ['首版交付', false]],
    }
    state.projects.unshift(project)
    closeSheet()
    setTab('projects')
    renderHome()
    toast(`项目已创建：${project.name}`)
  }

  function saveTicket() {
    const project = $('#ntProject')
    const field = $('#ntProjectField')
    if (!project.value.trim()) {
      field.classList.add('invalid')
      project.focus()
      return
    }
    const amount = Number($('#ntAmount').value || 0)
    const now = new Date()
    state.tickets.unshift({
      id: 'GS-' + (130 + state.tickets.length),
      project: project.value.trim(),
      client: $('#ntClient').value.trim() || '未命名客户',
      stage: $('#ntStage').value,
      status: '待审核',
      amount,
      updated: `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
    })
    closeSheet()
    setTab('tickets')
    renderHome()
    toast(`工单已创建：等待审核`)
  }

  function saveThread() {
    const name = $('#nmName')
    const field = $('#nmNameField')
    if (!name.value.trim()) {
      field.classList.add('invalid')
      name.focus()
      return
    }
    const text = $('#nmText').value.trim() || '新会话已创建。'
    const now = new Date().toTimeString().slice(0, 5)
    const conv = {
      id: 'c' + Date.now(),
      name: name.value.trim(),
      hue: HUES[state.conversations.length % HUES.length],
      unread: 0,
      time: '刚刚',
      messages: [{ from: 'me', text, time: now }],
    }
    state.conversations.unshift(conv)
    closeSheet()
    setTab('messages')
    renderConversations()
    openThread(conv.id)
    toast('会话已创建')
  }

  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab')
    if (tab) {
      setTab(tab.dataset.tab)
      return
    }
    const el = e.target.closest('[data-act]')
    if (!el) return
    const act = el.dataset.act
    if (act === 'toggle-theme') applyTheme(state.theme === 'dark' ? 'light' : 'dark')
    else if (act === 'tab') setTab(el.dataset.tab)
    else if (act === 'task') {
      const t = state.tasks.find((x) => x.id === el.dataset.id)
      if (t) {
        t.done = !t.done
        renderHome()
        toast(t.done ? '已完成 · 同步到项目进度' : '已恢复为待办')
      }
    } else if (act === 'project-filter') {
      state.projectFilter = el.dataset.value
      renderProjects()
    } else if (act === 'project') projectSheet(el.dataset.id)
    else if (act === 'ticket') ticketSheet(el.dataset.id)
    else if (act === 'ticket-filter') {
      state.ticketFilter = el.dataset.value
      renderTickets()
    } else if (act === 'set-status') {
      const t = state.tickets.find((x) => x.id === el.dataset.id)
      if (t) {
        t.status = el.dataset.status
        renderTickets()
        renderHome()
        closeSheet()
        toast(`${t.id} → ${t.status}，已写入复核记录`)
      }
    } else if (act === 'thread') openThread(el.dataset.id)
    else if (act === 'project-message') {
      const p = state.projects.find((x) => x.id === el.dataset.id)
      closeSheet()
      setTab('messages')
      openThread(p && /云栖|Atlas|结算/.test(p.client + p.name) ? 'c1' : 'c2')
    } else if (act === 'close-sheet') closeSheet()
    else if (act === 'new-project') newProjectSheet()
    else if (act === 'new-ticket') newTicketSheet()
    else if (act === 'save-project') saveProject()
    else if (act === 'save-ticket') saveTicket()
    else if (act === 'save-thread') saveThread()
    else if (act === 'read-all') {
      state.notifications.forEach((n) => { n.unread = false })
      renderTabbar()
      notificationsSheet()
      toast('通知已全部标记为已读')
    } else if (act === 'schedule') scheduleSheet()
    else if (act === 'team') teamSheet()
    else if (act === 'invite') {
      closeSheet()
      settingsSheet('invite')
    } else if (act === 'audit') settingsSheet('audit')
    else if (act === 'billing') settingsSheet('billing')
    else if (act === 'logout') toast('已退出登录（演示）')
    else if (act === 'toggle-switch') {
      el.classList.toggle('on')
      toast(el.classList.contains('on') ? '已开启' : '已关闭')
    } else if (act === 'search-tab') {
      closeSearch()
      setTab(el.dataset.tab)
    } else if (act === 'search-project') {
      closeSearch()
      setTab('projects')
      projectSheet(el.dataset.id)
    } else if (act === 'search-ticket') {
      closeSearch()
      setTab('tickets')
      ticketSheet(el.dataset.id)
    } else if (act === 'search-thread') {
      closeSearch()
      setTab('messages')
      openThread(el.dataset.id)
    }
  })

  $('#searchBtn').addEventListener('click', openSearch)
  $('#searchCancel').addEventListener('click', closeSearch)
  $('#globalSearch').addEventListener('input', (e) => renderSearch(e.target.value))
  $('#bellBtn').addEventListener('click', notificationsSheet)
  $('#ctxNew').addEventListener('click', () => {
    if (state.tab === 'tickets') newTicketSheet()
    else if (state.tab === 'messages') newMessageSheet()
    else newProjectSheet()
  })
  $('#sheetClose').addEventListener('click', closeSheet)
  $('#threadBack').addEventListener('click', closeThread)
  $('#thread').addEventListener('click', (e) => { if (e.target === $('#thread')) closeThread() })
  $('#sheet').addEventListener('click', (e) => { if (e.target === $('#sheet')) closeSheet() })
  $('#projectSearch').addEventListener('input', (e) => { state.projectQuery = e.target.value; renderProjects() })
  $('#composer').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = $('#composerInput')
    const text = input.value.trim()
    if (!text) return
    const c = state.conversations.find((x) => x.id === state.activeThread)
    if (!c) return
    const now = new Date().toTimeString().slice(0, 5)
    c.messages.push({ from: 'me', text, time: now })
    c.time = now
    input.value = ''
    renderThread()
    renderConversations()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    if ($('#sheet').classList.contains('on')) closeSheet()
    else if ($('#search').classList.contains('on')) closeSearch()
    else if ($('#thread').classList.contains('on')) closeThread()
  })
  $('#sheetBody').addEventListener('input', (e) => {
    if (e.target.id === 'npRange') $('#npWeeks').textContent = e.target.value
    if (e.target.id === 'npDesc') $('#npCount').textContent = e.target.value.length
    if (e.target.id === 'npName') e.target.closest('.field')?.classList.remove('invalid')
    if (e.target.id === 'ntProject') e.target.closest('.field')?.classList.remove('invalid')
    if (e.target.id === 'nmName') e.target.closest('.field')?.classList.remove('invalid')
  })

  window.addEventListener('message', (e) => {
    if (e.origin === location.origin && e.data && e.data.type === 'gs-theme') applyTheme(e.data.theme)
  })

  if (new URLSearchParams(location.search).has('embed')) document.body.classList.add('embed')
  applyTheme(state.theme)
  setTab('home')
  renderProjects()
  renderTickets()
  renderConversations()
})()
