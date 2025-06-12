import axios from "axios";
import { showError } from "../toast";

const api = axios.create();

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response?.status) {
        const status = error.response?.status;
        switch (status) {
          case 400:
            showError("Bad Request");
            break;
          case 401:
            showError("Unauthorized – Please login again");
            break;
          case 403:
            showError("Forbidden – You don’t have access");
            break;
          case 404:
            showError("Not Found");
            break;
          case 500:
            showError("Server error – Try again later");
            break;
          default:
            showError(`Error ${status}`);
        }
      }
    } else if (error.message) {
      showError(error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
