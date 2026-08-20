export default function ServiceCard({
  label,
  description,
  variant,
}: {
  label: string;
  description: string;
  variant?: "radial-mask";
}) {
  const isRadialMask = variant === "radial-mask";

  return (
    <div className="rounded-2xl h-full border-blue-radial-shine relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
      {isRadialMask && <div className="service-card-radial" aria-hidden />}
      <div
        className="bg-[radial-gradient(120%_160%_at_90%_10%,rgba(146,213,227,0.15)_0%,rgba(17,27,35,1)_28%),linear-gradient(210deg,rgba(40,72,101,0.3)_0%,rgba(17,27,35,1)_60%)] rounded-2xl p-3 sm:p-6 h-full
                       flex flex-col gap-2 sm:gap-4"
      >
        <div className="text-left">
          <h3
            className="
      font-semibold text-left leading-[1.25]
      bg-clip-text text-transparent
      bg-[linear-gradient(0deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.10)_100%),linear-gradient(115deg,rgba(191,221,255,0.85)_-30%,#F5F5F5_50%)] text-[clamp(0.75rem,1.7vw,1.35rem)] max-w-full"
          >
            {label}
          </h3>
        </div>
        <div className="mt-auto pt-2 sm:pt-4 min-h-[60px] sm:min-h-[96px] flex items-start">
          <p
            className="
      font-sans text-left leading-relaxed text-[clamp(0.7rem,2.2vw,1.15rem)]
      text-[#F5F5F5]/70"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
