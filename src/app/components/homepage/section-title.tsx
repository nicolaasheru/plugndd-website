import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className = "" }: Props) => {
  return (
    <h3
      className={`
      font-sans text-center
      bg-clip-text text-transparent
      bg-gradient-to-r from-[#3571A3] to-white
      text-[50px] font-bold leading-[60px]
      ${className}
    `}
    >
      {children}
    </h3>
  );
};
