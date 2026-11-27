import { projects, profile } from '../data/portfolio'
import { asset } from '../lib/asset'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import type { Project } from '../data/portfolio'

function ProjectLinks({ project }: { project: Project }) {
  if (project.github) {
    return (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600"
      >
        <i className="fa-brands fa-github" aria-hidden="true" />
        View on GitHub
      </a>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-400">
      <i className="fa-solid fa-lock" aria-hidden="true" />
      Source available on request
    </span>
  )
}

export default function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const rest = projects.filter((project) => project.id !== featured.id)

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Project experience"
            icon="fa-solid fa-diagram-project"
            title="Systems I've"
            accent="designed & shipped."
            description="Academic and client projects spanning logistics, biometric verification, and business operations."
          />
        </Reveal>

        <Reveal className="mt-12">
          <article className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-500/10 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src={asset(featured.image)}
                alt={featured.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:absolute lg:inset-0"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-600 shadow-sm backdrop-blur">
                <i className="fa-solid fa-star" aria-hidden="true" />
                Featured
              </span>
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <i className="fa-regular fa-calendar" aria-hidden="true" />
                  {featured.period}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
                <span>{featured.role}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-slate-900">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-indigo-600">{featured.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{featured.description}</p>

              <ul className="mt-5 space-y-2.5">
                {featured.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm text-slate-600">
                    <i
                      className="fa-solid fa-circle-check mt-0.5 text-xs text-emerald-500"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <span className="text-xs text-slate-400">{featured.organization}</span>
                <ProjectLinks project={featured} />
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.id} delay={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={asset(project.image)}
                    alt={project.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar" aria-hidden="true" />
                      {project.period}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
                    <span>{project.role}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600">{project.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.slice(1).map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm text-slate-600">
                        <i
                          className="fa-solid fa-circle-check mt-0.5 text-xs text-emerald-500"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <span className="text-xs text-slate-400">{project.organization}</span>
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            More on GitHub
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
