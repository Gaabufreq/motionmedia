import React, { useRef, useLayoutEffect } from "react";
import { aboutPrinciples, aboutPositioning } from "../../data/about";
import { SectionHeading } from "../ui/SectionHeading";
import { gsap, isReducedMotion } from "../../utils/animations";
import { Compass, Palette, Zap, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

const ICON_MAP = {
  Compass,
  Palette,
  Zap,
  TrendingUp,
};

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current.querySelectorAll(".about-card");
      if (!elements.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="ABOUT THE AGENCY"
          heading="We Connect Design, Technology & Digital Growth."
          description="We build digital experiences for businesses that want a stronger online presence — combining thoughtful interface design, modern frontend engineering, creative advertising, marketing, and SEO."
        />

        {/* Top Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12 mb-16">
          {/* Left Column: Positioning Blocks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutPositioning.map((item, idx) => (
                <div
                  key={idx}
                  className="about-card p-6 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 space-y-2"
                >
                  <div className="flex items-center space-x-2 text-[var(--color-accent)] mb-1">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: HTML/CSS Digital System Visual Diagram */}
          <div className="lg:col-span-5 about-card">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-surface-primary border border-zinc-800 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center space-x-2">
                  <Layers size={18} className="text-[var(--color-accent)]" aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold uppercase text-white tracking-wider">
                    DIGITAL ECOSYSTEM
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted">INTEGRATED WORKFLOW</span>
              </div>

              {/* Connected Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-surface-secondary border border-zinc-800 flex items-center justify-between">
                  <span className="font-semibold text-white">01. Strategy & UX</span>
                  <span className="text-[10px] text-[var(--color-accent)]">Foundation</span>
                </div>
                <div className="text-center text-text-muted text-xs">↓</div>
                <div className="p-3 rounded-lg bg-surface-secondary border border-zinc-800 flex items-center justify-between">
                  <span className="font-semibold text-white">02. Design & React Build</span>
                  <span className="text-[10px] text-[var(--color-accent)]">Engineering</span>
                </div>
                <div className="text-center text-text-muted text-xs">↓</div>
                <div className="p-3 rounded-lg bg-surface-secondary border border-zinc-800 flex items-center justify-between">
                  <span className="font-semibold text-white">03. Ads, Marketing & SEO</span>
                  <span className="text-[10px] text-[var(--color-accent)]">Growth</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 text-xs text-text-muted leading-relaxed">
                Design, technology, and growth strategies operate together to deliver a cohesive digital presence.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Principles Grid */}
        <div className="pt-8 border-t border-zinc-800/60">
          <p className="text-xs font-mono font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-6">
            CORE WORKING PRINCIPLES
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPrinciples.map((pr) => {
              const IconComp = ICON_MAP[pr.icon] || Compass;

              return (
                <div
                  key={pr.number}
                  className="about-card p-6 rounded-2xl bg-surface-primary border border-zinc-800/90 hover:border-[var(--color-accent)]/50 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-surface-secondary border border-zinc-800 text-[var(--color-accent)]">
                      <IconComp size={18} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-text-muted">
                      {pr.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{pr.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};