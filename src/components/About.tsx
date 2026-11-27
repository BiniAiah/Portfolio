import { languages, profile, quickFacts } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const strengths = [
  'Database-driven web applications',
  'Biometric system integration',
  'Machine learning pipelines & synthetic data',
  'Clean, responsive interfaces',
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            icon="fa-solid fa-user"
            title="Turning ideas into"
            accent="working systems."
            description="I enjoy the full journey: understanding a real problem, shaping the data behind it, and shipping an interface people can actually use."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal className="space-y-6">
            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              <p>{profile.summary}</p>
              <p>
                My work sits at the intersection of web development and data. From a biometric
                verification module for senior citizen aid distribution to a machine-learning
                logistics platform for island communities, I focus on building software that is
                practical, reliable, and easy to maintain.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <li
                  key={strength}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs text-indigo-600">
                    <i className="fa-solid fa-check" aria-hidden="true" />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-lg font-bold text-slate-900">Quick facts</h3>
              <ul className="mt-5 space-y-4">
                {quickFacts.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-sm text-indigo-600">
                      <i className={fact.icon} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {fact.label}
                      </p>
                      {fact.label === 'Email' ? (
                        <a
                          href={`mailto:${fact.value}`}
                          className="break-all text-sm font-medium text-slate-700 transition-colors hover:text-indigo-600"
                        >
                          {fact.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-700">{fact.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Languages
                </h4>
                <ul className="mt-4 space-y-4">
                  {languages.map((language) => (
                    <li key={language.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700">{language.name}</span>
                        <span className="text-xs text-slate-500">{language.level}</span>
                      </div>
                      <div
                        className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100"
                        role="progressbar"
                        aria-label={`${language.name} proficiency`}
                        aria-valuenow={language.value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-cyan-400"
                          style={{ width: `${language.value}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
