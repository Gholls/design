import { useState } from 'react'
import type { IndexedDesign } from '../../types'
import { copyAgentPrompt, downloadDesignMd } from '../../lib/agent'

const BUCKET_LABEL = { structured: '秩序网格', expressive: '表现主义', editorial: '杂志编排' } as const

function Meter({ label, value, hint }: { label: string; value: number | null; hint: string }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between text-[11px]">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-muted tabular-nums">{value === null ? '—' : `${value}/10`}</span>
      </div>
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < (value ?? 0) ? 'bg-primary' : 'bg-line'}`} />
        ))}
      </div>
      <p className="mt-1 text-[10px] leading-4 text-muted">{hint}</p>
    </div>
  )
}

export default function SpecPanel({ design, compact = false }: { design: IndexedDesign; compact?: boolean }) {
  const d = design.design
  const [copied, setCopied] = useState<boolean | null>(null)

  const copy = async () => {
    const ok = await copyAgentPrompt(design)
    setCopied(ok)
    setTimeout(() => setCopied(null), 1600)
  }

  return (
    <div className="rounded-control border border-line bg-surface-alt p-3.5">
      <p className="text-[11px] font-bold">本规范的设计思想</p>

      <div className="mt-3 space-y-3">
        <Meter label="Density 密度" value={d.metrics.density} hint={`留白节奏 ×${d.density}`} />
        <Meter label="Variance 变化度" value={d.metrics.variance} hint={`版式气质：${BUCKET_LABEL[d.varianceBucket]}`} />
        <Meter label="Motion 动效" value={d.metrics.motion} hint={d.motionScale === 0 ? '生成站点应无动效' : '过渡与入场节奏'} />
      </div>

      {!compact && d.prose.overview ? (
        <p className="mt-3 border-t border-line pt-2.5 text-[11px] leading-4 text-muted">{d.prose.overview}</p>
      ) : null}

      {!compact && (d.prose.dos.length > 0 || d.prose.donts.length > 0) ? (
        <div className="mt-2.5 space-y-1 border-t border-line pt-2.5">
          {d.prose.dos.slice(0, 3).map((s) => (
            <p key={s} className="text-[10.5px] leading-4">
              <span className="font-bold text-success">✓ </span>
              {s.replace(/^do\b\s*/i, '')}
            </p>
          ))}
          {d.prose.donts.slice(0, 3).map((s) => (
            <p key={s} className="text-[10.5px] leading-4">
              <span className="font-bold text-danger">✕ </span>
              {s.replace(/^don'?t\b\s*/i, '')}
            </p>
          ))}
        </div>
      ) : null}

      <div className="mt-3.5 grid gap-1.5">
        <button
          onClick={copy}
          className="cursor-pointer rounded-control border border-primary/50 bg-primary/10 px-2.5 py-1.5 text-[11px] font-semibold text-primary hover:bg-primary/20"
        >
          {copied === null ? '📋 复制 Agent 任务（提示词 + 本规范）' : copied ? '✓ 已复制，交给任意 code agent' : '复制失败'}
        </button>
        <button
          onClick={() => downloadDesignMd(design)}
          className="cursor-pointer rounded-control border border-line bg-surface px-2.5 py-1.5 text-[11px] font-medium text-muted hover:text-ink"
        >
          ⤓ 下载 DESIGN.md
        </button>
      </div>
    </div>
  )
}
