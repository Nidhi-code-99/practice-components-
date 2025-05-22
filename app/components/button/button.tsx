"use client";

import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  className = "",
  isDisabled,
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`bg-blue-600 text-white rounded-xl px-6 py-3 
                  text-base md:text-lg 
                  md:px-8 md:py-4 
                  hover:bg-blue-700 transition-all duration-300 
                  ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
