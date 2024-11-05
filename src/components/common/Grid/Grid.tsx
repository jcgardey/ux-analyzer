import React from 'react';

interface GridProps {
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children }) => (
  <div className="rounded-lg border border-gray-200">{children}</div>
);

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

export const GridItem: React.FC<GridItemProps> = ({ className, children }) => (
  <div
    className={`flex items-center hover:bg-gray-50 text-gray-700 font-medium border-b last:border-0 border-gray-200 py-4 ${
      className ?? ''
    }`}
  >
    {children}
  </div>
);

interface GridHeaderProps {
  children: React.ReactNode;
}

export const GridHeader: React.FC<GridHeaderProps> = ({ children }) => (
  <div className="flex bg-gray-200 text-gray-700 font-semibold py-4">
    {children}
  </div>
);
