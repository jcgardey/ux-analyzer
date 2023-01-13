import { useEffect, useState } from 'react';
import { getAllUserSessionsOfVersion } from '../../services/user_session';
import { dateToISOString } from '../../utils/date';
import { InteractionEffort } from '../InteractionEffort';

const SessionAttribute = ({ children }) => (
  <p className="w-1/4 mx-2 text-center">{children}</p>
);

const SessionTitle = () => (
  <div className="flex border-b border-gray-300 py-2 text-gray-700 font-semibold">
    <SessionAttribute>Session ID</SessionAttribute>
    <SessionAttribute>Date</SessionAttribute>
    <SessionAttribute>Duration</SessionAttribute>
    <SessionAttribute>Interaction Effort</SessionAttribute>
  </div>
);

const SessionItem = ({ session }) => (
  <div className="flex text-gray-700 my-6 font-medium">
    <SessionAttribute>{session.session_id}</SessionAttribute>
    <SessionAttribute>
      {dateToISOString(new Date(session.date))}
    </SessionAttribute>
    <SessionAttribute>{session.time?.split('.')[0]}</SessionAttribute>
    <div className="w-1/4">
      <div className="w-10 mx-auto">
        <InteractionEffort
          score={session.user_interaction_effort}
          className={'text-xl'}
        />
      </div>
    </div>
  </div>
);

export const UserSessions = ({ versionId }) => {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    getAllUserSessionsOfVersion(versionId).then((res) =>
      setUserSessions(res.data)
    );
  }, [versionId]);

  return (
    <div className="w-3/4 shadow bg-slate-100 py-2">
      <SessionTitle />
      {userSessions.map((session) => (
        <SessionItem session={session} />
      ))}
    </div>
  );
};

