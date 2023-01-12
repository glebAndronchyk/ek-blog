import getToken from "../helpers/getToken";
import axiosInstance from "../config/axios/axiosInstance";

axiosInstance.interceptors.request.use((config) => {
    const token = getToken();

    const interceptorConfig = {...config};

    if (token) {
      interceptorConfig.headers = {
        Authorization: `Bearer ${token}`
      }
      return interceptorConfig;
    }
    return interceptorConfig;
  },
  (error) => Promise.reject(error.message)
);

axiosInstance.interceptors.response.use((config) => {
  //TODO: makeAnErrorHandler
});
