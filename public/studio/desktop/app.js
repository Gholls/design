(() => {
  const data = window.GS_DATA
  const root = document.documentElement
  const $ = (s) => document.querySelector(s)
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
  const money = (n) => '¥' + Math.round(n).toLocaleString('zh-CN')
  const initials = (n) => String(n).slice(-2, -1) || String(n).slice(0, 1)

  const state = {
    view: 'home',
    tasks: data.tasks.map((t) => ({ ...t })),
    projects: data.projects.map((p) => ({ ...p })),
    tickets: data.tickets.map((t) => ({ ...t })),
    conversations: data.conversations.map((c) => ({ ...c, messages: [...c.messages] })),
    query: '',
    filter: '全部',
    sortDir: null,
    activeThread: data.conversations[0].id,
  }

  const VIEWS = [
    ['home', '工作台', 'home'],
    ['projects', '项目', 'folder'],
    ['tickets', '工单', 'ticket'],
    ['chat', '会话', 'chat'],
  ]
  const STATUSES = ['待审核', '复核通过', '驳回重做', '已上架']
  const HUES = ['#4573d2', '#4ecbc4', '#f1bd6c', '#5a3fff', '#62d26f', '#f26fd3', '#f06a6a', '#8da3b0']

  let toastTimer
  const toast = (text) => {
    const el = $('#toast')
    el.textContent = text
    el.classList.add('on')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => el.classList.remove('on'), 1800)
  }

  const pending = () => state.tickets.filter((t) => t.status === '待审核').length
  const unread = () => state.conversations.reduce((s, c) => s + (c.unread || 0), 0)
  const total = () => state.tickets.reduce((s, t) => s + t.amount, 0)
  const avgProgress = () => Math.round(state.projects.reduce((s, p) => s + p.progress, 0) / Math.max(1, state.projects.length))

  const navBadge = (id) => (id === 'tickets' ? pending() : id === 'chat' ? unread() : 0)

  const renderNav = () => {
    $('#nav').innerHTML = VIEWS.map(([id, label, icon]) => {
      const n = navBadge(id)
      return `<button data-view="${id}" class="${state.view === id ? 'on' : ''}"><svg class="nav-icon"><use href="#i-${icon}"/></svg><span>${label}</span>${n ? `<em>${n}</em>` : ''}</button>`
    }).join('')
    $('#team').innerHTML = data.team
      .map((m) => `<span class="ava" style="background:${m.hue}" title="${esc(m.name)} · ${esc(m.role)}">${esc(initials(m.name))}</span>`)
      .join('')
    $('#me').innerHTML = `<span class="ava" style="background:${data.me.hue}">${esc(data.me.initials)}</span><div><b>${esc(data.me.name)}</b><small>${esc(data.me.role)}</small></div>`
    $('#crumb').innerHTML = `GhollStudio / <b>${VIEWS.find((v) => v[0] === state.view)[1]}</b>`
  }

  const kpis = () => `<div class="kpis">
    <div class="kpi"><span>进行中项目</span><b>${state.projects.filter((p) => p.status === '进行中').length}</b><small>共 ${state.projects.length} 个</small></div>
    <div class="kpi"><span>待审核工单</span><b>${pending()}</b><small>${state.tickets.length} 张在管</small></div>
    <div class="kpi"><span>合同总额</span><b>${money(total())}</b><small>含 ${new Set(state.tickets.map((t) => t.client)).size} 个客户</small></div>
    <div class="kpi"><span>平均进度</span><b>${avgProgress()}%</b><small>8 个项目加权</small></div>
  </div>`

  const ticketTable = (list, opts = {}) => `<div class="panel">
    <table class="table">
      <thead><tr>
        <th>单号</th><th>项目</th><th>客户</th><th>阶段</th><th>审核状态</th>
        <th class="num ${opts.sortable ? 'sortable' : ''}" data-sort>金额 ${state.sortDir === 'desc' ? '↓' : state.sortDir === 'asc' ? '↑' : ''}</th>
        <th>更新时间</th>
      </tr></thead>
      <tbody>${list
        .map(
          (t) => `<tr>
        <td class="mono">${esc(t.id)}</td>
        <td>${esc(t.project)}</td>
        <td>${esc(t.client)}</td>
        <td>${esc(t.stage)}</td>
        <td><select class="state" data-status="${esc(t.id)}" data-current="${esc(t.status)}" aria-label="${esc(t.id)} 审核状态">
          ${STATUSES.map((s) => `<option${s === t.status ? ' selected' : ''}>${s}</option>`).join('')}
        </select></td>
        <td class="num">${money(t.amount)}</td>
        <td class="mono">${esc(t.updated)}</td>
      </tr>`,
        )
        .join('')}</tbody>
    </table>
    ${list.length ? '' : '<p class="empty">没有匹配的工单，换个关键词试试。</p>'}
  </div>`

  const viewHome = () => `${kpis()}
    <div class="cols">
      <div>
        <div class="panel">
          <div class="panel-head"><b>今日任务</b><span>${state.tasks.filter((t) => t.done).length}/${state.tasks.length}</span></div>
          <div class="panel-body">${state.tasks
            .map(
              (t) => `<label class="task ${t.done ? 'done' : ''}"><input type="checkbox" data-task="${esc(t.id)}"${t.done ? ' checked' : ''}><span>${esc(t.title)}</span><time>${esc(t.due)}</time></label>`,
            )
            .join('')}</div>
        </div>
        <div style="height:14px"></div>
        ${ticketTable(state.tickets.slice(0, 5))}
      </div>
      <div class="panel">
        <div class="panel-head"><b>最近动态</b><span>${data.activity.length} 条</span></div>
        <div class="feed">${data.activity
          .map(
            (a) => `<div class="feed-row"><span class="ava" style="background:${a.hue}">${esc(a.initials)}</span><div><b>${esc(a.who)} ${esc(a.text)}</b><small>${esc(a.time)}</small></div></div>`,
          )
          .join('')}</div>
      </div>
    </div>`

  const viewProjects = () => {
    const filters = ['全部', ...new Set(state.projects.map((p) => p.status))]
    const list = state.projects.filter((p) => state.filter === '全部' || p.status === state.filter)
    return `<div class="toolbar">${filters
      .map((f) => `<button class="chip ${state.filter === f ? 'on' : ''}" data-filter="${esc(f)}">${esc(f)}</button>`)
      .join('')}<span class="count">${list.length} / ${state.projects.length}</span></div>
      <div class="panel">${list
        .map(
          (p) => `<div class="proj-row">
            <div class="proj-name"><span class="ava" style="background:${p.hue};width:24px;height:24px;border-radius:7px">${esc(p.name.slice(0, 1))}</span><span><b>${esc(p.name)}</b><small>${esc(p.client)} · ${esc(p.type)}</small></span></div>
            <span>${esc(p.owner)}</span>
            <span>${esc(p.status)}</span>
            <span class="bar"><i style="width:${p.progress}%;background:${p.hue}"></i></span>
            <span class="pct">${p.progress}%</span>
          </div>`,
        )
        .join('')}${list.length ? '' : '<p class="empty">这个状态下没有项目。</p>'}</div>`
  }

  const viewTickets = () => {
    const q = state.query.trim().toLowerCase()
    let list = state.tickets.filter(
      (t) => !q || `${t.id} ${t.project} ${t.client} ${t.stage} ${t.status}`.toLowerCase().includes(q),
    )
    if (state.sortDir) {
      list = [...list].sort((a, b) => (state.sortDir === 'desc' ? b.amount - a.amount : a.amount - b.amount))
    }
    return `<div class="toolbar"><span class="count">${list.length} 张工单 · ${money(list.reduce((s, t) => s + t.amount, 0))}</span></div>${ticketTable(list, { sortable: true })}`
  }

  const viewChat = () => {
    const thread = state.conversations.find((c) => c.id === state.activeThread) || state.conversations[0]
    return `<div class="threads">
      <div class="thread-list">${state.conversations
        .map(
          (c) => `<button class="thread-item ${c.id === thread.id ? 'on' : ''}" data-thread="${esc(c.id)}">
            <span class="ava" style="background:${c.hue}">${esc(c.name.slice(0, 1))}</span>
            <div><b>${esc(c.name)}</b><small>${esc(c.messages[c.messages.length - 1]?.text || '')}</small></div>
            <time>${esc(c.time)}</time>
          </button>`,
        )
        .join('')}</div>
      <div class="chat">
        <div class="chat-head"><span class="ava" style="background:${thread.hue}">${esc(thread.name.slice(0, 1))}</span><b>${esc(thread.name)}</b><span class="count">${thread.messages.length} 条消息</span></div>
        <div class="chat-body" id="chatBody">${thread.messages
          .map((m) => `<div class="msg ${m.from === 'me' ? 'me' : ''}">${esc(m.text)}<time>${esc(m.time)}</time></div>`)
          .join('')}</div>
        <form class="composer" id="composer"><input id="msg" placeholder="发消息…" autocomplete="off"><button class="btn primary">发送</button></form>
      </div>
    </div>`
  }

  const render = () => {
    renderNav()
    const view = { home: viewHome, projects: viewProjects, tickets: viewTickets, chat: viewChat }[state.view]
    $('#view').innerHTML = view()
    const body = $('#chatBody')
    if (body) body.scrollTop = body.scrollHeight
  }

  const applyTheme = (theme) => {
    root.dataset.theme = theme
    localStorage.setItem('gs-theme', theme)
    $('#themeBtn').textContent = theme === 'dark' ? '浅色' : '深色'
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1e1f21' : '#ffffff')
    parent?.postMessage({ type: 'gs-theme', theme }, location.origin)
  }

  document.addEventListener('click', (e) => {
    const nav = e.target.closest('[data-view]')
    if (nav) {
      state.view = nav.dataset.view
      render()
      return
    }
    const filter = e.target.closest('[data-filter]')
    if (filter) {
      state.filter = filter.dataset.filter
      render()
      return
    }
    const sort = e.target.closest('[data-sort]')
    if (sort) {
      state.sortDir = state.sortDir === 'desc' ? 'asc' : 'desc'
      render()
      return
    }
    const thread = e.target.closest('[data-thread]')
    if (thread) {
      state.activeThread = thread.dataset.thread
      render()
      return
    }
    if (e.target.closest('[data-close]') || e.target.id === 'modal') {
      $('#modal').classList.remove('on')
      return
    }
    if (e.target.closest('#newBtn')) {
      $('#projectForm').reset()
      $('#f-progress-out').textContent = '0%'
      document.querySelectorAll('#projectForm .field.invalid').forEach((f) => f.classList.remove('invalid'))
      $('#modal').classList.add('on')
      $('#f-name').focus()
    }
  })

  $('#view').addEventListener('change', (e) => {
    const select = e.target.closest('select[data-status]')
    if (select) {
      const ticket = state.tickets.find((t) => t.id === select.dataset.status)
      if (!ticket || ticket.status === select.value) return
      ticket.status = select.value
      ticket.updated = '刚刚'
      select.dataset.current = select.value
      toast(`${ticket.id} → ${ticket.status}`)
      render()
      return
    }
    const task = e.target.closest('input[data-task]')
    if (task) {
      const item = state.tasks.find((t) => t.id === task.dataset.task)
      if (item) item.done = task.checked
      render()
    }
  })

  $('#q').addEventListener('input', (e) => {
    state.query = e.target.value
    if (state.view !== 'tickets') {
      state.view = 'tickets'
      render()
      const q = $('#q')
      q.focus()
      q.setSelectionRange(q.value.length, q.value.length)
      return
    }
    render()
  })

  $('#themeBtn').addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')
  })
  window.addEventListener('message', (e) => {
    if (e.origin === location.origin && e.data && e.data.type === 'gs-theme') applyTheme(e.data.theme)
  })

  $('#f-progress').addEventListener('input', (e) => {
    $('#f-progress-out').textContent = `${e.target.value}%`
  })

  $('#projectForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const client = form.client.value.trim()
    const nameField = form.name.closest('.field')
    const clientField = form.client.closest('.field')
    nameField.classList.toggle('invalid', name.length < 2)
    clientField.classList.toggle('invalid', client.length < 2)
    if (name.length < 2 || client.length < 2) return
    const due = form.due.value ? form.due.value.slice(5).replace('-', '-') : '待定'
    state.projects.unshift({
      id: `p${Date.now()}`,
      name,
      client,
      type: form.type.value,
      owner: form.owner.value,
      progress: Number(form.progress.value),
      status: '待启动',
      due,
      hue: HUES[state.projects.length % HUES.length],
      milestones: [
        ['启动', true],
        ['交付', false],
      ],
    })
    $('#modal').classList.remove('on')
    state.view = 'projects'
    render()
    toast(`已创建「${name}」`)
  })

  $('#view').addEventListener('submit', (e) => {
    const form = e.target.closest('#composer')
    if (!form) return
    e.preventDefault()
    const input = form.querySelector('input')
    const text = input.value.trim()
    if (!text) return
    const thread = state.conversations.find((c) => c.id === state.activeThread)
    const now = new Date()
    thread.messages.push({ from: 'me', text, time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}` })
    thread.time = '刚刚'
    thread.unread = 0
    render()
  })

  document.addEventListener('keydown', (e) => {
    const meta = e.metaKey || e.ctrlKey
    if (meta && e.key.toLowerCase() === 'k') {
      e.preventDefault()
      $('#q').focus()
      $('#q').select()
      return
    }
    if (e.key === 'Escape') $('#modal').classList.remove('on')
  })

  $('#f-owner').innerHTML = data.team.map((m) => `<option>${esc(m.name)}</option>`).join('')
  applyTheme(localStorage.getItem('gs-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  render()
  if (new URLSearchParams(location.search).has('embed')) document.body.classList.add('embed')
})()
