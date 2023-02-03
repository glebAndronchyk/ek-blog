import axios from 'axios';

import { getTokenFromStorage } from 'helpers/localStorage';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

axiosInstance.interceptors.request.use(config => {
  const token = getTokenFromStorage();

  const interceptorConfig = { ...config };

  if (token) {
    interceptorConfig.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return interceptorConfig;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
