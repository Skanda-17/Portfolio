import Reveal from './Reveal'

interface SectionHeadingProps {
  /** Small eyebrow / kicker label above the title. */
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

/** Consistent, animated section heading used across the page. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignment} mb-12`}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 leading-relaxed text-balance">{subtitle}</p>
      )}
    </Reveal>
  )
}
