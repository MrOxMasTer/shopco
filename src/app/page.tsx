import { DressStyle } from '@/widgets/DressStyle';
import { Hero } from '@/widgets/Hero';
import { NewArrivals } from '@/widgets/NewArrivals';
import { TopSelling } from '@/widgets/TopSelling';

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">
        Clothing and various products for the house Shopco
      </h1>
      <main>
        <Hero />
        <NewArrivals />
        <TopSelling />
        <DressStyle />
      </main>
    </>
  );
}
