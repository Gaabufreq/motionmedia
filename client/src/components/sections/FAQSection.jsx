import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../data/faq";
import { SectionHeading } from "../ui/SectionHeading";
import { gsap, isReducedMotion } from "../../utils/animations";
import { Plus, Minus } from "lucide-react";

export const FAQSection = () => {
  const [openId, setOpenId] = useState(faqData[0]?.id || null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".faq-item");
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
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

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-surface-primary/30 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          heading="Everything You Need to Know."
          description="Clear answers about our services, project process, design approach, and technical capabilities."
          align="center"
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4 mt-12">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="faq-item rounded-2xl bg-surface-primary border border-zinc-800/90 overflow-hidden transition-colors duration-200"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-inset rounded-2xl cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white hover:text-[var(--color-accent)] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl bg-surface-secondary border border-zinc-800 flex-shrink-0 transition-colors ${
                        isOpen ? "text-[var(--color-accent)] border-[var(--color-accent)]/50" : "text-text-muted"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={18} aria-hidden="true" />
                      ) : (
                        <Plus size={18} aria-hidden="true" />
                      )}
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: isReducedMotion() ? 0.01 : 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-zinc-800/50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};