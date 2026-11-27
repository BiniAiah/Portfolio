import { useEffect, useMemo, useState } from 'react'
import { navItems, profile } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/70 bg-white/85 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="h-0.5 w-full bg-slate-200/70" aria-hidden="true">
        <div
          className="h-full bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="John Floyd Macahibag — back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:-rotate-6">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-slate-900 sm:block">
            John Floyd<span className="text-indigo-600">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 sm:inline-flex"
          >
            Let&apos;s talk
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'visible max-h-[28rem] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 border-t border-slate-200/70 bg-white/95 px-4 pb-5 pt-3 sm:px-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={activeId === item.id ? 'location' : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
                <i className="fa-solid fa-arrow-right text-xs opacity-50" aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              Email me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
