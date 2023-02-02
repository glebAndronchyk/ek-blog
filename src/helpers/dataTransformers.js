import { getItemFromStorage } from 'helpers/localStorage';

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
    createdAt: new Date().toISOString(),
    updatedAt: null,
  };
};

export const transformDataForPATCH = (data, createdAt, entity) => {
  const { title, body } = data;
  const onPostsData =
    entity === 'posts'
      ? {
          userId: JSON.parse(getItemFromStorage('userData')).id,
          createdAt,
        }
      : {};
  return {
    title,
    body,
    updatedAt: new Date().toISOString(),
    ...onPostsData,
  };
};
