import Link from 'next/link';

type ListItemMenu = {
  id: string;
  content: string;
  href: string;
};

type ListMenuProps = {
  list: ListItemMenu[];
  title: string;
};

export const ListLayoutMenu = ({ title, list, ...props }: ListMenuProps) => {
  return (
    <div {...props}>
      <h3 className="text-sm font-medium uppercase leading-[1.125rem] tracking-[0.1875rem]">
        {title}
      </h3>
      <ul className="mt-4 grid gap-4 text-sm leading-4 text-black/60">
        {list.map(({ id, content, href }, index) => (
          <li key={id + index}>
            <Link href={href} aria-label={content}>
              {' '}
              {content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
