import { useEffect, useState } from 'react'
import type { Design } from '../../types'

interface SourcePanelProps {
  design: Design | null
  onClose: () => void
}

type Tab = 'design-md' | 'tokens-json'

export default function SourcePanel({ design, onClose }: SourcePanelProps) {
  const [tab, setTab] = useState<Tab>('design-md')

  useEffect(() => {
    if (!design) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [design, onClose])

  useEffect(() => {
    if (design) setTab('design-md')
  }, [design])

  if (!design) return null

  const body =
    tab === 'design-md'
      ? design.markdown
      : JSON.stringify(design.tokens, null, 2)

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
              designs/{design.slug}/ · 只读原文，改动即换肤数据源
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-control border border-line p-0.5">
              {(
                [
                  ['design-md', 'DESIGN.md'],
                  ['tokens-json', 'tokens.json'],
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
        <pre className="flex-1 overflow-auto whitespace-pre-wrap break-words px-5 py-4 text-xs leading-5 text-ink">
          {body}
        </pre>
      </aside>
    </div>
  )
}
