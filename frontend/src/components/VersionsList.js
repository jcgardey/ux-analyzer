import { useEffect, useState } from 'react';
import { getAllVersions } from '../services/version';
import { VersionItem } from './VersionItem';

export const VersionList = () => {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    getAllVersions().then((res) => setVersions(res.data));
  }, []);

  return (
    <div className="grid gap-3 grid-cols-4">
      {versions.map((version) => (
        <VersionItem key={version.id} version={version} />
      ))}
    </div>
  );
};

