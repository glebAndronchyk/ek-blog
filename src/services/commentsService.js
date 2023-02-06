import axiosInstance from './axiosService';

export const getItem = async (entity, id) => {
  const params = { _expand: 'user' };
  const response = await axiosInstance.get(`/${entity}/${id}`, { params });
  return response.data;
};

export const getPostRelatedComments = async (postId, pageNumber = 1) => {
  const params = { _page: pageNumber, _sort: 'createdAt', _order: 'desc', _limit: 10, _expand: 'user' };
  const response = await axiosInstance.get(`posts/${postId}/comments`, { params });
  return response.data.filter(item => item.body);
};

export const createComment = async (data) => {
  try {
    const response = await axiosInstance.post(`/comments`, { ...data });
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
