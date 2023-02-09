import { getUserDataFromStorage } from 'helpers/localStorage';

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
    userId: getUserDataFromStorage().id,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  };
};

export const transformDataForPATCH = (data, createdAt, entity) => {
  const { title, body } = data;
  const onPostsData =
    entity === 'posts'
      ? {
          userId: getUserDataFromStorage().id,
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

export const transformDataForComments = (data, postId) => {
  const { body } = data;

  return {
    body,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    userId: getUserDataFromStorage().id,
    postId,
  };
};

export const transformDataForCommentsPATCH = data => {
  const { body } = data;

  return {
    body,
    updatedAt: new Date().toISOString(),
  };
};

export const transformDirtyFields = dirtyFields => {
  if (dirtyFields.fullName) {
    const splittedFullName = dirtyFields.fullName.split(' ');
    const [updatedFirstName, updatedLastName] = splittedFullName;
    delete dirtyFields.fullName;
    dirtyFields.firstname = updatedFirstName;
    dirtyFields.lastname = updatedLastName;
  }

  return dirtyFields;
};
