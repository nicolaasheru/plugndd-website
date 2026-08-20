"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function InquirySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry from ${form.firstName} ${form.lastName}${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `First Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany / Brand: ${form.company}\n\nInquiry:\n${form.inquiry}`
    );
    window.location.href = `mailto:plugndd@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#3571A3]/60 focus:bg-white/8 transition-all duration-200";

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-28 px-5 md:px-12 bg-[#111B23] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-[#3571A3]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#92d5e3] text-xs md:text-sm font-medium tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-white leading-tight"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-3 text-sm md:text-base text-[#F5F5F5]/50 max-w-md mx-auto"
          >
            Tell us about your brand and what you're looking to solve.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Name row */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 font-medium pl-1">First Name</label>
              <input
                name="firstName"
                type="text"
                required
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 font-medium pl-1">Last Name</label>
              <input
                name="lastName"
                type="text"
                required
                placeholder="Doe"
                value={form.lastName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Email & Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 font-medium pl-1">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 font-medium pl-1">Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="+62 812 3456 7890"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/40 font-medium pl-1">Brand / Company Name</label>
            <input
              name="company"
              type="text"
              placeholder="Your brand or company"
              value={form.company}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Inquiry */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/40 font-medium pl-1">Inquiry</label>
            <textarea
              name="inquiry"
              required
              rows={5}
              placeholder="Tell us what you're working on and how we can help..."
              value={form.inquiry}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                px-8 py-3.5
                rounded-full border border-[#3571A3]
                text-white text-sm font-medium
                bg-[radial-gradient(180.27%_102.29%_at_89.59%_100%,#B7FDFD_0%,rgba(53,113,163,0.60)_51.24%,rgba(57,117,166,0.61)_64.17%,rgba(53,113,163,0.10)_97.12%)]
                backdrop-blur-[7.5px]
                shadow-[0_4px_24px_0_rgba(53,113,163,0.2)]
                transition-all duration-300 hover:scale-105 active:scale-95
              "
            >
              Send Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <p className="text-[10px] md:text-xs text-white/25 pt-1">
            Submitting will open your email client with the details pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
