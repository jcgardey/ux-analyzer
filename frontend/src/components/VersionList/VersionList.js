import { VersionItem } from './VersionItem';

export const VersionList = ({ versions, onDelete }) => {
  return (
    <div className="w-3/4">
      {versions.map((version) => (
        <VersionItem key={version.id} version={version} onDelete={onDelete} />
      ))}
    </div>
  );
};

