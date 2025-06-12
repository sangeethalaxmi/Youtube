import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-2 m-2 bg-secondary rounded-lg text-textPrimary">
        {name}
      </button>
    </div>
  );
};

export default Button;
