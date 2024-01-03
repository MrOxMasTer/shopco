import { ListStyleBlocks } from './ListStyleBlocks';

export const DressStyle = () => {
  return (
    <section>
      <div className="container py-[0.625rem]">
        <div className="rounded-[20px] bg-gallery px-6 pb-7 pt-10">
          <h2 className="stn_title">Browse By Dress Style</h2>
          <ListStyleBlocks />
        </div>
      </div>
    </section>
  );
};
