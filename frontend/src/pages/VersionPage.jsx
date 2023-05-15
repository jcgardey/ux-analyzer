import { Outlet, useLoaderData } from 'react-router-dom';
import { PageTitle } from '../components/Common/PageTitle';
import { Sections } from '../components/Common/Sections';

export const VersionPage = () => {
  const version = useLoaderData();

  const sections = [
    {
      name: 'Stats',
      show: version.user_sessions_count > 0,
      path: 'stats',
    },
    {
      name: 'User Sessions',
      show: version.user_sessions_count > 0,
      path: 'user_sessions',
    },
    {
      name: 'Widgets',
      show: version.user_sessions_count > 0,
      path: 'widgets',
    },
    { name: 'Setup', show: true, path: 'setup' },
  ];

  return (
    <>
      <PageTitle>{version.version_name}</PageTitle>
      <div className="my-4">
        {version.urls.map((url, i) => (
          <div key={i}>
            <span className="bg-gray-300 text-lg text-gray-900 rounded-2xl p-2">
              {url}
            </span>
          </div>
        ))}
      </div>
      <Sections sections={sections} />
      <div className="w-full">
        <Outlet context={version} />
      </div>
    </>
  );
};

