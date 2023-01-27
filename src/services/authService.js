import axiosInstance from './axiosService';

export const login = async data => {
  const { email, password } = data;
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const register = async data => {
  try {
    const response = await axiosInstance.post('/register', { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};
