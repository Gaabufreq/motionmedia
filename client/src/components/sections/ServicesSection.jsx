import React, { useRef, useLayoutEffect } from "react";
import { servicesData } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { gsap, isReducedMotion } from "../../utils/animations";
import {
  Palette,
  Code2,
  Sparkles,
  TrendingUp,
  Search,
  MessageSquareCode,
  ArrowUpRight,
} from "lucide-react";

const ICON_MAP = {
  Palette,
  Code2,
  Sparkles,
  TrendingUp,
  Search,
  MessageSquareCode,
};

export const ServicesSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".service-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="WHAT WE DO"
          heading="Digital Solutions Built Around Your Business."
          description="We combine interface design, engineering, creative advertising, marketing, and SEO into one integrated digital ecosystem."
        />

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;

            return (
              <div
                key={service.id}
                className="service-card group relative p-6 sm:p-8 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Service Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-surface-secondary border border-zinc-800 text-[var(--color-accent)] group-hover:scale-105 group-hover:bg-[var(--color-accent)]/10 transition-all duration-300">
                      <IconComponent size={22} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-text-muted tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Indicator */}
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-medium text-text-muted group-hover:text-white transition-colors duration-200">
                  <span>Explore Service</span>
                  <ArrowUpRight
                    size={16}
                    className="text-text-muted group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};