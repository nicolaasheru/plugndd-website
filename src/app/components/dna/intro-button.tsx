import Link from "next/link";

interface IntroButtonProps {
  href: string;
  label: string;
}

export default function IntroButton({ href, label }: IntroButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        lg:px-[24px] lg:py-[12px]
        gap-[16px]
        px-4 py-2 text-sm
        rounded-full border border-[#3571A3]
        
        text-white          
        text-center          
        font-sans          
        lg:text-[18px]        
        font-medium          
        leading-normal       
        
        bg-[radial-gradient(180.27%_102.29%_at_89.59%_100%,#B7FDFD_0%,rgba(53,113,163,0.60)_51.24%,rgba(57,117,166,0.61)_64.17%,rgba(53,113,163,0.10)_97.12%)]
        backdrop-blur-[7.5px]
        shadow-[0_4px_4px_0_rgba(25,25,30,0.10)]
        
        transition-all duration-300 hover:scale-105 active:scale-95
        no-underline
      "
    >
      {label}
    </Link>
  );
}
