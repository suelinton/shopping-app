import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const ProvideCart = ({ children }) => {
  const auth = useProvideCart();
  return <cartContext.Provider value={auth}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  return useContext(cartContext);
};

const useProvideCart = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    const index = items.findIndex((x) => x.id === item.id);

    const isInCart = index >= 0;

    const itemToAdd = {
      ...item,
      quantity: isInCart ? ++items[index].quantity : 1,
    };

    items.splice(isInCart ? index : items.length, 1, itemToAdd);

    setItems(items);
  };

  const handleRemoveItem = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id !== itemId) return item;

        if (item.quantity > 1) {
          --item.quantity;

          return item;
        }

        return false;
      })
    );
  };

  return { items, handleAddItem, handleRemoveItem };
};
