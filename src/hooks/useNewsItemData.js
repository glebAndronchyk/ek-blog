import { useSelector } from 'react-redux';

import { getUserDataFromStorage } from 'helpers/localStorage';

const useNewsItemData = data => {
  const { createdAt, isUpdated, title, body, userFullName, creatorAvatar } = data;
  const { isAuth } = useSelector(state => state.user);
  const currentUserID = isAuth && getUserDataFromStorage().id;

  return {
    createdAt,
    isUpdated,
    title,
    body,
    currentUserID,
    isAuth,
    creatorAvatar,
    userFullName,
  };
};

export default useNewsItemData;
