"use client";

interface GlassBurComponent {
  isLoaded: boolean;
}

export function GlassBlur({ isLoaded }: GlassBurComponent) {
  const glassStripes = [
    { left: 0 },
    { left: 49 },
    { left: 98 },
    { left: 147 },
    { left: 196 },
    { left: 245 },
    { left: 294 },
  ];

  return (
    <div
      className={`absolute z-[12] opacity-100 pointer-events-none transition-all duration-700 delay-200 ease-out ${
        isLoaded ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        right: "80px",
        top: "0px",
        width: "250px",
        height: "1500px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "300px",
          background:
            "linear-gradient(to bottom, rgba(17, 27, 35, 0.8), transparent)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      {glassStripes.map((stripe, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${stripe.left}px`,
            top: "0",
            width: "49px",
            height: "100%",
            backdropFilter: "blur(90px)",
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.05) -20%, rgba(40, 40, 40, 0.08) 75.76%, rgba(255, 255, 255, 0.05) 123.64%)",
            borderLeft:
              index === 0
                ? "0.5px solid rgba(255, 255, 255, 0.08)"
                : "0.5px solid rgba(255, 255, 255, 0.06)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "300px",
          background:
            "linear-gradient(to top, rgba(17, 27, 35, 0.8), transparent)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
