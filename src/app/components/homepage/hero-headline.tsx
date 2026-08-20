import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const HeroHeadline = ({ children, className = "" }: Props) => {
  return (
    <h1
      className={`
      font-sans text-left leading-[1]
      bg-clip-text text-transparent
      bg-gradient-to-b from-[#F5F5F5] to-[#D4D4D4]
      text-[80px] font-bold
      ${className}
    `}
    >
      {children}
    </h1>
  );
};
