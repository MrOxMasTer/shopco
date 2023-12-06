import { listAdvantages } from '../constants/listAdvantages';

export const ListAdvantages = () => {
  return (
    <ul className="list-advantages mt-[1.375rem]">
      {listAdvantages.map(({ title, subtitle }) => (
        <li key={subtitle}>
          <div>
            <div>{title}</div>
            <span>{subtitle}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
