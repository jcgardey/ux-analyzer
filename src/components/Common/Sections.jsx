import { Link, useLocation } from 'react-router-dom';

export const Sections = ({ sections }) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300 my-3">
        {sections
          .filter((section) => section.show)
          .map((section) => (
            <Link
              to={section.path}
              key={section.name}
              className={`mr-4 p-2 text-lg hover:bg-gray-300 rounded text-gray-600 ${
                currentPath === section.path
                  ? 'font-bold border-b-2 border-red'
                  : 'font-medium'
              } `}
            >
              {section.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

