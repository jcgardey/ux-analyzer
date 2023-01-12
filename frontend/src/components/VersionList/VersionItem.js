import { Link } from 'react-router-dom';
import { InteractionEffort } from '../InteractionEffort';

export const VersionItem = ({ version }) => (
  <Link to={`/version/${version.id}`}>
    <div className="w-60 rounded border drop-shadow-lg p-1.5 bg-gray-100 hover:cursor-pointer hover:bg-gray-200">
      <h3 className="font-sans text-center text-gray-700 font-bold text-2xl">
        {version.version_name}
      </h3>
      <div className="my-1.5 mx-auto w-3/4">
        <p className="text-center text-gray-800 italic">Interaction Effort</p>
        <div className="my-1 mx-auto w-1/3">
          <InteractionEffort
            className={'text-3xl'}
            score={version.user_interaction_effort}
          />
        </div>
      </div>
      <div className="my-1.5">
        <p className="text-center text-gray-600">
          Users: <span>{version.user_sessions_count}</span>
        </p>
      </div>
    </div>
  </Link>
);

