import { ListCardsProduct, Product } from '@/entities/Product';
import Link from 'next/link';

const products: Product[] = [
  {
    id: 'prod1',
    price: 100,
    rating: 3,
    src: '/t-shirt.png',
    title: 'T-shirt with Tape Details',
  },
  {
    id: 'prod2',
    price: 260,
    rating: 3.5,
    discount: 20,
    discountedPrice: 240,
    src: '/jeans.png',
    title: 'Skinny Fit Jeans',
  },
  {
    id: 'prod3',
    price: 180,
    rating: 4.5,
    src: '/shirt.png',
    title: 'Checkered Shirt',
  },
  {
    id: 'prod4',
    price: 160,
    rating: 4.5,
    discount: 30,
    discountedPrice: 130,
    src: '/sleeve_t-shirt.png',
    title: 'Sleeve Striped T-Shirt',
  },
];

export const NewArrivals = () => {
  return (
    <section>
      <div className="pb-10">
        <h2 className="stn_title mt-[3.125rem]">new arrivals</h2>
        <ListCardsProduct
          className="container_products mt-8"
          listProducts={products}
        />
        <div className="container">
          <Link
            aria-label="Link to a page with new products"
            className="btn_lght mt-6 py-3 text-sm font-semibold"
            href="/">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
