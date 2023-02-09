// Este archivo solamente puede tener definiciones

export interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  qty: number;

}

interface Item extends Items{
  qty: number;
}

interface Context {
  isOpen: boolean;
  items: Item[];
  openCart: () => void;
  closeCart: () => void;
  handleCart: () => void;
  addItemToCart: (item: Item) => void;
  removeItemToCart: (item: Item) => void;
  getNumberOfItems: () => number;
}

export interface Links {
  label: string;
  route: string;
}

export interface Props {
  items: Items[];
}
