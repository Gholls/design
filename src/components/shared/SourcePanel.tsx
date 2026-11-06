import { useEffect, useMemo, useState } from 'react'
import type { Design } from '../../types'
import { copyAgentPrompt, downloadDesignMd } from '../../lib/agent'

interface SourcePanelProps {
  design: Design | null
  onClose: () => void
}

type Tab = 'source' | 'tokens'

export default function SourcePanel({ design, onClose }: SourcePanelProps) {
  const [tab, setTab] = useState<Tab>('source')

  useEffect(() => {
    if (!design) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [design, onClose])

  useEffect(() => {
    if (design) setTab('source')
  }, [design])

  const tokensJson = useMemo(() => {
    if (!design) return ''
    const d = design.design
    return JSON.stringify(
      {
        name: d.name,
        description: d.summary,
        colors: d.colors,
        typography: d.typography,
        rounded: d.rounded,
        spacing: d.spacing,
        components: d.components,
        ...d.extensions,
      },
      null,
      2,
    )
  }, [design])

  if (!design) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fade-in absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="panel-in absolute inset-y-0 right-0 flex w-full max-w-3xl flex-col border-l border-line bg-surface shadow-card">
        <header className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <h3 className="font-display text-base font-bold">源码对照</h3>
            <p className="mt-0.5 text-xs text-muted">
              designs/{design.slug}/DESIGN.md · Google DESIGN.md (alpha) 格式 · 唯一数据源
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-control border border-line p-0.5">
              {(
                [
                  ['source', '原文'],
                  ['tokens', '解析后 Tokens'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setTab(value)}
                  className={`cursor-pointer rounded-[calc(var(--d-rounded-control,8px)-3px)] px-2.5 py-1 text-xs font-medium ${
                    tab === value ? 'bg-primary text-on-primary' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="h-8 w-8 cursor-pointer rounded-control border border-line text-muted hover:bg-surface-alt hover:text-ink"
              aria-label="关闭"
            >
              ✕
            </button>
          </div>
        </header>
        {design.design.warnings.length > 0 ? (
          <div className="border-b border-line bg-warning/10 px-5 py-2 font-mono text-[11px] leading-4 text-warning">
            {design.design.warnings.join(' · ')}
          </div>
        ) : null}
        <pre className="flex-1 overflow-auto whitespace-pre-wrap break-words px-5 py-4 text-xs leading-5 text-ink">
          {tab === 'source' ? design.markdown : tokensJson}
        </pre>
        <footer className="flex flex-wrap items-center gap-2 border-t border-line px-5 py-3">
          <button
            onClick={() => copyAgentPrompt(design)}
            className="cursor-pointer rounded-control border border-primary/50 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20"
          >
            📋 复制为 Agent 提示词（需求 + 规范全文）
          </button>
          <button
            onClick={() => downloadDesignMd(design)}
            className="cursor-pointer rounded-control border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted hover:text-ink"
          >
            ⤓ 下载 DESIGN.md
          </button>
          <span className="ml-auto font-mono text-[11px] text-muted">
            同一提示词 + 本规范 → agent 产出当前页面
          </span>
        </footer>
      </aside>
    </div>
  )
}
