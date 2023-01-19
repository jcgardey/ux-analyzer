import { VersionItem } from './VersionItem';

export const VersionList = ({ versions }) => {
  return (
    <div className="grid gap-3 grid-cols-4 my-2">
      {versions.map((version) => (
        <VersionItem key={version.id} version={version} />
      ))}
    </div>
  );
};

