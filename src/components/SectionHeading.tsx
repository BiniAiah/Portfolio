interface SectionHeadingProps {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  icon?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  icon = 'fa-solid fa-star',
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
        <i className={icon} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
        {accent ? <span className="text-gradient"> {accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  )
}
