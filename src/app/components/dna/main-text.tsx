import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: string;
  weight?: string;
}

export const MainText = ({
  children,
  className = "",
  size = "text-[80px]",
  weight = "font-bold",
}: Props) => {
  return (
    <h1
      className={`
      font-sans text-center leading-[1.2]
      bg-clip-text text-transparent
      /* Layered Gradient Abstraction */
      bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(115deg,rgba(53,113,163,0.50)_-53.02%,#F5F5F5_48.07%)]
      ${size} ${weight} ${className}
    `}
    >
      {children}
    </h1>
  );
};
