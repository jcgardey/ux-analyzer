export const Grid = ({ children }) => (
  <div className="rounded-lg border border-gray-200">{children}</div>
);

export const GridItem = ({ children }) => (
  <div className="flex text-gray-700 font-medium border-b last:border-0 border-gray-200 py-4">
    {children}
  </div>
);

export const GridHeader = ({ children }) => (
  <div className="flex bg-gray-200 text-gray-700 font-semibold py-4">
    {children}
  </div>
);

