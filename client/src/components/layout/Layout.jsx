import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AGENCY_CONFIG } from "../../utils/constants";

export const Layout = ({ children, title, description }) => {
  const pageTitle = title ? `${title} | ${AGENCY_CONFIG.name}` : AGENCY_CONFIG.name;
  const pageDesc = description || AGENCY_CONFIG.tagline;
  const canonicalUrl = AGENCY_CONFIG.domain || "https://youragency.com";

  // Schema.org ProfessionalService Structured Data
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": AGENCY_CONFIG.name,
    "description": pageDesc,
    "url": canonicalUrl,
    "telephone": AGENCY_CONFIG.contact?.phone || "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": AGENCY_CONFIG.contact?.address || "",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Agency Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ad Creation",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Consultation",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col selection:bg-[var(--color-accent)] selection:text-white">
      <Helmet>
        {/* Core Metadata */}
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.png`} />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgData)}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};