import {
  createContext,
  useContext,
  useState,
} from "react";

interface Context {
  isOpen: boolean;
  items: never[];
  openCart: () => void;
  closeCart: () => void;
  handleCart: () => void;
  addItemToCart: (item: any) => void
  getNumberOfItems: () => number
}

const AppContext = createContext<Context>({
  isOpen: true,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  handleCart: () => {},
  addItemToCart: (item) => {},
  getNumberOfItems: () => 0,
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

export default function StateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Array<never>>([]);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleCartChanged() {
    setIsOpen(!isOpen);
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
        handleCart: handleCartChanged,
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
