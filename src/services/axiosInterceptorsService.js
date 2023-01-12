import getToken from "../helpers/getToken";
import axiosInstance from "../config/axios/axiosInstance";

axiosInstance.interceptors.request.use((config) => {
    const token = getToken();

    const interceptorConfig = {...config};

    //TODO: isAuth checker

    interceptorConfig.headers = {
      Authorization: `Bearer ${token ? token : 'no-token'}`
    }
    return interceptorConfig;
  },
  (error) => Promise.reject(error.message)
);

axiosInstance.interceptors.response.use((config) => {
  //TODO: makeAnErrorHandler
});
