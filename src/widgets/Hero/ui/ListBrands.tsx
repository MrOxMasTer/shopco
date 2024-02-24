import { Icon } from '@/shared/ui';
import { listBrands } from '../model/constants/listBrands';

export const ListBrands = () => {
  return (
    <div className="relative z-20 bg-black">
      <ul className="list-brands">
        {listBrands.map((item) => (
          <li key={item}>
            <Icon className="h-[27px] w-[127px]" name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
