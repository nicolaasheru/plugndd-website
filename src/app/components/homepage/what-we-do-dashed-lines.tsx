"use client";

export function WhatWeDodashedLines() {
  return (
    <>
      {/* Top Dashed Line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "1440px",
          height: "300px",
          top: "200px",
          zIndex: 10,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 300" fill="none">
          <path
            d="M350 250 Q720 -50 1090 250"
            stroke="url(#topGradient)"
            strokeWidth="3"
            strokeDasharray="15 10"
            fill="none"
          />
          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Dashed Line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "1440px",
          height: "300px",
          bottom: "50px",
          zIndex: 10,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 300" fill="none">
          <path
            d="M350 50 Q720 350 1090 50"
            stroke="url(#bottomGradient)"
            strokeWidth="3"
            strokeDasharray="15 10"
            fill="none"
          />
          <defs>
            <linearGradient
              id="bottomGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.8)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
