interface DnaCardProps {
  title: string;
  description: string;
}

export default function IntroCard({ title, description }: DnaCardProps) {
  return (
    <div className="border-blue-radial rounded-2xl h-full">
      <div
        className="bg-blue-radial rounded-2xl p-4 md:p-8 space-y-2 md:space-y-3 h-full
                      transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
      >
        <div className="text-center">
          <h3
            className="
      font-bold text-center leading-[1.2]
      bg-clip-text text-transparent
      bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(115deg,rgba(53,113,163,0.50)_-53.02%,#F5F5F5_48.07%)] text-[clamp(0.875rem,2.5vw,1.375rem)]"
          >
            {title}
          </h3>
          <p
            className="
      mt-3 md:mt-6 font-sans text-center leading-normal text-[clamp(0.7rem,2vw,1rem)]
      text-[#F5F5F5]/70"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
