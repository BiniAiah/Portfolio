import { navItems, profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/25">
                {profile.initials}
              </span>
              <span className="font-display text-sm font-semibold text-slate-900">
                {profile.name}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">{profile.headline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-indigo-200 hover:text-indigo-600"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
            <a
              href={profile.gmailCompose}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Email John Floyd (opens Gmail)"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-indigo-200 hover:text-indigo-600"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-indigo-200 hover:text-indigo-600"
            >
              <i className="fa-solid fa-arrow-up" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Vite, Tailwind CSS &amp; Font Awesome.</p>
        </div>
      </div>
    </footer>
  )
}
