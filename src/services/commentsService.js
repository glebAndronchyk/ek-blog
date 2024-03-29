import axiosInstance from './axiosService';

export const getPostRelatedComments = async (postId, pageNumber = 1) => {
  const params = { _page: pageNumber, _sort: 'createdAt', _order: 'desc', _limit: 10, _expand: 'user' };
  const response = await axiosInstance.get(`posts/${postId}/comments`, { params });
  return response.data.filter(item => item.body);
};

export const createComment = async data => {
  try {
    const response = await axiosInstance.post(`/comments`, { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const editComment = async (data, id) => {
  try {
    const response = await axiosInstance.patch(`/comments/${id}`, { ...data });
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};

export const deleteComment = async id => {
  try {
    const response = await axiosInstance.delete(`/comments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response));
  }
};
