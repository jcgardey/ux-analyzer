import { VersionList } from '../components/VersionsList';
import { colors } from '../utils/colors';

export const VersionsPage = () => (
  <>
    <h1 className="text-4xl text-medium my-6">Versions</h1>
    <div className="flex justify-end">
      <button className={`bg-${colors.primary}-900 text-white rounded-lg p-3`}>
        New Version
      </button>
    </div>
    <VersionList />
  </>
);

