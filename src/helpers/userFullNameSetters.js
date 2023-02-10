import { getUserDataFromStorage } from 'helpers/localStorage';

export const setUserFullNameBasedOnStorageData = () => {
  const { firstname, lastname } = getUserDataFromStorage();
  return `${firstname} ${lastname}`;
};

export const setUserFullNameBasedOnServerData = item => {
  const { user } = item;
  const { firstname, lastname } = user;
  return `${firstname} ${lastname}`;
};
