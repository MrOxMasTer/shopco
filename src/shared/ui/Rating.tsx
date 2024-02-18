'use client';

import { ComponentProps, useEffect, useId, useState } from 'react';
import { Icon } from '.';

type RatingProps = {
  value: number;
} & ComponentProps<'div'>;

export const Rating = ({ value, ...props }: RatingProps) => {
  const [normalValue, setNormalValue] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];
    let temp = value;

    while (temp >= 0.5) {
      if (temp >= 1) {
        arr.push(1);
      } else if (temp >= 0.5) {
        arr.push(0.5);
      }
      temp--;
    }

    setNormalValue(arr);
  }, [value]);

  const id = useId();

  return (
    <div className="flex" {...props}>
      {normalValue.map((n, index) => {
        if (n === 1) {
          return (
            <Icon
              className="stroke-none text-[18.5px] leading-3"
              name="lucide/star"
              key={id + index}
              fill="rgb(255, 198, 51)"
              strokeWidth={0}
            />
          );
        } else if (n === 0.5) {
          return (
            <Icon
              className="text-[18.5px] leading-3"
              name="lucide/star-half"
              key={id + index}
              fill="rgb(255, 198, 51)"
              strokeWidth={0}
            />
          );
        }

        return null;
      })}
    </div>
  );
};
