import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "w-[202px] h-[32px] rounded-[6px] font-bold text-[14px] flex items-center justify-center cursor-pointer transition-all duration-200";
  const variants = {
    primary: "bg-orange800 text-white hover:bg-[#E03A00]",
    secondary: "bg-white text-black800 border border-gray200 hover:bg-gray50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
