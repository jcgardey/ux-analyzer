import { useLoaderData } from 'react-router-dom';
import { PageTitle } from '../components/Common/PageTitle';
import { Sections } from '../components/Common/Sections';
import { Setup } from '../components/Version/Setup';
import { Stats } from '../components/Version/Stats';
import { UserSessions } from '../components/Version/UserSessions';
import { Widgets } from '../components/Version/Widgets';

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
      element: UserSessions,
      props: { versionId: version.id },
    },
    {
      name: 'Widgets',
      show: version.user_sessions_count > 0,
      element: Widgets,
      props: { versionId: version.id },
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

