import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const ProvideCart = ({ children }) => {
  const cart = useProvideCart();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  return useContext(cartContext);
};

const useProvideCart = () => {
  const [items, setItems] = useState([]);
  const [isToastOpened, setIsToastOpened] = useState(false);
  const [messageToast, setMessageToast] = useState(null);

  const handleAddItem = (item) => {
    const index = items.findIndex((x) => x.id === item.id);

    const isInCart = index >= 0;

    const itemToAdd = {
      ...item,
      quantity: isInCart ? ++items[index].quantity : 1,
    };

    items.splice(isInCart ? index : items.length, 1, itemToAdd);

    setItems([...items]);
    openToast(`O Item ${item.name} foi adicionado ao carrinho`);
  };

  const handleRemoveItem = (itemId, quantity = 1) => {
    const newItens = items
      .map((item) => {
        if (item.id === itemId) item.quantity -= quantity;

        return item;
      })
      .filter((x) => x.quantity > 0);

    setItems([...newItens]);
    const itemRemoved = items.find((item) => item.id === itemId);
    openToast(`O Item ${itemRemoved?.name} foi removido ao carrinho`);
  };

  const openToast = (message) => {
    setMessageToast(message);
    setIsToastOpened(true);
  };

  return {
    items,
    handleAddItem,
    handleRemoveItem,
    isToastOpened,
    setIsToastOpened,
    messageToast,
    openToast,
  };
};
