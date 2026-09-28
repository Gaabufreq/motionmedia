import React from "react";
import { Button } from "../ui/Button";
import { HeroVisual } from "../ui/HeroVisual";
import { ArrowRight, Eye } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden"
    >
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[var(--color-accent)]/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Eyebrow */}
            <div className="hero-eyebrow hero-enter-1 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface-secondary border border-zinc-800 text-xs sm:text-sm font-semibold tracking-wider text-[var(--color-accent)] uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>Digital Experiences • Built for Growth</span>
            </div>

            {/* LCP Headline - intentionally static */}
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              We Build Digital Experiences That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[var(--color-accent)]">
                Grow Businesses.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description hero-enter-2 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              We design, build, and scale digital experiences that help
              forward-thinking businesses turn user attention into meaningful
              opportunities across web, ad creatives, and search.
            </p>

            {/* CTAs */}
            <div className="hero-ctas hero-enter-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#contact" size="lg" className="group">
                <span>Start a Project</span>
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>

              <Button
                href="#work"
                variant="secondary"
                size="lg"
                className="group"
              >
                <Eye
                  size={18}
                  className="mr-2 text-zinc-400 group-hover:text-white transition-colors"
                />
                <span>View Our Work</span>
              </Button>
            </div>

            {/* Capability Badges */}
            <div className="hero-enter-4 pt-6 border-t border-zinc-800/80 flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-muted font-medium">
              <span>Web Design</span>
              <span>•</span>
              <span>Web Development</span>
              <span>•</span>
              <span>Ad Creation</span>
              <span>•</span>
              <span>Digital Marketing</span>
              <span>•</span>
              <span>SEO</span>
              <span>•</span>
              <span>Consultation</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};