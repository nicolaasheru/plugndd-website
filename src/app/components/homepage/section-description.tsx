import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SectionDescription = ({ children, className = "" }: Props) => {
  return (
    <p
      className={`
      text-center
      text-white
      text-[28px] font-light leading-[125%]
      ${className}
    `}
    >
      {children}
    </p>
  );
};
