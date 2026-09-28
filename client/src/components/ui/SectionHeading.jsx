import React from "react";
import clsx from "clsx";

export const SectionHeading = ({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}) => {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={clsx("flex flex-col max-w-3xl mb-12 md:mb-16", alignClass, className)}>
      {eyebrow && (
        <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {eyebrow}
        </span>
      )}
      {heading && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          {heading}
        </h2>
      )}
      {description && (
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};