import { Icon } from '@/shared';
import { listBrands } from '../constants/listBrands';

export const ListBrands = () => {
  return (
    <div className="relative z-20 bg-black">
      <ul className="list-brands">
        {listBrands.map((item, index) => (
          <li key={item + index}>
            <Icon className="h-[27px] w-[127px]" name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
