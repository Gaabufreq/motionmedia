import React, { useRef, useLayoutEffect } from "react";
import { Button } from "../ui/Button";
import { gsap, isReducedMotion } from "../../utils/animations";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTASection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const card = sectionRef.current.querySelector(".final-cta-card");
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 border-t border-zinc-800/60 bg-surface-primary/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="final-cta-card relative p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-r from-surface-primary via-surface-secondary to-surface-primary border border-zinc-800 shadow-2xl text-center flex flex-col items-center space-y-6 overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-accent)]/10 blur-3xl rounded-full pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} aria-hidden="true" />
            <span>READY TO GROW YOUR DIGITAL PRESENCE?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            Have a Project in Mind? Let's Turn Your Vision Into Reality.
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            We partner with businesses to design, engineer, and launch digital experiences built around real opportunities and clarity.
          </p>

          {/* CTA Action Button */}
          <div className="pt-2">
            <Button href="#contact" size="lg" className="group">
              <span>Start a Project</span>
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};