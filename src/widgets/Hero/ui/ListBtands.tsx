import { listBrands } from '../constants/listBrands';

export const ListBrands = () => {
  return (
    <div className="relative z-20 bg-black">
      <ul className="list-brands">
        {listBrands.map((Item, index) => (
          <li key={Item.displayName}>
            <Item />
          </li>
        ))}
      </ul>
    </div>
  );
};
