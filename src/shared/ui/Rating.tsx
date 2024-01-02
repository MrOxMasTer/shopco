'use client';

import { Star, StarHalf } from 'lucide-react';
import { ComponentProps, useEffect, useId, useState } from 'react';

type RatingProps = {
  value: number;
} & ComponentProps<'div'>;

export const Rating = ({ value, ...props }: RatingProps) => {
  const [normalValue, setNormalValue] = useState<number[]>([]);

  useEffect(() => {
    let arr = [];
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

  useEffect(() => {
    console.log(normalValue);
  }, [normalValue]);

  const id = useId();

  return (
    <div className="flex" {...props}>
      {normalValue.map((n, index) => {
        if (n === 1) {
          return (
            <Star
              width={18.5}
              height={18.5}
              key={id + index}
              fill="rgb(255, 198, 51)"
              strokeWidth={0}
            />
          );
        } else if (n === 0.5) {
          return (
            <StarHalf
              width={18.5}
              height={18.5}
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
