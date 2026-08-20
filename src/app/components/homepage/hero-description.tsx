import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const HeroDescription = ({ children, className = "" }: Props) => {
  return (
    <p
      className={`
      font-sans text-left leading-normal
      text-[#A1A1A1]
      text-[16px] font-medium
      ${className}
    `}
    >
      {children}
    </p>
  );
};
