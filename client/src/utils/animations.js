import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check reduced-motion preference.
 */
export const isReducedMotion = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
};

/**
 * Lightweight GSAP scroll reveal.
 *
 * Used only by sections that still require GSAP-based
 * animation. Hero animations are now CSS-based.
 */
export const createScrollReveal = (
  containerRef,
  selector,
  options = {}
) => {
  if (!containerRef.current || isReducedMotion()) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const elements =
      containerRef.current.querySelectorAll(selector);

    if (!elements.length) return;

    gsap.fromTo(
      elements,
      {
        autoAlpha: 0,
        y: options.y ?? 30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: options.duration ?? 0.7,
        stagger: options.stagger ?? 0.1,
        ease: options.ease ?? "power2.out",

        scrollTrigger: {
          trigger: containerRef.current,
          start: options.start ?? "top 85%",
          toggleActions: "play none none none",
          once: true,
          ...options.scrollTrigger,
        },
      }
    );
  }, containerRef);

  return () => ctx.revert();
};

/**
 * Lightweight parallax.
 *
 * This intentionally avoids scrub-based animation because
 * scrub continuously updates transforms during scrolling.
 */
export const createParallaxEffect = (
  containerRef,
  targetSelector,
  speed = 0.2
) => {
  if (!containerRef.current || isReducedMotion()) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const targets =
      containerRef.current.querySelectorAll(targetSelector);

    if (!targets.length) return;

    gsap.to(targets, {
      y: () => -50 * speed,
      ease: "none",

      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: false,
        once: true,
      },
    });
  }, containerRef);

  return () => ctx.revert();
};

export { gsap, ScrollTrigger };