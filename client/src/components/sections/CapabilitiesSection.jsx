import React, { useRef, useLayoutEffect } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { gsap, isReducedMotion } from "../../utils/animations";
import {
  Compass,
  Palette,
  Code2,
  Sparkles,
  Target,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Strategy",
    subtitle: "Brand Positioning & Audits",
    description: "Aligning user needs, technical constraints, and growth goals into a clear roadmap.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Design",
    subtitle: "UI/UX & Visual Identity",
    description: "Crafting modern, accessible interface layouts that reflect your brand ethos.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    subtitle: "Frontend Application Build",
    description: "Engineering clean, responsive React code focused on load speed and clarity.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Ad Creation",
    subtitle: "Creative Visual Assets",
    description: "Designing promotional visuals and marketing creatives built for campaign engagement.",
    icon: Sparkles,
  },
  {
    step: "05",
    title: "Digital Marketing",
    subtitle: "Campaign Positioning",
    description: "Connecting multi-channel messaging to attract qualified prospective clients.",
    icon: Target,
  },
  {
    step: "06",
    title: "SEO",
    subtitle: "Search & Technical Audit",
    description: "Optimizing structure, content, and metadata to capture high-intent organic search.",
    icon: BarChart3,
  },
];

export const CapabilitiesSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const pipelineItems = sectionRef.current.querySelectorAll(".pipeline-node");
      if (!pipelineItems.length) return;

      gsap.fromTo(
        pipelineItems,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
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
      id="capabilities"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-surface-primary/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR CAPABILITIES"
          heading="One Agency. Every Digital Touchpoint."
          description="Instead of managing separate vendors for design, development, advertising, and search, we connect your entire digital presence under one cohesive strategy."
        />

        {/* Capability Pipeline Flow */}
        <div className="relative mt-12">
          {/* Subtle Connecting Line Background (Desktop Horizontal Indicator) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800/80 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {PIPELINE_STEPS.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.step}
                  className="pipeline-node group relative p-6 sm:p-7 rounded-2xl bg-surface-primary border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    {/* Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-lg bg-surface-secondary border border-zinc-800 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                          <IconComponent size={20} aria-hidden="true" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                          Phase {item.step}
                        </span>
                      </div>
                      <CheckCircle
                        size={16}
                        className="text-zinc-700 group-hover:text-emerald-400 transition-colors"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-text-muted mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {item.description}
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