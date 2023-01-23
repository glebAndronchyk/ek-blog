import axiosInstance from './axiosService';

export const login = async data => {
  const { email, password } = data;
  const response = await axiosInstance.post('/login', { email, password });
  return response.data;
};

export const register = () => {
  // TODO: REGISTER
};
