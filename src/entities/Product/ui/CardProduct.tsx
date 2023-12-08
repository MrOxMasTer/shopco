import Image from 'next/image';
import { Product } from '../product.type';

type CardProductProps = {
  product: Product;
};

export const CardProduct = ({ product }: CardProductProps) => {
  const { currentPrice, src, rate, title, discount, initalPrice } = product;

  return (
    <div>
      <div className="bg-ebb h-[200px] w-[198px] rounded-[13.424px]">
        <Image src={src} alt={title} width={198} height={200} />
      </div>
      <div className="mt-[0.625rem] font-bold text-black">{title}</div>
      <div className="mt-[0.2656rem] flex justify-between gap-[5px]">
        <div className="text-xl font-bold">${currentPrice}</div>
        {discount ? (
          <>
            <div className="crossedOutPrice">${initalPrice}</div>
            <div className="discount">-{discount}%</div>
          </>
        ) : null}
      </div>
    </div>
  );
};
