import React from "react";
import { projectsData } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectBrowserFrame } from "../ui/ProjectBrowserFrame";
import { Button } from "../ui/Button";
import { ExternalLink, ArrowRight } from "lucide-react";

export const PortfolioSection = () => {
  const featuredProject =
    projectsData.find((p) => p.id === "alpha-muscle-house") ||
    projectsData[0];

  const productionProject = projectsData.find(
    (p) => p.id === "production-mern-ecommerce"
  );

  const otherProjects = projectsData.filter(
    (p) =>
      p.id !== featuredProject?.id &&
      p.id !== productionProject?.id
  );

  return (
    <section
      id="work"
      className="section-deferred relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="SELECTED WORK"
          heading="Digital Experiences We've Built."
          description="A selection of web applications and digital platforms engineered with a focus on usability, clean code, and modern design."
        />

        <div className="space-y-8 lg:space-y-12">

          {/* Featured Project */}
          {featuredProject && (
            <div className="project-card reveal-card group relative rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-[var(--color-accent)]/50 transition-all duration-300 p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                <div className="lg:col-span-7">
                  <ProjectBrowserFrame
                    title={featuredProject.title}
                    category={featuredProject.category}
                    liveUrl={featuredProject.liveUrl}
                    featured={true}
                  />
                </div>

                <div className="lg:col-span-5 space-y-8 text-left">

                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
                    <span>Featured Project</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface-secondary border border-zinc-800 text-xs font-mono text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featuredProject.liveUrl && (
                    <div className="pt-2">
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-[var(--color-accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-lg px-3 py-2 bg-surface-secondary border border-zinc-800 hover:border-[var(--color-accent)]/40"
                        aria-label={`Visit live website for ${featuredProject.title} (opens in new tab)`}
                      >
                        <span>Visit Website</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}

          {/* Production Project */}
          {productionProject && (
            <div className="project-card reveal-card group relative rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-[var(--color-accent)]/50 transition-all duration-300 p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                <div className="lg:col-span-7">
                  <ProjectBrowserFrame
                    title={productionProject.title}
                    category={productionProject.category}
                    liveUrl={productionProject.liveUrl}
                    featured={true}
                  />
                </div>

                <div className="lg:col-span-5 space-y-8 text-left">

                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
                    <span>Featured Project</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {productionProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {productionProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {productionProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface-secondary border border-zinc-800 text-xs font-mono text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {productionProject.liveUrl && (
                    <div className="pt-2">
                      <a
                        href={productionProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-[var(--color-accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-lg px-3 py-2 bg-surface-secondary border border-zinc-800 hover:border-[var(--color-accent)]/40"
                        aria-label={`Visit live website for ${productionProject.title} (opens in new tab)`}
                      >
                        <span>Visit Website</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card reveal-card group relative rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-[var(--color-accent)]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
                >

                  <div className="space-y-6">

                    <ProjectBrowserFrame
                      title={project.title}
                      category={project.category}
                      liveUrl={project.liveUrl}
                      featured={false}
                    />

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                        {project.category}
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                  </div>

                  <div className="space-y-4 pt-4 border-t border-zinc-800/60">

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-surface-secondary border border-zinc-800 text-xs font-mono text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-xs font-semibold text-white hover:text-[var(--color-accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                          aria-label={`Visit live website for ${project.title} (opens in new tab)`}
                        >
                          <span>Visit Website</span>
                          <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      </div>
                    )}

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-surface-primary via-surface-secondary to-surface-primary border border-zinc-800 text-center flex flex-col items-center space-y-4">

          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            HAVE A PROJECT IN MIND?
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold text-white max-w-xl">
            Let's build a digital experience tailored to your business goals.
          </h3>

          <div className="pt-2">
            <Button href="#contact" size="md" className="group">
              <span>Start a Project</span>
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};