import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getItemFromStorage } from 'helpers/localStorage';
import { getItem } from 'services/newsService';

const useNewsItemData = (feedData, entity, id) => {
  const { createdAt, title, body } = feedData;
  const [creatorID, setCreatorID] = useState(null);
  const { isAuth } = useSelector(state => state.user);
  const currentUserID = isAuth && JSON.parse(getItemFromStorage('userData')).id;

  useEffect(() => {
    getItem(entity, id).then(data => setCreatorID(data.userId));
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
