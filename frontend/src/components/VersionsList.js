import { useEffect, useState } from 'react';
import { getAllVersions } from '../services/version';
import { Version } from './Version';

export const VersionList = () => {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    getAllVersions().then((res) => setVersions(res.data));
  }, []);

  return (
    <div className="grid gap-3 grid-cols-4">
      {versions.map((version) => (
        <Version key={version.id} version={version} />
      ))}
    </div>
  );
};

