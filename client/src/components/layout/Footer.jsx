import React from "react";
import { AGENCY_CONFIG, NAV_LINKS } from "../../utils/constants";
import { ArrowUpRight, Heart } from "lucide-react";

const FOOTER_SERVICES = [
  { name: "Web Design", href: "#services" },
  { name: "Web Development", href: "#services" },
  { name: "Ad Creation", href: "#services" },
  { name: "Digital Marketing", href: "#services" },
  { name: "SEO Optimization", href: "#services" },
  { name: "Website Consultation", href: "#services" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-primary border-t border-zinc-800/80 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="/"
              className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition inline-block"
            >
              {AGENCY_CONFIG.name}
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {AGENCY_CONFIG.tagline}. We build digital experiences that help forward-thinking businesses turn attention into growth.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-secondary border border-zinc-800 text-xs text-text-muted font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Projects</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider">
              Services
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {FOOTER_SERVICES.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href={srv.href}
                    className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{srv.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} {AGENCY_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md px-2 py-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};