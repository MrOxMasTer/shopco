'use client';

import { ListMenu } from './ListMenu';

export const Menu = ({ ...props }) => {
  return (
    <div className="relative h-screen w-screen bg-white" {...props}>
      <div className="container">
        <nav>
          <ListMenu />
        </nav>
      </div>
    </div>
  );
};
