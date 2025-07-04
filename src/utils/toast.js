import { toast } from "react-toastify";

export const showSuccess = (message) => toast.success(message);
export const showError = (message) => toast.error(message);
export const showInfo = (message) => toast.info(message);
export const showWarning = (message) => toast.warning(message);
export const showMessageInfo = (message) =>
  toast.success(message, { hideProgressBar: true, autoClose: 1500 });
