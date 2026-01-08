type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
};

export type ProductType = {
  heading: string;
  products: Product[];
  styles: {
    grid: string;
    card: string;
    image: string;
    title: string;
    description: string;
    price: string;
    badge: string;
  };
};
