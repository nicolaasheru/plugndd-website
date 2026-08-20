"use client";
import type { ReactNode } from "react";

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function GlassContainer({
  children,
  className = "",
  title,
  description,
}: GlassContainerProps) {
  return (
    <div
      className={`relative rounded-[2rem] overflow-hidden ${className}`}
      style={{
        backdropFilter: "blur(90px)",
        backgroundImage: `
          radial-gradient(89.98% 73.55% at 50% 121.41%, #1A3246 0%, #101B23 100%), 
          linear-gradient(135deg, rgba(53, 113, 163, 0.6) 0%, rgba(53, 113, 163, 0.2) 50%, rgba(53, 113, 163, 0.1) 100%)
        `,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        border: "1px solid transparent",
      }}
    >
      <div className="relative z-10 py-10 px-4 md:px-5 lg:px-6 text-center">
        {title && (
          <h3 className="text-2xl md:text-[26px] font-bold text-white mb-4 leading-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}