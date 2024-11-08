import { Version } from '@/types/common';
import { useOutletContext } from 'react-router-dom';
import { InteractionEffort } from '../Common/InteractionEffort/InteractionEffort';
import { useRefreshUserInteractionEffort } from '@/hooks/versions/useRefreshUserInteractionEffort';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

export const VersionStats = () => {
  const version = useOutletContext() as Version;
  const refreshInteractionEffort = useRefreshUserInteractionEffort();

  const handleReload = () => {
    refreshInteractionEffort.mutate({ versionId: version.id });
  };

  return (
    <div className="flex align-center w-1/2 bg-gray-100 rounded shadow p-2">
      <div className="mx-3">
        <p className="text-gray-800 text-2xl font-medium italic">
          Interaction Effort
        </p>
        <div className="w-24 mx-auto my-1">
          <InteractionEffort
            className={'text-6xl'}
            score={version.user_interaction_effort}
          />
        </div>
      </div>
      <div className="mx-3 flex flex-col justify-center">
        <p className="text-lg">
          User sessions:{' '}
          <span className="font-bold">{version.user_sessions_count}</span>
        </p>
        <p className="text-lg">
          Interactive Widgets:{' '}
          <span className="font-bold">{version.widgets_count}</span>
        </p>
        <div>
          <Button onClick={handleReload}>
            <ReloadIcon
              className={`${
                refreshInteractionEffort.isPending ? 'animate-spin' : ''
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
