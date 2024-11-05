import { Version } from '@/types/common';
import { VersionItem } from './VersionItem';

interface VersionListProps {
  versions: Version[];
}

export const VersionList: React.FC<VersionListProps> = ({ versions }) => {
  return (
    <div className="w-3/4">
      {versions.map((version) => (
        <VersionItem key={version.id} version={version} />
      ))}
    </div>
  );
};
