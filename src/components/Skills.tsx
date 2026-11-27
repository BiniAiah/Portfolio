import { skillCategories } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white via-slate-50 to-white"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Technical skills"
            icon="fa-solid fa-layer-group"
            title="A toolkit built for"
            accent="real projects."
            description="Languages, databases, and ML tools I have used to design, build, and ship academic and client systems."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 100}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-br from-indigo-100 to-cyan-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 text-lg text-white shadow-lg shadow-indigo-500/25">
                    <i className={category.icon} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors group-hover:border-indigo-100 group-hover:bg-white"
                    >
                      <i className={`${skill.icon} text-sm text-indigo-500`} aria-hidden="true" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
