import React, { useRef, useLayoutEffect } from "react";
import { processSteps } from "../../data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { gsap, isReducedMotion } from "../../utils/animations";
import {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";

const ICON_MAP = {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  RefreshCw,
};

export const ProcessSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const nodes = sectionRef.current.querySelectorAll(".process-node");
      if (!nodes.length) return;

      gsap.fromTo(
        nodes,
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
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR PROCESS"
          heading="From Idea to Digital Experience."
          description="A structured workflow designed to align business objectives, user experience design, and performant engineering at every stage."
        />

        {/* Process Steps Grid & Connected Timeline */}
        <div className="relative mt-12">
          {/* Subtle Horizontal Decorative Connector (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800/60 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {processSteps.map((step) => {
              const IconComponent = ICON_MAP[step.icon] || Code2;

              return (
                <div
                  key={step.number}
                  className="process-node group relative p-6 sm:p-7 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Bar: Step Index & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-xl bg-surface-secondary border border-zinc-800 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                        <IconComponent size={20} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-[var(--color-accent)] tracking-wider">
                        STEP {step.number}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-text-muted mb-3">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
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