import { useEffect, useState } from 'react';
import { getAllUserSessionsOfVersion } from '../../services/user_session';
import { dateToISOString } from '../../utils/date';
import { Grid, GridHeader, GridItem } from '../Common/Grid';
import { InteractionEffort } from '../InteractionEffort';
import { useOutletContext } from 'react-router-dom';

export const UserSessions = () => {
  const [userSessions, setUserSessions] = useState([]);
  const version = useOutletContext();

  useEffect(() => {
    getAllUserSessionsOfVersion(version.id).then((res) =>
      setUserSessions(res.data)
    );
  }, [version.id]);

  return (
    <Grid>
      <GridHeader>
        <p className="w-1/4 mx-2">Session ID</p>
        <p className="w-1/4 mx-2">Date</p>
        <p className="w-1/4 mx-2">Duration</p>
        <p className="w-1/4 mx-2">Interaction Effort</p>
      </GridHeader>
      {userSessions.map((session, i) => (
        <GridItem key={i}>
          <p className="w-1/4 mx-2">{session.session_id}</p>
          <p className="w-1/4 mx-2">
            {dateToISOString(new Date(session.date))}
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

