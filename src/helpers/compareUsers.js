import { getUserDataFromStorage } from 'helpers/localStorage';

const compareUsers = creatorId => {
  return creatorId === getUserDataFromStorage()?.id;
};

export default compareUsers;
