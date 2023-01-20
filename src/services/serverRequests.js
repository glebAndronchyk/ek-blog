import axiosInstance from './axiosService';

const getNewsData = async (id, path) => {
  const params = { _expand: 'user' };
  const response = await axiosInstance.get(`/${path}/${id}`, { params });
  return response.data;
};

const getNews = async (path, pageNumber = 1) => {
  const params = { _page: pageNumber, _limit: 10 };
  const response = await axiosInstance.get(`/${path}`, { params });
  return response.data.filter(item => item.body);
};

const services = {
  getNewsData,
  getNews,
};

export default services;
