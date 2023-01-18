import axios from 'axios';

import getToken from '../helpers/getToken';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

axiosInstance.interceptors.request.use(config => {
  const token = getToken();

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
