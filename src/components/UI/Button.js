import React from "react";

const Button = ({ label, className }) => {
  return (
    <button
      className={`p-3 rounded-md ${className} bg-red-300 hover:scale-105`}
    >
      {label}
    </button>
  );
};

export default Button;
