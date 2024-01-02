export type Product = {
  id: string;
  src: string;
  title: string;
  rating: number;
  price: number;
  discount?: number;
  discountedPrice?: number;
};
