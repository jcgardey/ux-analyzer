import { useLoaderData } from 'react-router-dom';
import { PageTitle } from '../components/Common/PageTitle';
import { Sections } from '../components/Common/Sections';
import { Setup } from '../components/Version/Setup';
import { Stats } from '../components/Version/Stats';

export const VersionPage = () => {
  const version = useLoaderData();

  const mainSections = [
    {
      name: 'Stats',
      show: version.user_sessions_count > 0,
      element: Stats,
      props: { version },
    },
    {
      name: 'User Sessions',
      show: version.user_sessions_count > 0,
      element: Stats,
      props: { version },
    },
    {
      name: 'Widgets',
      show: version.user_sessions_count > 0,
      element: Stats,
      props: { version },
    },
    { name: 'Setup', show: true, element: Setup, props: {} },
  ];

  return (
    <>
      <PageTitle>{version.version_name}</PageTitle>
      <Sections
        sections={mainSections}
        defaultSection={version.user_sessions_count > 0 ? 'Stats' : 'Setup'}
      />
    </>
  );
};

