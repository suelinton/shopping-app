const items = [];

const getItems = async () => {
  return Promise.resolve(items);
};

const postItem = async (item) => {
  items.push(item);
  return Promise.resolve();
};

const deleteItem = async (itemId) => {
  const index = items.findIndex((item) => item.id !== itemId);
  items.splice(index, 1);

  return Promise.resolve();
};

export const cartService = { getItems, postItem, deleteItem };
