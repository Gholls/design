import type { StatusKind } from '../../types'

const KIND_CLASS: Record<StatusKind, string> = {
  success: 'text-success bg-success/10 border-success/40',
  info: 'text-primary bg-primary/10 border-primary/40',
  warning: 'text-warning bg-warning/10 border-warning/40',
  danger: 'text-danger bg-danger/10 border-danger/40',
}

export default function StatusBadge({ kind, label }: { kind: StatusKind; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-badge border px-2 py-0.5 text-xs font-semibold ${KIND_CLASS[kind]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  )
}
