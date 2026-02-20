import React from "react";
import { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/40 focus:ring-primary",
    secondary: "bg-background-dark text-white hover:bg-[#333333] focus:ring-gray-800",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    ghost: "bg-transparent text-text-dark hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
    white: "bg-white border border-border-light text-text-dark hover:bg-gray-50 focus:ring-gray-200 dark:bg-background-dark dark:border-border-dark dark:text-white dark:hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <span className="material-symbols-outlined ml-2 text-[1.2em] leading-none">
          {icon}
        </span>
      )}
    </button>
  );
};