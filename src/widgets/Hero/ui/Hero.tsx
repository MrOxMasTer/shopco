import BannerImage from '#/public/banner_image.jpeg';
import SvgStar from '@svg/star.svg?icon';
import Image from 'next/image';
import Link from 'next/link';
import { ListAdvantages } from './ListAdvantages';
import { ListBrands } from './ListBtands';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-bonJour">
      <Image
        src={BannerImage}
        alt="2 models"
        className="absolute bottom-0 left-0 z-0 translate-y-[-10px] scale-[1.20] object-cover"
      />
      <SvgStar className="absolute bottom-[430px] left-[27px] z-10 h-[44px] w-[44px]" />
      <SvgStar className="absolute bottom-[500px] right-[21px] z-10" />
      <div className="relative z-10 pb-[462px] pt-10">
        <div className="container">
          <h2 className="font-integralCF text-4xl font-bold leading-[34px] text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="mt-5 font-satoshi leading-5 text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link className="btn mt-6" href={'/'}>
            Shop Now
          </Link>
          <ListAdvantages />
        </div>
      </div>
      <ListBrands />
    </section>
  );
};
