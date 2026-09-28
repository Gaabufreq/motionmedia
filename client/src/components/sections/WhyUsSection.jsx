import React, { useRef, useLayoutEffect } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { gsap, isReducedMotion } from "../../utils/animations";
import { ShieldCheck, Layers, Cpu, Zap, MessageSquare, Sliders } from "lucide-react";

const PRINCIPLES = [
  {
    number: "01",
    title: "One Connected Digital Workflow",
    description: "Design, frontend development, ad creatives, marketing, and SEO are planned together under one cohesive strategy rather than siloed efforts.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Business-First Thinking",
    description: "We align digital decisions around your real target audience, usability, conversion paths, and business objectives — not just visual aesthetics.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Modern Engineering",
    description: "Built with performant frontend standards (React, Tailwind CSS, clean JavaScript) ensuring long-term code maintainability and scalability.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Performance & Accessibility Focus",
    description: "We prioritize clean semantic markup, fast load times, responsive layouts, and accessible interfaces across all devices.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Transparent Communication",
    description: "Clear expectations, scope definitions, and technical decisions throughout the lifecycle with no hidden complexity.",
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Flexible Technical Solutions",
    description: "Tailored to your specific project scope and goals rather than forcing every business into a rigid, one-size-fits-all template.",
    icon: Sliders,
  },
];

export const WhyUsSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".principle-card");
      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-surface-primary/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Editorial Statement & Overview */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="WHY CHOOSE US"
              heading="Good Digital Work Connects Design, Technology & Business."
              description="We believe building effective websites and digital experiences requires a balanced approach — combining visual quality with clean frontend code and clear strategy."
              className="mb-6"
            />

            <div className="p-6 rounded-2xl bg-surface-primary border border-zinc-800 space-y-3">
              <p className="text-xs font-mono font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                OUR COMMITMENT
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                No exaggerated guarantees or hidden complexity — just well-designed, reliable, and scalable digital solutions tailored to your business goals.
              </p>
            </div>
          </div>

          {/* Right Column: Principles List */}
          <div className="lg:col-span-7 space-y-4">
            {PRINCIPLES.map((principle) => {
              const IconComponent = principle.icon;

              return (
                <div
                  key={principle.number}
                  className="principle-card group p-6 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg flex items-start space-x-4 sm:space-x-5"
                >
                  <div className="p-3 rounded-xl bg-surface-secondary border border-zinc-800 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors flex-shrink-0">
                    <IconComponent size={20} aria-hidden="true" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-semibold text-text-muted">
                        {principle.number}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};