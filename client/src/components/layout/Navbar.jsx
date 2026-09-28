import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AGENCY_CONFIG, NAV_LINKS } from "../../utils/constants";
import { Button } from "../ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll state for subtle glassmorphism elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -15 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 + 0.1, duration: 0.25 },
    }),
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-zinc-800/90 shadow-lg shadow-black/40 py-3"
          : "bg-background/60 backdrop-blur-sm border-b border-zinc-800/40 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-lg px-1 py-0.5"
        >
          {AGENCY_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button href="#contact" size="sm">
            Start a Project
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-surface-primary/98 backdrop-blur-xl border-b border-zinc-800/90 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-4 pb-8 space-y-4">
              <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    custom={i}
                    variants={itemVariants}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-text-secondary hover:text-white hover:bg-surface-secondary/80 px-4 py-3 rounded-xl transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                custom={NAV_LINKS.length}
                variants={itemVariants}
                className="pt-2 px-2"
              >
                <Button
                  href="#contact"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Start a Project</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};