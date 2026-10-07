import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AGENCY_CONFIG } from "../../utils/constants";

export const Layout = ({ children, title, description }) => {
  const pageTitle = title
    ? title.includes(AGENCY_CONFIG.name)
      ? title
      : `${title} | ${AGENCY_CONFIG.name}`
    : AGENCY_CONFIG.name;

  const pageDesc = description || AGENCY_CONFIG.tagline;

  const canonicalUrl = "https://motionmedia-five.vercel.app/";

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: AGENCY_CONFIG.name,
    description: pageDesc,
    url: canonicalUrl,
  };

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col selection:bg-[var(--color-accent)] selection:text-white">
      <Helmet>
        {/* Core Metadata */}
        <html lang="en" />

        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDesc}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />

        <meta
          property="og:image"
          content={`${canonicalUrl}og-image.png`}
        />

        {/* Twitter Card */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:url"
          content={canonicalUrl}
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDesc}
        />

        <meta
          name="twitter:image"
          content={`${canonicalUrl}og-image.png`}
        />

        {/* Organization Structured Data */}
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