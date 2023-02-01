import axiosInstance from './axiosService';

export const login = async data => {
  const { email, password } = data;
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

export const register = () => {
  // TODO: REGISTER
};
