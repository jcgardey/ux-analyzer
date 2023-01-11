import { VersionList } from '../components/VersionList/VersionList';

export const VersionsPage = () => (
  <>
    <h1 className="text-4xl text-medium my-6">Versions</h1>
    <div className="flex justify-end my-5">
      <button className={`bg-sky-800 text-white rounded-lg p-3`}>
        New Version
      </button>
    </div>
    <VersionList />
  </>
);

