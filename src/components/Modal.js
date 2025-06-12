import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Icons from "./Icons";
import { useEffect } from "react";
import { SIZE_CLASSES } from "../utils/constants";

const Modal = ({
  children,
  size = "sm",
  modalClass = "",

  onSubmitHandler,
  isOpen = false,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) return null;
  const mainRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 dark:bg-white/80  z-[1000] flex justify-center items-center max-h-[100vh] overflow-auto "
      role="dialog"
      aria-modal="true"
      onClick={handleCloseModal}
    >
      <div
        className={`bg-primary rounded-md ${SIZE_CLASSES[size]} text-textPrimary ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    mainRoot
  );
};
// compound component of modal
Modal.Header = function modalHeader({
  ShowCloseIcon = true,
  children,
  onClose,
}) {
  return (
    <div className="mt-1 p-2  border-b">
      <span className="float-right block text-textSecondary">
        {ShowCloseIcon && (
          <Icons
            name="close"
            size={24}
            onClick={onClose}
            className="cursor-pointer"
          />
        )}
      </span>
      {children}
    </div>
  );
};
Modal.Body = function modalBody({ children }) {
  return <div className="mt-1 p-2  border-b text-textPrimary">{children}</div>;
};
Modal.Footer = function modalFooter({ children }) {
  return (
    <>
      <div className="mt-1 p-2">{children}</div>
    </>
  );
};
export default Modal;
