"use client";

import React from "react";
import clsx from "clsx";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm md:text-base font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          `w-full border rounded-lg px-4 py-2 md:px-5 md:py-3 text-sm md:text-base
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
           transition-all duration-300`,
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
