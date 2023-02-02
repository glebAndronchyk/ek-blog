import axiosInstance from './axiosService';

export const getItem = async (entity, id) => {
  const params = { _expand: 'user' };
  const response = await axiosInstance.get(`/${entity}/${id}`, { params });
  return response.data;
};

export const getNews = async (entity, pageNumber = 1) => {
  const params = { _page: pageNumber, _sort: 'createdAt', _order: 'desc', _limit: 10 };
  const response = await axiosInstance.get(`/${entity}`, { params });
  return response.data.filter(item => item.body);
};

export const createNews = async (entity, data) => {
  try {
    const response = await axiosInstance.post(`/${entity}`, { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const editNews = async (entity, data, id) => {
  try {
    const response = await axiosInstance.patch(`/${entity}/${id}`, { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const deleteNews = async entity => {
  try {
    const response = await axiosInstance.delete(`/${entity}`);
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};
