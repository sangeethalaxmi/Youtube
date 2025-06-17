import { createContext, useContext } from "react";

export const ModalContext = createContext({ onClose: () => {} });

export const useModal = () => {
  return useContext(ModalContext);
};
