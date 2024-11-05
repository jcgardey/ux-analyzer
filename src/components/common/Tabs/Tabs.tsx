import { VersionTab } from '@/pages/VersionPage/tabs';
import { Link, useLocation } from 'react-router-dom';

interface TabsProps {
  tabs: VersionTab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300 my-3">
        {tabs
          .filter((tab) => tab.show)
          .map((tab) => (
            <Link
              to={tab.path}
              key={tab.name}
              className={`mr-4 p-2 text-lg hover:bg-gray-300 rounded text-gray-600 ${
                currentPath === tab.path
                  ? 'font-bold border-b-2 border-red'
                  : 'font-medium'
              } `}
            >
              {tab.name}
            </Link>
          ))}
      </div>
    </div>
  );
};
