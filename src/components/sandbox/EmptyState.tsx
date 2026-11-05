import type { ReactNode } from 'react'

export default function EmptyState({
  title,
  hint,
  action,
}: {
  title: string
  hint: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
      <svg
        className="h-10 w-10 text-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 13h5l2 3h4l2-3h5" />
        <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      </svg>
      <p className="text-sm font-semibold">{title}</p>
      <p className="max-w-xs text-xs leading-relaxed text-muted">{hint}</p>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
}
