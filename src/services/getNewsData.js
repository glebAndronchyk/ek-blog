import axiosInstance from './axiosService';

const getNewsData = async (path, pageNumber = 1) => {
  const params = { _page: pageNumber, _limit: 10 };
  const response = await axiosInstance.get(`/${path}`, { params });
  return response.data.filter(item => item.body);
};

export default getNewsData;
