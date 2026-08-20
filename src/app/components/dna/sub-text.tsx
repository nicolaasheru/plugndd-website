import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: string;
  weight?: string;
}

export const SubText = ({
  children,
  className = "",
  size = "text-[22px]",
  weight = "font-medium",
}: Props) => {
  return (
    <p
      className={`
      font-sans text-center leading-normal
      text-[#F5F5F5]/70
      ${size} ${weight} ${className}
    `}
    >
      {children}
    </p>
  );
};
