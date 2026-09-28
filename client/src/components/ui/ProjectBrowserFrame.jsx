import React from "react";
import { ExternalLink, Globe, ShieldCheck } from "lucide-react";

export const ProjectBrowserFrame = ({
  title,
  category,
  liveUrl,
  featured = false,
}) => {
  // Extract display domain cleanly
  let displayDomain = "project.live";

  try {
    if (liveUrl) {
      displayDomain = new URL(liveUrl).hostname;
    }
  } catch (e) {
    displayDomain = "project.live";
  }

  return (
    <div
      className="relative w-full min-h-[280px] sm:min-h-[360px] rounded-2xl bg-surface-primary border border-zinc-800/90 overflow-hidden shadow-2xl group transition-all duration-300"
      aria-hidden="true"
    >
      {/* Top Browser Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary border-b border-zinc-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <div className="flex items-center px-3 py-1 bg-background/80 rounded-md border border-zinc-800 text-[11px] text-text-muted space-x-2">
          <ShieldCheck size={12} className="text-emerald-400" />

          <span className="truncate max-w-[160px] sm:max-w-[240px] font-mono">
            https://{displayDomain}
          </span>
        </div>

        <div className="w-12 flex justify-end">
          <Globe size={14} className="text-zinc-600" />
        </div>
      </div>

      {/* Internal Visual Showcase Preview Canvas */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-surface-primary via-background to-surface-secondary h-full min-h-[220px] sm:min-h-[300px] flex flex-col justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold">
            <span>{category}</span>
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {title}
          </p>
        </div>

        <div className="pt-8 flex items-center justify-between">
          <div className="flex space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[var(--color-accent)] transition-colors duration-300" />
            <span className="w-2 h-2 rounded-full bg-zinc-800" />
            <span className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>

          <div className="inline-flex items-center space-x-1.5 text-xs font-medium text-text-muted group-hover:text-white transition-colors duration-200">
            <span>Preview Build</span>

            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};