import { useLoaderData } from 'react-router-dom';
import { PageTitle } from '../components/Common/PageTitle';

export const VersionPage = () => {
  const version = useLoaderData();
  return (
    <>
      <PageTitle>{version.version_name}</PageTitle>
      <p className="text-2xl text-gray-700">{version.token}</p>
    </>
  );
};

