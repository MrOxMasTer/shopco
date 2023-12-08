import { Product } from '../product.type';
import { CardProduct } from './CardProduct';

type ListCardsProductProps = {
  listProducts: Product[];
};

// temp variable

export const ListCardsProduct = ({
  listProducts,
  ...props
}: ListCardsProductProps) => {
  return (
    <ul className="overflow-x-auto" {...props}>
      {listProducts.map((item) => (
        <li key={item.id}>
          <CardProduct product={item} />
        </li>
      ))}
    </ul>
  );
};
