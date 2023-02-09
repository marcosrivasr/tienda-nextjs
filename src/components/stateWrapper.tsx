import { createContext, useContext, useState } from "react";
import { Context, Item } from "@/types"

const AppContext = createContext<Context>({
  isOpen: true,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  handleCart: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  getNumberOfItems: () => 0,
});

export default function StateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Array<Item>>([]);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleCartChanged() {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(item: Item) {
    const temp = [...items];
    const found = temp.find((i) => i.id === item.id);
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
  }

  function handleRemoveItemToCart(item: Item) {
    const temp = [...items];
    const found = temp.find((i) => i.id === item.id);
    const indexDos = temp.indexOf(item);
    if (found) {
      if (found.qty <= 1) {
        temp.splice(indexDos, 1);
      } else {
        found.qty--;
      }
    }
    setItems([...temp]);
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
        handleCart: handleCartChanged,
        addItemToCart: handleAddItemToCart,
        removeItemToCart: handleRemoveItemToCart,
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
