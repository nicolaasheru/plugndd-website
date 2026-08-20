import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const WhatWeDoHeadline = ({ children, className = "" }: Props) => {
  return (
    <h2
      className={`
      font-sans text-center leading-[1]
      bg-clip-text text-transparent
      bg-gradient-to-b from-gray-400 to-white
      text-[80px] font-bold
      ${className}
    `}
    >
      {children}
    </h2>
  );
};
