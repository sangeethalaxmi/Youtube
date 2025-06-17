import ReactDOM from "react-dom";
import Icons from "./Icons";
import { createContext, useContext, useEffect } from "react";
import { SIZE_CLASSES } from "../utils/constants";
import { FocusTrap } from "focus-trap-react";
import { useModal, ModalContext } from "../contexts/ModalContext";
const Modal = ({
  children,
  size = "sm",
  modalClass = "",
  isOpen = false,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      return document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isOpen) return null;
  const mainRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <FocusTrap>
        <div
          className="fixed inset-0 bg-black/50 dark:bg-white/80  z-[1000] flex justify-center items-center max-h-[100vh] overflow-auto "
          role="dialog"
          aria-modal="true"
          onMouseDown={onClose}
        >
          <div
            className={`bg-primary rounded-lg ${SIZE_CLASSES[size]} text-textPrimary ${modalClass}`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </FocusTrap>
    </ModalContext.Provider>,
    mainRoot
  );
};
// compound component of modal
Modal.Header = function ModalHeader({ ShowCloseIcon = true, children }) {
  const { onClose } = useModal();
  return (
    <div className="mt-1 p-2  ">
      {ShowCloseIcon && (
        <button
          className="float-right block text-textSecondary"
          onClick={onClose}
        >
          <Icons name="close" size={24} className="cursor-pointer" />
        </button>
      )}
      {children}
    </div>
  );
};
Modal.Body = function ModalBody({ children }) {
  return <div className="mt-1 p-2  text-textPrimary">{children}</div>;
};
Modal.Footer = function ModalFooter({ children }) {
  return <div className="mt-1 p-2 b-t">{children}</div>;
};
export default Modal;
