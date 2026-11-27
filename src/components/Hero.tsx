import { useState } from 'react'
import { profile, stats } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { asset } from '../lib/asset'

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const [photoSrc, setPhotoSrc] = useState(asset(profile.photo))

  const handlePhotoError = () => {
    const fallback = asset(profile.photoPlaceholder)
    if (photoSrc !== fallback) setPhotoSrc(fallback)
  }

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 animate-blob rounded-full bg-indigo-300/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-24 -z-10 h-80 w-80 animate-blob rounded-full bg-cyan-300/40 blur-3xl animation-delay-2000"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 animate-blob rounded-full bg-violet-300/30 blur-3xl animation-delay-4000"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>
            <span className="block text-slate-900">Macahibag.</span>
          </h1>

          <p className="mt-5 min-h-[1.75rem] text-lg font-medium text-slate-700 sm:text-xl">
            <span className="text-slate-500">I&apos;m a </span>
            <span className="font-semibold text-slate-900">{typed}</span>
            <span className="ml-0.5 animate-caret font-light text-indigo-500" aria-hidden="true">
              |
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="shine inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-diagram-project" aria-hidden="true" />
              View Projects
            </a>
            <a
              href={asset(profile.resume)}
              download="John-Floyd-Macahibag-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              <i className="fa-solid fa-download" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600"
            >
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              Email me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              <i className="fa-brands fa-github text-base" aria-hidden="true" />
              github.com/{profile.githubUsername}
            </a>
            <span className="inline-flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-indigo-500" aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 sm:p-3.5"
              >
                <i className={`${stat.icon} text-indigo-500`} aria-hidden="true" />
                <dt className="mt-2 text-[11px] font-medium text-slate-500 sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="font-display text-base font-bold text-slate-900 sm:text-lg">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-linear-to-br from-indigo-500/25 via-violet-500/20 to-cyan-400/25 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-indigo-500/15">
            <img
              src={photoSrc}
              onError={handlePhotoError}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={640}
              className="aspect-square w-full rounded-[1.6rem] object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-[1.6rem] bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent p-5 pt-16"
              aria-hidden="true"
            >
              <p className="font-display text-base font-semibold text-white">{profile.name}</p>
              <p className="text-[11px] leading-snug text-slate-200 sm:text-xs">
                {profile.headline}
              </p>
            </div>
          </div>

          <div className="absolute left-1 top-4 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-xl shadow-slate-900/10 backdrop-blur animate-float sm:left-auto sm:-right-3 sm:top-10 sm:gap-3 sm:p-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-100 text-amber-600 sm:h-10 sm:w-10">
              <i className="fa-solid fa-trophy" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">PSC XI 2026</p>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">Top 4 Overall</p>
            </div>
          </div>

          <div className="absolute right-1 top-4 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-xl shadow-slate-900/10 backdrop-blur animate-float-slow sm:right-auto sm:-left-4 sm:bottom-32 sm:top-auto sm:gap-3 sm:p-3">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-100 text-indigo-600 sm:h-10 sm:w-10">
              <i className="fa-solid fa-code" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">Shipped</p>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">3+ Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
