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
}

export interface Props {
  items: Array<Items>;
}

export interface Link {
  label: string;
  route: string;
}

