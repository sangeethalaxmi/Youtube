import axios from "axios";
import { showError } from "../toast";
const handleError = (error) => {
  if (error.response || error.status) {
    if (error.response?.status || error.status) {
      const status = error.response?.status || error.status;
      switch (status) {
        case 400:
          showError(error.response?.data?.error || "Bad Request");
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
};
const api = axios.create();

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return handleError(error);
  }
);

const authApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
authApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return handleError(error);
  }
);
export { api, authApi };
