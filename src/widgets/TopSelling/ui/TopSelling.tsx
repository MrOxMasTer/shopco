import { ListCardsProduct, Product } from '@/entities/Product';
import Link from 'next/link';

const products: Product[] = [
  {
    id: 'prod1',
    price: 232,
    rating: 5.0,
    discount: 20,
    discountedPrice: 212,
    src: '/striped_shirt.png',
    title: 'Vertical Striped Shirt',
  },
  {
    id: 'prod2',
    price: 145,
    rating: 4.0,
    src: '/graphic_t-shirt.png',
    title: 'Courage Graphic T-Shirt',
  },
  {
    id: 'prod3',
    price: 180,
    rating: 3.0,
    src: '/shorts.png',
    title: 'Loose Fit Bermuda Shorts',
  },
  {
    id: 'prod4',
    price: 210,
    rating: 4.5,
    src: '/faded_jeans.png',
    title: 'Faded Skinny Jeans',
  },
];

export const TopSelling = () => {
  return (
    <section>
      <div className="container pb-10">
        <div className="border-t border-solid border-black/10">
          <h2 className="stn_title mt-10">Top Selling</h2>
          <ListCardsProduct
            className="container_products mt-8"
            listProducts={products}
          />
          <Link
            aria-label="Link on a page with sales tops"
            className="btn_lght mt-6 py-3 text-sm font-semibold"
            href="/">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
