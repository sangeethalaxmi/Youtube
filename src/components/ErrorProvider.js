import { createContext, useState } from "react";

export const ErrorContext = createContext({});

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState("");
  const handleError = (errorMessage) => {
    setError(errorMessage);
  };
  console.log(error);
  return (
    <ErrorContext.Provider value={{ error, handleError }}>
      {error ? error.message : children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
