// components/Button.tsx
import React from "react";
import { ButtonProps } from "../interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shape} ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
