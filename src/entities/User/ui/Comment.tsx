import { Icon, Rating } from '@/shared/ui';

type CommentProps = {
  rating: number;
  name: string;
  verified: boolean;
  content: string;
};

export const Comment = ({ rating, name, content, verified }: CommentProps) => {
  return (
    <div className="rounded-[20px] border border-solid border-black/10 p-6">
      <Rating value={rating} />
      <div className="mt-3 flex items-center gap-[6px]">
        <div className="font-bold leading-[1.375rem]">{name}</div>
        {verified ? <Icon name="verification" className="size-[19px]" /> : null}
      </div>
      <blockquote className="mt-2 text-sm leading-5 text-black/60">
        &quot;{content}&quot;
      </blockquote>
    </div>
  );
};
