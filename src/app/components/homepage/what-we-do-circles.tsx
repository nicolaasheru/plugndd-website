"use client";

export function WhatWeDoCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left Half Circle */}
      <div
        className="absolute"
        style={{
          width: "1258px",
          height: "1258px",
          left: "-650px",
          top: "100px",
          borderRadius: "50%",
          background:
            "linear-gradient(55.76deg, rgba(17, 27, 35, 0.12) 49.84%, rgba(17, 27, 35, 0) 88.64%)",
          zIndex: 1,
        }}
      />

      {/* Left Circle Stroke - Right Side Only */}
      <div
        className="absolute"
        style={{
          width: "1258px",
          height: "1258px",
          left: "-650px",
          top: "100px",
          borderRadius: "50%",
          border: "2px solid transparent",
          background:
            "linear-gradient(#111B23, #111B23) padding-box, linear-gradient(180deg, transparent 0%, transparent 10%, #526371 13%, #3571A3 50%, #526371 97%, transparent 100%, transparent 80%) border-box",
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
          zIndex: 2,
        }}
      />

      {/* Right Half Circle */}
      <div
        className="absolute"
        style={{
          width: "1258px",
          height: "1258px",
          right: "-650px",
          top: "100px",
          borderRadius: "50%",
          background:
            "linear-gradient(225.2deg, rgba(17, 27, 35, 0.12) 49.74%, rgba(17, 27, 35, 0) 75.65%)",
          zIndex: 1,
        }}
      />

      {/* Right Circle Stroke - Left Side Only */}
      <div
        className="absolute"
        style={{
          width: "1258px",
          height: "1258px",
          right: "-650px",
          top: "100px",
          borderRadius: "50%",
          border: "3px solid transparent",
          background:
            "linear-gradient(#111B23, #111B23) padding-box, linear-gradient(180deg, transparent 0%, transparent 10%, #526371 13%, #3571A3 50%, #526371 97%, transparent 100%, transparent 80%) border-box",
          clipPath: "polygon(0% 0%, 55% 0%, 55% 100%, 0% 100%)",
          zIndex: 2,
        }}
      />
    </div>
  );
}
