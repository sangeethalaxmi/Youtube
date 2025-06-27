import React from "react";

const InputField = ({
  label,
  placeHolder,
  className,
  type = "text",
  ...props
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        placeholder={placeHolder}
        className={`border border-gray-400 p-2 rounded-md ${className}`}
        type={type}
        {...props}
      ></input>
    </>
  );
};

export default InputField;
