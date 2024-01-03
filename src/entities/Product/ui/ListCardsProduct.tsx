import { cn } from '@/shared';
import { ComponentProps } from 'react';
import { Product } from '../product.type';
import { CardProduct } from './CardProduct';

type ListCardsProductProps = {
  listProducts: Product[];
} & ComponentProps<'ul'>;

export const ListCardsProduct = ({
  listProducts,
  className,
  ...props
}: ListCardsProductProps) => {
  return (
    <ul className={cn('', className)} {...props}>
      {listProducts.map((item) => (
        <li key={item.id}>
          <CardProduct product={item} />
        </li>
      ))}
    </ul>
  );
};
