import { DressStyle } from '@/widgets/DressStyle';
import { Hero } from '@/widgets/Hero';
import { NewArrivals } from '@/widgets/NewArrivals';
import { OurHappyCustomers } from '@/widgets/OurHappyCustomers';
import { PostalMailing } from '@/widgets/PostalMailing';
import { TopSelling } from '@/widgets/TopSelling';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <OurHappyCustomers />
      <PostalMailing />
    </main>
  );
}
