import { achievements, certifications } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & certifications"
            icon="fa-solid fa-trophy"
            title="Recognized for"
            accent="building what matters."
            description="Competitions and credentials that pushed me to keep learning and shipping."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <Reveal key={achievement.title}>
                <article className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 p-7 text-white shadow-xl shadow-indigo-500/25 sm:p-8">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                        <i className="fa-solid fa-star" aria-hidden="true" />
                        Highlight
                      </span>
                      <span className="font-display text-sm font-semibold text-white/80">
                        {achievement.year}
                      </span>
                    </div>

                    <span className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-2xl backdrop-blur">
                      <i className={achievement.icon} aria-hidden="true" />
                    </span>

                    <h3 className="mt-5 font-display text-2xl font-bold">{achievement.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-white/90">{achievement.event}</p>
                    <p className="mt-0.5 text-sm text-white/75">{achievement.organization}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/85">
                      {achievement.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="font-display text-lg font-bold text-slate-900">Certifications</h3>
              <p className="mt-1 text-sm text-slate-500">Verified learning outside the classroom.</p>

              <ul className="mt-5 space-y-4">
                {certifications.map((certification) => (
                  <li
                    key={certification.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-lg text-indigo-600 shadow-sm">
                      <i className={certification.icon} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{certification.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{certification.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-linear-to-br from-indigo-50 to-cyan-50 p-4">
                <p className="flex items-start gap-2 text-sm text-slate-600">
                  <i
                    className="fa-solid fa-lightbulb mt-0.5 text-amber-500"
                    aria-hidden="true"
                  />
                  I use AI-assisted development tools daily — every output is reviewed and tested
                  before it ships.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
