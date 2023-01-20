import axiosInstance from './axiosService';

const getSinglePostData = async id => {
  const params = { id };
  const response = await axiosInstance.get('/posts', { params });
  return response.data;
};

export default getSinglePostData;
