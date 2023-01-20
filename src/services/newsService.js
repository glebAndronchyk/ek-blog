import axiosInstance from './axiosService';

export const getPostsData = async id => {
  const params = { _expand: 'user' };
  const response = await axiosInstance.get(`/posts/${id}`, { params });
  return response.data;
};

export const getNews = async (path, pageNumber = 1) => {
  const params = { _page: pageNumber, _limit: 10 };
  const response = await axiosInstance.get(`/${path}`, { params });
  return response.data.filter(item => item.body);
};
