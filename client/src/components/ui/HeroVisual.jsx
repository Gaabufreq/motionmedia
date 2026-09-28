import React from "react";
import {
  Layout,
  Search,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">

      {/* Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/20 to-purple-600/10 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

      {/* Main Agency Browser Mockup */}
      <div className="hero-main-mockup hero-visual-enter relative rounded-2xl bg-surface-primary border border-zinc-800 shadow-2xl overflow-hidden z-10 transition-transform duration-300">

        {/* Browser Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary border-b border-zinc-800/80">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="flex items-center px-3 py-1 bg-background/60 rounded-md border border-zinc-800 text-xs text-text-muted space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate max-w-[140px] sm:max-w-[200px]">
              agency.project/live
            </span>
          </div>

          <div className="w-12" />
        </div>

        {/* Mockup Canvas */}
        <div className="p-5 sm:p-6 space-y-5 bg-gradient-to-b from-surface-primary to-background">

          {/* Navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] font-bold text-xs">
                A
              </div>

              <div className="h-2 w-16 bg-zinc-700/80 rounded" />
            </div>

            <div className="flex space-x-2">
              <div className="h-2 w-10 bg-zinc-800 rounded" />
              <div className="h-2 w-10 bg-zinc-800 rounded" />
            </div>
          </div>

          {/* Mockup Hero */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-surface-secondary to-zinc-900 border border-zinc-800 space-y-3">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[10px] sm:text-xs font-semibold">
              <Sparkles size={12} />
              <span>Digital Growth Engine</span>
            </div>

            <div className="h-4 w-3/4 bg-zinc-100/90 rounded" />
            <div className="h-3 w-1/2 bg-zinc-600/70 rounded" />

            <div className="flex space-x-2 pt-2">
              <div className="h-7 w-20 bg-[var(--color-accent)] rounded-lg" />
              <div className="h-7 w-16 bg-zinc-800 border border-zinc-700 rounded-lg" />
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-2 gap-3">

            <div className="p-3 rounded-lg bg-surface-secondary/80 border border-zinc-800 space-y-2">
              <div className="p-1.5 w-fit rounded bg-indigo-500/10 text-indigo-400">
                <Layout size={14} />
              </div>

              <div className="h-2.5 w-16 bg-zinc-300 rounded" />
              <div className="h-2 w-full bg-zinc-700/60 rounded" />
            </div>

            <div className="p-3 rounded-lg bg-surface-secondary/80 border border-zinc-800 space-y-2">
              <div className="p-1.5 w-fit rounded bg-emerald-500/10 text-emerald-400">
                <TrendingUp size={14} />
              </div>

              <div className="h-2.5 w-16 bg-zinc-300 rounded" />
              <div className="h-2 w-full bg-zinc-700/60 rounded" />
            </div>

          </div>
        </div>
      </div>

      {/* Floating Card 1 */}
      <div className="hero-float-1 hero-float-enter absolute -top-4 -right-2 sm:-right-6 z-20 p-3 sm:p-4 rounded-xl bg-surface-secondary/95 border border-zinc-700/80 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-3">
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
          <Search size={18} />
        </div>

        <div>
          <p className="text-xs font-semibold text-white">
            SEO Optimization
          </p>
          <p className="text-[10px] text-text-secondary">
            Organic Visibility Engine
          </p>
        </div>
      </div>

      {/* Floating Card 2 */}
      <div className="hero-float-2 hero-float-enter absolute -bottom-6 -left-2 sm:-left-6 z-20 p-3 sm:p-4 rounded-xl bg-surface-secondary/95 border border-zinc-700/80 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-3">
        <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
          <TrendingUp size={18} />
        </div>

        <div>
          <div className="flex items-center space-x-1">
            <CheckCircle2 size={12} className="text-emerald-400" />
            <p className="text-xs font-semibold text-white">
              Campaign Active
            </p>
          </div>

          <p className="text-[10px] text-text-secondary">
            Multi-Channel Marketing
          </p>
        </div>
      </div>

      {/* Floating Card 3 */}
      <div className="hero-float-3 hero-float-enter absolute -bottom-4 right-4 z-20 px-3 py-2 rounded-lg bg-surface-secondary/95 border border-zinc-700/80 shadow-lg backdrop-blur-md hidden lg:flex items-center space-x-2">
        <Sparkles size={14} className="text-yellow-400" />
        <span className="text-[11px] font-medium text-zinc-200">
          Creative Ad Mockups
        </span>
      </div>

    </div>
  );
};