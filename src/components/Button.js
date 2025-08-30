import React from "react";
import { useTranslation } from "react-i18next";

const Button = ({ name, ...props }) => {
  const { t } = useTranslation();

  return (
    <div>
      <button
        className="px-3 py-2 m-2 bg-secondary rounded-lg text-textPrimary"
        {...props}
      >
        {t(name)}
      </button>
    </div>
  );
};

export default Button;
