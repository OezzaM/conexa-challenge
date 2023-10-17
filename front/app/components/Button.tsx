import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`text-gray-600 text-2xl select-none ${
        !disabled ? "cursor-default" : "cursor-pointer"
      }`}
      disabled={!disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
