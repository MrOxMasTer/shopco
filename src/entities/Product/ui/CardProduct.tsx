import { cn } from '@/shared';
import { Rating } from '@/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { Product } from '..';

type CardProductProps = {
  product: Product;
} & ComponentProps<'div'>;

export const CardProduct = ({
  product,
  className,
  ...props
}: CardProductProps) => {
  const { src, rating, title, discount, price, discountedPrice, id } = product;

  return (
    <div className={cn('max-w-[198px]', className)} {...props}>
      <Link href={`/`} aria-label={title}>
        <div className=" flex h-[200px] w-[198px] items-center justify-center  overflow-hidden rounded-[13.424px] bg-ebb">
          <Image
            className="h-auto w-auto"
            src={src}
            alt={''}
            width={198}
            height={200}
          />
        </div>
      </Link>
      <Link href={'/'} aria-label={title}>
        <div className="mt-[0.625rem] text-[0.9375rem] font-bold text-black mm:text-base">
          {title}
        </div>
        <div className="gap-2` flex items-center justify-start">
          <Rating value={rating} />
          <div className="text-sm leading-5">
            {rating}/<span className="text-black/60">5</span>
          </div>
        </div>
        <div className="mt-[0.2656rem] flex items-center justify-start gap-[10px]">
          {discount ? (
            <>
              <div className="text-2xl font-bold">${discountedPrice}</div>
              <div className="text-2xl font-bold text-black/40 line-through">
                ${price}
              </div>
              <div className="discount">-{discount}%</div>
            </>
          ) : (
            <div className="text-2xl font-bold">${price}</div>
          )}
        </div>
      </Link>
    </div>
  );
};
