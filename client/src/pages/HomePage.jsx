import React, {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import { Layout } from "../components/layout/Layout";
import { HeroSection } from "../components/sections/HeroSection";

/*
 * Only Hero is loaded immediately.
 * Below-the-fold sections are loaded when they approach the viewport.
 */

const ServicesSection = lazy(() =>
  import("../components/sections/ServicesSection").then((module) => ({
    default: module.ServicesSection,
  }))
);

const CapabilitiesSection = lazy(() =>
  import("../components/sections/CapabilitiesSection").then((module) => ({
    default: module.CapabilitiesSection,
  }))
);

const PortfolioSection = lazy(() =>
  import("../components/sections/PortfolioSection").then((module) => ({
    default: module.PortfolioSection,
  }))
);

const ProcessSection = lazy(() =>
  import("../components/sections/ProcessSection").then((module) => ({
    default: module.ProcessSection,
  }))
);

const WhyUsSection = lazy(() =>
  import("../components/sections/WhyUsSection").then((module) => ({
    default: module.WhyUsSection,
  }))
);

const PricingSection = lazy(() =>
  import("../components/sections/PricingSection").then((module) => ({
    default: module.PricingSection,
  }))
);

const GrowthShowcaseSection = lazy(() =>
  import("../components/sections/GrowthShowcaseSection").then((module) => ({
    default: module.GrowthShowcaseSection,
  }))
);

const AboutSection = lazy(() =>
  import("../components/sections/AboutSection").then((module) => ({
    default: module.AboutSection,
  }))
);

const FAQSection = lazy(() =>
  import("../components/sections/FAQSection").then((module) => ({
    default: module.FAQSection,
  }))
);

const FinalCTASection = lazy(() =>
  import("../components/sections/FinalCTASection").then((module) => ({
    default: module.FinalCTASection,
  }))
);

const ContactSection = lazy(() =>
  import("../components/sections/ContactSection").then((module) => ({
    default: module.ContactSection,
  }))
);

/**
 * Defers rendering until the section is close to the viewport.
 *
 * rootMargin intentionally uses a large preload distance so
 * the user doesn't see a blank section while scrolling.
 */
const DeferredSection = ({
  children,
  minHeight = "120px",
}) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "1000px 0px",
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={!shouldRender ? { minHeight } : undefined}
      className="deferred-section"
    >
      {shouldRender ? children : null}
    </div>
  );
};

export const HomePage = () => {
  return (
    <Layout
      title="Motion Media | Digital Experience Agency"
      description="Motion Media is a digital experience agency specializing in web design, web development, digital marketing, SEO, and creative ad solutions."
    >
      {/* Immediate LCP content */}
      <HeroSection />

      {/* Below-the-fold content */}
      <DeferredSection minHeight="500px">
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="450px">
        <Suspense fallback={null}>
          <CapabilitiesSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="700px">
        <Suspense fallback={null}>
          <PortfolioSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="600px">
        <Suspense fallback={null}>
          <ProcessSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="500px">
        <Suspense fallback={null}>
          <WhyUsSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="650px">
        <Suspense fallback={null}>
          <PricingSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="650px">
        <Suspense fallback={null}>
          <GrowthShowcaseSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="500px">
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="500px">
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="300px">
        <Suspense fallback={null}>
          <FinalCTASection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="600px">
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </DeferredSection>
    </Layout>
  );
};