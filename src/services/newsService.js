import axiosInstance from './axiosService';

export const getPost = async id => {
  const params = { _expand: 'user' };
  const response = await axiosInstance.get(`/posts/${id}`, { params });
  return response.data;
};

export const getNews = async (path, pageNumber = 1) => {
  const params = { _page: pageNumber, _sort: 'createdAt', _order: 'desc', _limit: 10 };
  const response = await axiosInstance.get(`/${path}`, { params });
  return response.data.filter(item => item.body);
};

export const createNews = async (path, data) => {
  try {
    const response = await axiosInstance.post(`/${path}`, { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const editNews = async (path, data, id) => {
  try {
    const response = await axiosInstance.patch(`/${path}/${id}`, { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const deleteNews = async path => {
  try {
    const response = await axiosInstance.delete(`/${path}`);
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};
