import { ClassValue } from 'clsx';
import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Icon, IconName } from '.';
import { cn } from '../lib/utils';

type FieldProps = Omit<ComponentProps<'input'>, 'className'> & {
  iconName?: IconName;
  className?: ClassValue | ClassValue[];
  errorMessage?: string;
  subTitle?: string;
  register?: UseFormRegisterReturn;
};

// TODO: The field cleaning button?

export const Field = ({
  iconName,
  className,
  errorMessage,
  subTitle,
  register,
  ...props
}: FieldProps) => {
  return (
    <label
      className={cn(
        'field',
        // So far, ":has" has 92% support
        {
          '[&_input]:pl-10': !!iconName,
        },
        className,
      )}>
      <input {...props} {...register} />
      {iconName ? <Icon name={iconName} /> : null}
      <p id={props['aria-describedby']} aria-live="assertive">
        {errorMessage ?? subTitle}
      </p>
    </label>
  );
};
