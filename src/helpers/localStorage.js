export const getItemFromStorage = () => {
  return localStorage.getItem('token');
};

export const setItemToStorage = (name, item) => {
  localStorage.setItem(name, item);
};
