import Link from 'next/link';

export const NewArrivals = () => {
  return (
    <section>
      <div className="container pb-10">
        <h2 className="stn_title mt-[3.125rem]">new arrivals</h2>
        <Link className="btn_lght mt-6 text-sm font-semibold" href="/">
          View All
        </Link>
      </div>
    </section>
  );
};
