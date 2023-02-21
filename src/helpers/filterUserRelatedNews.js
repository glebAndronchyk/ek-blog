import { getUserDataFromStorage } from 'helpers/localStorage';

const filterUserRelatedNews = data => {
  const { id: currentUserId } = getUserDataFromStorage();

  return data.filter(item => {
    return item.userId === currentUserId;
  });
};

export default filterUserRelatedNews;
