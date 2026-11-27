import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'

const contactChannels = [
  {
    label: 'Email',
    value: profile.email,
    href: profile.gmailCompose,
    icon: 'fa-solid fa-envelope',
    external: true,
  },
  {
    label: 'GitHub',
    value: `github.com/${profile.githubUsername}`,
    href: profile.github,
    icon: 'fa-brands fa-github',
    external: true,
  },
  {
    label: 'Location',
    value: profile.location,
    href: null,
    icon: 'fa-solid fa-location-dot',
    external: false,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: 'fa-solid fa-phone',
    external: false,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-slate-50 to-white"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                  Contact
                </span>

                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Let&apos;s build something <span className="text-gradient">together.</span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
                  I&apos;m currently open to OJT placements and entry-level opportunities in web
                  development, database management, and machine learning. If you have a role or a
                  project in mind, my inbox is always open.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={profile.gmailCompose}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="shine inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
                  >
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    Send an email
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
                    aria-live="polite"
                  >
                    <i
                      className={`fa-solid ${copied ? 'fa-check text-emerald-500' : 'fa-copy'}`}
                      aria-hidden="true"
                    />
                    {copied ? 'Copied!' : 'Copy email'}
                  </button>
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  Prefer your mail app?{' '}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
                  >
                    Open mailto
                  </a>
                </p>

                <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {profile.availability}
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactChannels.map((channel) => {
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-indigo-600">
                        <i className={channel.icon} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          {channel.label}
                        </p>
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {channel.value}
                        </p>
                      </div>
                      {channel.href ? (
                        <i
                          className="fa-solid fa-arrow-up-right-from-square ml-auto text-xs text-slate-300 transition-colors group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )

                  return (
                    <li key={channel.label}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          {...(channel.external
                            ? { target: '_blank', rel: 'noreferrer noopener' }
                            : {})}
                          className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-indigo-200 hover:bg-white"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                          {content}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
