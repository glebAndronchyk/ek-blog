import axiosInstance from 'services/axiosService';

const editUserData = async (data, id) => {
  const response = await axiosInstance.patch(`/users/${id}`, data);
  return response.data;
};

export default editUserData;
