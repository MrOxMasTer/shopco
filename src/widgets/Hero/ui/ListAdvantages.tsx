import { listAdvantages } from '../model/constants/listAdvantages';

export const ListAdvantages = () => {
  return (
    <ul className="list-advantages mt-[1.375rem]">
      {listAdvantages.map(({ id, title, subtitle }) => (
        <li key={id}>
          <div>
            <div>{title}</div>
            <span>{subtitle}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
