import { Link } from 'react-router-dom';
import { Version } from '@/types/common';
import { Button } from '../ui/button';
import {
  DownloadIcon,
  EyeOpenIcon,
  Pencil1Icon,
  ReloadIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { useCallback } from 'react';
import { InteractionEffort } from '../Common/InteractionEffort/InteractionEffort';
import { useDeleteVersion } from '@/hooks/versions/useDeleteVersion';
import { downloadFile } from '@/utils/file';
import { useExportVersion } from '@/hooks/versions/useExportVersion';

interface VersionItemProps {
  version: Version;
}

export const VersionItem: React.FC<VersionItemProps> = ({ version }) => {
  const deleteVersion = useDeleteVersion();

  const exportVersion = useExportVersion();

  const handleDelete = useCallback(() => {
    deleteVersion.mutate(version.id);
  }, [deleteVersion, version]);

  const handleDownload = useCallback(() => {
    exportVersion.mutate(version.id, {
      onSuccess: (data) => {
        downloadFile(`${version.version_name}.json`, data);
      },
    });
  }, [version, exportVersion]);

  return (
    <div className="flex items-center my-4 rounded border drop-shadow-lg p-1.5 bg-gray-100 hover:cursor-pointer hover:bg-gray-200">
      <h3 className="w-1/3 font-sans text-center text-gray-700 font-bold text-2xl">
        {version.version_name}
      </h3>
      <div className="w-1/4 my-1.5">
        <p className="text-center text-gray-800 font-medium italic">
          Interaction Effort
        </p>
        <div className="my-1 mx-auto w-1/3">
          <InteractionEffort
            className={'text-3xl'}
            score={version.user_interaction_effort}
          />
        </div>
      </div>
      <div className="w-1/4 my-1.5">
        <p className="text-center text-lg text-gray-600">
          Users: <span>{version.user_sessions_count}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          key={version.id}
          to={`version/${version.id}/${
            version.user_sessions_count > 0 ? 'stats' : 'setup'
          }`}
          className="hover:cursor-pointer"
        >
          <Button variant="outline" size="icon">
            <EyeOpenIcon className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="outline">
          <Pencil1Icon />
        </Button>
        <Button
          variant="outline"
          disabled={exportVersion.isPending}
          onClick={handleDownload}
        >
          {exportVersion.isPending ? (
            <ReloadIcon className="animate-spin" />
          ) : (
            <DownloadIcon />
          )}
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};
