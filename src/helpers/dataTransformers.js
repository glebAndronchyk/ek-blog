import { getItemFromStorage } from 'helpers/localStorage';
import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';

export const transformRegistrationFormData = enteredData => {
  const { age, avatar, email, fullName, password } = enteredData;
  const splittedFullName = fullName.split(' ');
  return {
    age,
    avatar,
    email,
    firstname: splittedFullName[0],
    lastname: splittedFullName[1],
    password,
  };
};

export const transformDataForPOST = data => {
  const { title, body } = data;
  return {
    title,
    body,
    userId: JSON.parse(getItemFromStorage('userData')).id,
    createdAt: getDateInCorrectFormat(new Date()),
    updatedAt: '----',
  };
};
