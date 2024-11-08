import { useOutletContext } from 'react-router-dom';
import { Version } from '@/types/common';
import { useVersionUserSessions } from '@/hooks/versions/useVersionUserSessions';
import dayjs from 'dayjs';
import { Grid, GridHeader, GridItem } from '../Common/Grid/Grid';
import { InteractionEffort } from '../Common/InteractionEffort/InteractionEffort';
import { Spinner } from '../Common/Spinner/Spinner';

export const UserSessions = () => {
  const version = useOutletContext() as Version;

  const { data: userSessions, isPending } = useVersionUserSessions(
    version.id as unknown as string
  );

  if (isPending) {
    return <Spinner />;
  }

  return (
    <Grid>
      <GridHeader>
        <p className="w-1/4 mx-2">Session ID</p>
        <p className="w-1/4 mx-2">Date</p>
        <p className="w-1/4 mx-2">Duration</p>
        <p className="w-1/4 mx-2">Interaction Effort</p>
      </GridHeader>
      {(userSessions ?? []).map((session, i) => (
        <GridItem key={i}>
          <p className="w-1/4 mx-2">{session.session_id}</p>
          <p className="w-1/4 mx-2">
            {dayjs(session.date).format('DD/MM/YYYY HH:mm:ss')}
          </p>
          <p className="w-1/4 mx-2">{session.time?.split('.')[0]}</p>
          <div className="w-1/4 mx-2">
            <div className="w-10">
              <InteractionEffort
                score={session.user_interaction_effort}
                className={'text-xl'}
              />
            </div>
          </div>
        </GridItem>
      ))}
    </Grid>
  );
};
