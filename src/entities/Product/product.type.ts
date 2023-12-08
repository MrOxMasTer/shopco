export type Product = {
  id: string;
  src: string;
  title: string;
  rate: number;
  currentPrice: number;
  initalPrice?: number;
  discount?: number;
};
