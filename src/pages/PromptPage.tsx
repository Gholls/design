import { useState } from 'react'
import { GOLDEN_PROMPT } from '../lib/prompt'
import { buttonClass, cardClass } from '../components/ui/styles'

export default function PromptPage() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(GOLDEN_PROMPT)
    } catch {
      /* ignore */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between gap-3">
        <a href="/" className={buttonClass('ghost', 'sm')}>← 画廊</a>
        <button onClick={copy} className={buttonClass(copied ? 'primary' : 'secondary', 'sm', 'stroke-control')}>
          {copied ? '✓ 已复制' : '复制提示词全文'}
        </button>
      </div>
      <h1 className="mt-6 font-display text-2xl font-bold">黄金样板间提示词</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        本项目的全部「限制」都写在这份提示词里——应用代码不内置任何样板间。
        把它与任一 DESIGN.md 拼接后交给 code agent，产出的静态站点会被自动路由到预览器。
        需求恒定，规范各异，页面差异即规范思想的差异。
      </p>
      <article className={`${cardClass} mt-6 whitespace-pre-wrap p-5 font-mono text-xs leading-5`}>
        {GOLDEN_PROMPT}
      </article>
    </div>
  )
}
