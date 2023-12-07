import BannerImage from '#/public/banner_image.jpeg';
import SvgStar from '@svg/star.svg?icon';
import Image from 'next/image';
import Link from 'next/link';
import { ListAdvantages } from './ListAdvantages';
import { ListBrands } from './ListBtands';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-bonJour">
      <div className="absolute bottom-0 z-0 max-h-[550px] w-full">
        <Image
          priority
          src={BannerImage}
          alt="2 models"
          className="translate-y-[-38px] scale-[1.20]"
        />
      </div>
      <div className="relative z-10 mb-[462px] pt-10">
        <div className="container relative">
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
          <SvgStar className="absolute bottom-[-190px] left-[6.92%] z-10 h-[44px] w-[44px]" />
          <SvgStar className="absolute bottom-[-110px] right-[5.38%] z-10" />
        </div>
      </div>
      <ListBrands />
    </section>
  );
};
