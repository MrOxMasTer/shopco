import Link from 'next/link';

export const NewArrivals = () => {
  return (
    <section>
      <div className="container pb-10">
        <h2 className="mt-[3.125rem] text-center font-integralCF text-[2rem] font-bold text-black">
          new arrivals
        </h2>
        <Link className="btn_lght mt-6" href="/">
          View All
        </Link>
      </div>
    </section>
  );
};
