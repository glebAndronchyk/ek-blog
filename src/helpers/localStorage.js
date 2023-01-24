export const getItemFromStorage = () => {
  return localStorage.getItem('token');
};

export const setItemToStorage = (name, item) => {
  localStorage.setItem(name, item);
};

export const removeItemFromStorage = name => {
  localStorage.removeItem(name);
};
