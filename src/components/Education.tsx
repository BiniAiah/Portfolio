import { education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white to-slate-50"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            icon="fa-solid fa-graduation-cap"
            title="An academic"
            accent="foundation."
            description="Formal training in information technology, complemented by hands-on project work."
          />
        </Reveal>

        <Reveal className="mt-12">
          <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-linear-to-br from-indigo-100 via-violet-100 to-cyan-100 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 text-xl text-white shadow-lg shadow-indigo-500/25">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    <i className="fa-regular fa-calendar" aria-hidden="true" />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    {education.expected}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-600">{education.school}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  {education.location}
                </p>

                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Focus areas
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {education.focus.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
