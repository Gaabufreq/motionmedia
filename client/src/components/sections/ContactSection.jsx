import React, { useState, useRef, useLayoutEffect } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { AGENCY_CONFIG } from "../../utils/constants";
import { gsap, isReducedMotion } from "../../utils/animations";
import {
  Palette,
  Code2,
  Sparkles,
  TrendingUp,
  Search,
  MessageSquareCode,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Briefcase,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Web Design",
  "Web Development",
  "E-Commerce",
  "Ad Creation",
  "Digital Marketing",
  "SEO",
  "Website Consultation",
  "Other",
];

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
];

const SERVICE_ICONS = [
  { label: "Web Design", icon: Palette },
  { label: "Web Development", icon: Code2 },
  { label: "Ad Creation", icon: Sparkles },
  { label: "Digital Marketing", icon: TrendingUp },
  { label: "SEO", icon: Search },
  { label: "Website Consultation", icon: MessageSquareCode },
];

export const ContactSection = () => {
  const sectionRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    website: "", // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // GSAP Scroll Reveal
  useLayoutEffect(() => {
    if (!sectionRef.current || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".contact-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Form Field Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Client-Side Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Silent honeypot check for bots
    if (formData.website) {
      setStatus("success");
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Verify configuration
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS configuration keys are missing in environment variables.");
      // Graceful error state without exposing internal keys to the user
      setTimeout(() => {
        setStatus("error");
        setErrorMessage("The inquiry form is temporarily unavailable. Please try reaching out again shortly.");
      }, 600);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      service: formData.service,
      budget: formData.budget || "Not specified",
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        website: "",
      });
      setErrors({});
    } catch (err) {
      console.error("EmailJS Submission Error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your message. Please try again.");
    }
  };

  // Check if contact email is real or placeholder
  const hasRealEmail =
    AGENCY_CONFIG.contact?.email &&
    !AGENCY_CONFIG.contact.email.includes("youragency.com") &&
    !AGENCY_CONFIG.contact.email.includes("example.com");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 border-t border-zinc-800/60 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="START A PROJECT"
          heading="Let's Build Something Worth Talking About."
          description="Tell us about your business, your goals, and what you want to build. We'll review your requirements and get back to you with the next steps."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12">
          {/* Left Column: Information & Capabilities Panel */}
          <div className="contact-card lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-primary border border-zinc-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Talk</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Share your project vision, target timeline, required services, and business objectives. We look forward to reviewing your inquiry.
                </p>
              </div>

              {/* Service Capabilities Grid */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                <p className="text-xs font-mono font-semibold uppercase text-text-muted tracking-wider">
                  WHAT WE CAN HELP WITH
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_ICONS.map((srv) => {
                    const IconComp = srv.icon;
                    return (
                      <div
                        key={srv.label}
                        className="flex items-center space-x-2.5 p-2 rounded-lg bg-surface-secondary/80 border border-zinc-800/80 text-xs font-medium text-zinc-300"
                      >
                        <IconComp size={15} className="text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                        <span className="truncate">{srv.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expectations & Direct Details */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                <div className="flex items-start space-x-3 text-xs text-text-secondary">
                  <Clock size={16} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Prompt response following inquiry review</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-text-secondary">
                  <Briefcase size={16} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Clear project scope and requirement breakdown</span>
                </div>
              </div>

              {/* Direct Contact Info Display (if configured) */}
              {hasRealEmail ? (
                <div className="pt-4 border-t border-zinc-800/80">
                  <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider mb-1">
                    DIRECT EMAIL
                  </p>
                  <a
                    href={`mailto:${AGENCY_CONFIG.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-[var(--color-accent)] transition-colors"
                  >
                    {AGENCY_CONFIG.contact.email}
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-zinc-800/80">
                  <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider mb-1">
                    INQUIRY SERVICE
                  </p>
                  <p className="text-xs text-text-secondary">
                    Direct form inquiry • Client-side notification service
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Lead Contact Form */}
          <div className="contact-card lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface-primary border border-zinc-800/90 shadow-xl">
              {/* Success Notification State */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 space-y-3 mb-6"
                >
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-lg">
                    <CheckCircle2 size={22} aria-hidden="true" />
                    <span>Inquiry Received</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-emerald-300">
                    Thanks for reaching out! We've received your project inquiry and will review your requirements shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-xs font-semibold text-emerald-400 underline hover:text-emerald-300 transition-colors pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}

              {/* General Submission Error State */}
              {status === "error" && errorMessage && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 flex items-start space-x-3 mb-6 text-xs sm:text-sm"
                >
                  <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-red-300">Submission Notice</p>
                    <p className="text-red-300/90 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field for bot protection (visually hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp">Website</label>
                  <input
                    type="text"
                    id="website-hp"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Full Name <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-surface-secondary border ${
                        errors.name ? "border-red-500 focus:ring-red-500" : "border-zinc-800 focus:border-[var(--color-accent)]"
                      } text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 flex items-center space-x-1">
                        <AlertCircle size={12} className="flex-shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Email Address <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-surface-secondary border ${
                        errors.email ? "border-red-500 focus:ring-red-500" : "border-zinc-800 focus:border-[var(--color-accent)]"
                      } text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 flex items-center space-x-1">
                        <AlertCircle size={12} className="flex-shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Phone / WhatsApp <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 **********"
                      className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-zinc-800 focus:border-[var(--color-accent)] text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                    />
                  </div>

                  {/* Company / Business */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Company / Business <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Digital Infotec System"
                      className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-zinc-800 focus:border-[var(--color-accent)] text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Interested Service <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={errors.service ? "true" : "false"}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-surface-secondary border ${
                        errors.service ? "border-red-500 focus:ring-red-500" : "border-zinc-800 focus:border-[var(--color-accent)]"
                      } text-white text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all cursor-pointer`}
                    >
                      <option value="" disabled className="bg-surface-primary text-zinc-500">
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface-primary text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="text-xs text-red-400 flex items-center space-x-1">
                        <AlertCircle size={12} className="flex-shrink-0" aria-hidden="true" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-2">
                    <label htmlFor="contact-budget" className="block text-xs font-semibold text-white uppercase tracking-wider">
                      Estimated Budget <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-zinc-800 focus:border-[var(--color-accent)] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all cursor-pointer"
                    >
                      <option value="" className="bg-surface-primary text-zinc-500">
                        Select budget range
                      </option>
                      {BUDGET_OPTIONS.map((bgt) => (
                        <option key={bgt} value={bgt} className="bg-surface-primary text-white">
                          {bgt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-white uppercase tracking-wider">
                    Project Details <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, project goals, target scope, or any specific requirements..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-surface-secondary border ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-zinc-800 focus:border-[var(--color-accent)]"
                    } text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-y min-h-[140px]`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 flex items-center space-x-1">
                      <AlertCircle size={12} className="flex-shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto justify-center group"
                  >
                    <span>{status === "submitting" ? "Sending..." : "Send Project Inquiry"}</span>
                    <Send
                      size={16}
                      className={`ml-2 transition-transform ${
                        status === "submitting" ? "animate-pulse" : "group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};