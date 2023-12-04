import Link from 'next/link';
import { listAdvantages } from '../constants/listAdvantages';
import { listBrands } from '../constants/listbrands';

export const Hero = () => {
  return (
    <section className="bg-bonJour">
      <div className="container pt-10">
        <h2 className="font-integralCF text-4xl font-bold leading-[34px] text-black">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className="font-satoshi mt-5 leading-5 text-black/60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link className="btn mt-6" href={'/'}>
          Shop Now
        </Link>
        <ul className="list-advantages mt-[1.375rem]">
          {listAdvantages.map(({ title, subtitle }) => (
            <li key={subtitle}>
              <div>
                <div>{title}</div>
                <span>{subtitle}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-black">
        <ul className="list-brands">
          {listBrands.map((Item, index) => (
            <li key={Item.displayName}>
              <Item />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
