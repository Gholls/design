import { useEffect, useState } from 'react'
import type { Design } from '../types'
import { getDesign } from '../lib/registry'
import { APPLIED_EVENT, applyDesign, type AppliedDetail } from '../lib/tokenEngine'
import TopBar from '../components/sandbox/TopBar'
import SourcePanel from '../components/shared/SourcePanel'
import OverviewPage from '../components/sandbox/pages/OverviewPage'
import DataPage from '../components/sandbox/pages/DataPage'
import ComponentsPage from '../components/sandbox/pages/ComponentsPage'
import FormsPage from '../components/sandbox/pages/FormsPage'
import AnalyticsPage from '../components/sandbox/pages/AnalyticsPage'
import ContentPage from '../components/sandbox/pages/ContentPage'
import AuthPage from '../components/sandbox/pages/AuthPage'

interface NavItem {
  key: string
  label: string
  glyph: string
}

const NAV_GROUPS: Array<{ title: string; items: NavItem[] }> = [
  {
    title: '产品',
    items: [
      { key: 'overview', label: '概览', glyph: '▤' },
      { key: 'data', label: '数据表格', glyph: '☰' },
      { key: 'analytics', label: '分析图表', glyph: '◔' },
    ],
  },
  {
    title: '素材',
    items: [
      { key: 'components', label: '组件库', glyph: '⬡' },
      { key: 'forms', label: '表单流程', glyph: '✎' },
      { key: 'content', label: '内容页面', glyph: '¶' },
    ],
  },
  {
    title: '流程',
    items: [{ key: 'auth', label: '登录 / 注册', glyph: '⌂' }],
  },
]

const ALL_ITEMS = NAV_GROUPS.flatMap((g) => g.items)

export default function SandboxPage({ theme, page }: { theme?: string; page?: string }) {
  const design: Design = getDesign(theme)
  const active = ALL_ITEMS.some((i) => i.key === page) ? (page as string) : 'overview'
  const [sourceOpen, setSourceOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    applyDesign(design)
  }, [design])

  useEffect(() => {
    const onApplied = (event: Event) => {
      const detail = (event as CustomEvent<AppliedDetail>).detail
      setToast(`已实时切换至「${detail.name}」· 全部页面即刻生效`)
    }
    window.addEventListener(APPLIED_EVENT, onApplied)
    return () => window.removeEventListener(APPLIED_EVENT, onApplied)
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  const pages: Record<string, React.ReactNode> = {
    overview: <OverviewPage />,
    data: <DataPage />,
    components: <ComponentsPage design={design} />,
    forms: <FormsPage />,
    analytics: <AnalyticsPage />,
    content: <ContentPage />,
    auth: <AuthPage />,
  }

  return (
    <div className="min-h-screen">
      <TopBar
        design={design}
        sourceOpen={sourceOpen}
        onToggleSource={() => setSourceOpen((v) => !v)}
      />

      <div className="mx-auto flex w-full max-w-[1600px]">
        {/* 侧边栏（桌面） */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-52 shrink-0 flex-col border-r border-line px-3 py-4 md:flex">
          <nav className="space-y-5">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {group.title}
                </p>
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item.key}>
                      <a
                        href={`#/preview?theme=${design.slug}&page=${item.key}`}
                        className={`flex items-center gap-2.5 rounded-control px-3 py-2 text-sm font-medium ${
                          active === item.key
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted hover:bg-surface-alt hover:text-ink'
                        }`}
                      >
                        <span className="w-4 text-center text-base leading-none" aria-hidden="true">
                          {item.glyph}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="mt-auto space-y-2 px-1 pt-4">
            <p className="rounded-control border border-line bg-surface-alt px-2.5 py-1.5 font-mono text-[10px] text-muted">
              当前规范<br />
              <span className="text-ink">{design.design.name}</span>
            </p>
            <a
              href="#/"
              className="block rounded-control px-2.5 py-1.5 text-xs text-muted hover:bg-surface-alt hover:text-ink"
            >
              ← 返回画廊
            </a>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          {/* 顶部标签（移动端） */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-line px-4 py-2.5 md:hidden">
            {ALL_ITEMS.map((item) => (
              <a
                key={item.key}
                href={`#/preview?theme=${design.slug}&page=${item.key}`}
                className={`shrink-0 rounded-badge border px-3 py-1 text-xs font-medium ${
                  active === item.key
                    ? 'border-transparent bg-primary text-on-primary'
                    : 'border-line text-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="px-4 py-5 md:px-6 md:py-6">{pages[active]}</div>
        </main>
      </div>

      <SourcePanel design={sourceOpen ? design : null} onClose={() => setSourceOpen(false)} />

      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
          <div className="rise-in flex items-center gap-2 rounded-card border border-line bg-surface px-4 py-2.5 text-sm shadow-card">
            <span className="h-2 w-2 rounded-full bg-success" />
            {toast}
          </div>
        </div>
      ) : null}
    </div>
  )
}
