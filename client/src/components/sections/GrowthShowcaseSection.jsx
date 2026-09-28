import React, { useRef, useLayoutEffect } from "react";
import { growthData } from "../../data/growth";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { gsap, isReducedMotion } from "../../utils/animations";
import {
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Eye,
} from "lucide-react";

export const GrowthShowcaseSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current.querySelectorAll(".growth-card");
      if (!elements.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { advertising, marketing, seo } = growthData;

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-surface-primary/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="GROWTH & VISIBILITY"
          heading="Creative, Marketing & Search — Working Together."
          description="From high-impact ad creatives to structured digital marketing and technical SEO, we build the digital touchpoints that help businesses stay visible and communicate clearly with their audience."
        />

        {/* Feature Showcase Grid */}
        <div className="space-y-8 lg:space-y-12 mt-12">
          {/* Subsection 1: Ad Creation Showcase (Full Width Card) */}
          <div className="growth-card p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Creative Mockup Frame */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-surface-secondary via-background to-surface-secondary border border-zinc-800/90 shadow-xl overflow-hidden">
                  {/* Decorative Frame Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800/80">
                    <div className="flex items-center space-x-2">
                      <Sparkles size={16} className="text-yellow-400" aria-hidden="true" />
                      <span className="text-xs font-mono font-semibold text-text-muted">
                        AD CREATIVE CANVAS
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-zinc-500">
                      <Smartphone size={12} aria-hidden="true" />
                      <span>MULTIPLE FORMATS</span>
                    </div>
                  </div>

                  {/* Ad Creative Mockup Core */}
                  <div className="p-6 rounded-lg bg-surface-primary border border-zinc-700/60 space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-[11px] font-semibold tracking-wider uppercase">
                        CAMPAIGN PREVIEW
                      </span>
                      <span className="text-[10px] text-text-muted font-mono">1080 x 1350</span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        ELEVATE YOUR BRAND PRESENCE
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        High-impact visual communication engineered for paid acquisition and brand recall.
                      </p>
                    </div>

                    <div className="p-3 rounded bg-surface-secondary border border-zinc-800 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Interactive Call to Action</span>
                      <div className="px-3 py-1 rounded bg-[var(--color-accent)] text-white text-xs font-medium">
                        Explore
                      </div>
                    </div>
                  </div>

                  {/* Format Badges */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                    {advertising.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2.5 py-1 rounded bg-background border border-zinc-800 text-[11px] font-mono text-text-muted"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Copy & Capability List */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
                  <Eye size={14} aria-hidden="true" />
                  <span>{advertising.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {advertising.title}
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {advertising.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {advertising.capabilities.map((item) => (
                    <div key={item} className="flex items-center space-x-2.5">
                      <CheckCircle2 size={16} className="text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subsections 2 & 3: Digital Marketing + SEO Workflow (2 Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Subsection 2: Digital Marketing Card */}
            <div className="growth-card p-6 sm:p-8 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[var(--color-accent)] mb-4">
                  <Layers size={20} aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                    {marketing.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {marketing.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {marketing.description}
                </p>

                {/* Workflow Sequence List */}
                <div className="space-y-3 bg-surface-secondary/60 p-4 rounded-xl border border-zinc-800">
                  {marketing.steps.map((st) => (
                    <div
                      key={st.step}
                      className="flex items-start space-x-3 p-2.5 rounded-lg bg-surface-primary border border-zinc-800/80"
                    >
                      <span className="text-xs font-mono font-bold text-[var(--color-accent)] mt-0.5">
                        {st.step}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">{st.name}</p>
                        <p className="text-[11px] text-text-muted mt-0.5">{st.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subsection 3: SEO System Card */}
            <div className="growth-card p-6 sm:p-8 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[var(--color-accent)] mb-4">
                  <Search size={20} aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                    {seo.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {seo.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {seo.description}
                </p>

                {/* SEO Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seo.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-3 rounded-lg bg-surface-secondary/80 border border-zinc-800 space-y-1"
                    >
                      <div className="flex items-center space-x-1.5">
                        <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" aria-hidden="true" />
                        <p className="text-xs font-bold text-white">{pillar.title}</p>
                      </div>
                      <p className="text-[11px] text-text-muted leading-tight pl-5">
                        {pillar.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-primary border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-base font-bold text-white">
              Ready to elevate your digital marketing & search visibility?
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Discuss your project goals and campaign requirements with our team.
            </p>
          </div>
          <Button href="#contact" size="md" className="group flex-shrink-0">
            <span>Start a Project</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};