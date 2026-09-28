import React, { useRef, useLayoutEffect } from "react";
import { pricingData } from "../../data/pricing";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { gsap, isReducedMotion } from "../../utils/animations";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".pricing-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
        },
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
      id="pricing"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PRICING"
          heading="Flexible Solutions for Different Business Needs."
          description="Select a starting point or discuss a custom digital solution tailored to your specific scope, features, and growth goals."
        />

        {/* 3-Tier Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-surface-primary border-2 border-[var(--color-accent)]/80 shadow-2xl shadow-[var(--color-accent)]/10"
                  : "bg-surface-primary border border-zinc-800/90 hover:border-zinc-700"
              }`}
            >
              {/* Optional "Recommended" Badge for Featured Plan */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold uppercase tracking-wider shadow-md">
                  <Sparkles size={12} aria-hidden="true" />
                  <span>Recommended</span>
                </div>
              )}

              <div>
                {/* Plan Name & Tagline */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed min-h-[40px]">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-zinc-800/80">
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </p>
                  {plan.priceNote && (
                    <p className="text-xs text-text-muted mt-1 font-medium">
                      {plan.priceNote}
                    </p>
                  )}
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-4">
                    Included Capabilities
                  </p>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="p-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] mt-0.5 flex-shrink-0">
                          <Check size={14} aria-hidden="true" />
                        </div>
                        <span className="leading-snug text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action CTA */}
              <div className="pt-4">
                <Button
                  href="#contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  size="md"
                  className="w-full justify-center group"
                >
                  <span>{plan.ctaText || "Start a Project"}</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};