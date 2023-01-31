// Este archivo solamente puede tener definiciones

export interface Items {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface Props {
  items: Array<Items>;
}

export interface Link {
  label: string;
  route: string;
}
