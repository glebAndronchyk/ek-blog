import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserDataFromStorage } from 'helpers/localStorage';
import { getItem } from 'services/newsService';

const useNewsItemData = (data, entity, id) => {
  const { createdAt, title, body } = data;
  const [creatorID, setCreatorID] = useState(null);
  const { isAuth } = useSelector(state => state.user);
  const currentUserID = isAuth && getUserDataFromStorage().id;

  const getCreatorID = async () => {
    try {
      const response = await getItem(entity, id);
      setCreatorID(response.userId);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    getCreatorID();
  }, []);

  return {
    createdAt,
    title,
    body,
    creatorID,
    currentUserID,
    isAuth,
  };
};

export default useNewsItemData;
