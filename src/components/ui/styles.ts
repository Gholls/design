export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent'
export type ButtonSize = 'sm' | 'md'

const BASE =
  'inline-flex items-center justify-center gap-1.5 border font-medium cursor-pointer select-none ' +
  'shadow-control focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ' +
  'disabled:opacity-45 disabled:cursor-not-allowed disabled:shadow-none'

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'rounded-control bg-primary text-on-primary border-transparent hover:bg-primary-strong',
  secondary: 'rounded-control border-line stroke-control bg-surface text-ink hover:bg-surface-alt',
  ghost: 'rounded-control border-transparent bg-transparent text-muted hover:bg-surface-alt hover:text-ink shadow-none',
  danger: 'rounded-control border-transparent bg-danger text-white hover:brightness-110',
  accent: 'rounded-control border-transparent bg-accent text-white hover:brightness-110',
}

const SIZES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
}

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra = ''): string {
  return [BASE, VARIANTS[variant], SIZES[size], extra].filter(Boolean).join(' ')
}

export const fieldClass =
  'w-full rounded-control border border-line stroke-control bg-surface-alt px-3 py-2 text-sm text-ink ' +
  'outline-none placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/25'

export const cardClass =
  'rounded-card border border-line stroke-card bg-surface shadow-card'
