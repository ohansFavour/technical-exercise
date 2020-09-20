export const saveState = (text, item) => {
  localStorage.setItem(text, JSON.stringify(item));
};

export const retrieveState = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
