import { useState } from 'react';

import { getPost } from '../services/newsService';
import { LOADING, IDLE, REJECTED } from '../helpers/loadingStatus';

const useGetPost = id => {
  const [page, setPage] = useState([]);
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(IDLE);

  const getData = async () => {
    try {
      setLoading(LOADING);
      const response = await getPost(id);
      const { title, body, createdAt, updatedAt, user } = response;
      const { firstname, lastname } = user;
      setPage({
        title,
        body,
        createdAt,
        updatedAt,
      });
      setAuthor({
        firstname,
        lastname,
      });
      setLoading(IDLE);
    } catch (err) {
      setLoading(REJECTED);
    }
  };

  return {
    getData,
    page,
    author,
    loading,
  };
};

export default useGetPost;
