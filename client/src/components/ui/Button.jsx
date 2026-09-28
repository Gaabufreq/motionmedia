import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  primary:
    "bg-[var(--color-accent)] hover:opacity-90 text-white font-medium shadow-lg shadow-[var(--color-accent)]/20 border border-transparent",
  secondary:
    "bg-surface-secondary hover:bg-surface border border-zinc-800 text-white font-medium",
  outline:
    "bg-transparent border border-zinc-800 hover:border-[var(--color-accent)] text-zinc-300 hover:text-white font-medium",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
  }[size];

  const combinedClasses = twMerge(
    clsx(
      "inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variantStyles[variant],
      sizeStyles,
      className
    )
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};