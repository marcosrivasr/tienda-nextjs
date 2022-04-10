import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  isOpen: true,
  items: [],
  openCart: () => {},
  addItemToCart: (item) => {},
  getNumberOfItems: () => {},
});

/*
isOpen: false,
  methods: {
    add: (id) => {
      const newState = { ...cart };
      const found = newState.items.find((item) => item.id === id);
      if (found) {
        found.qty++;
      } else {
        newState.items.push({
          id,
          qty: 1,
        });
      }
      setCart({ ...newState });
    },
    openCart: () => {
      const newState = { ...cart };
      newState.isOpen = true;
      setCart({ ...newState });
    },
    closeCart: () => {
      cart.isOpen = false;
    },
  },
  items: [],
*/

export default function StateWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleAddItemToCart(item) {
    const temp = [...items];
    const found = temp.find((i) => i.id === item.id);
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
    console.log({ items });
  }

  function getNumberOfItems() {
    const total = items.reduce((acc, item) => {
      return (acc += item.qty);
    }, 0);
    return total;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        isOpen,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: getNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
