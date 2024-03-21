'use client';
import ReactFocusLock from 'react-focus-lock';

type FocusLockProps = {
  children: React.ReactNode;
};

export const FocusLock = ({ children, ...props }: FocusLockProps) => {
  return <ReactFocusLock {...props}>{children}</ReactFocusLock>;
};
