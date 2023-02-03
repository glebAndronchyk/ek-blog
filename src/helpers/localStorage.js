export const getTokenFromStorage = () => {
  return localStorage.getItem('token');
};

export const getUserDataFromStorage = () => {
  return JSON.parse(localStorage.getItem('userData'));
};

export const setItemToStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const setItemsToStorage = data => {
  data.map(item => {
    const { name, value } = item;
    return localStorage.setItem(name, value);
  });
};

export const removeItemFromStorage = name => {
  localStorage.removeItem(name);
};

export const clearStorage = () => {
  localStorage.clear();
};
