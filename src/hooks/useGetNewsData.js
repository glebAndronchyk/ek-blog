import { useState } from 'react';

import services from '../services/serverRequests';

const { getNewsData } = services;

const useGetNewsData = (id, path) => {
  const [page, setPage] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getNewsData(id, path);
      const {
        title,
        body,
        createdAt,
        updatedAt,
        user: { firstname, lastname },
      } = response;
      setPage({
        title,
        body,
        createdAt,
        updatedAt,
        firstname,
        lastname,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    getData,
    page,
    loading,
    error,
  };
};

export default useGetNewsData;
