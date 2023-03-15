import { useNavigate } from 'react-router-dom';
import { DeleteButton, EditButton } from '../Button/Button';
import { InteractionEffort } from '../InteractionEffort';

export const VersionItem = ({ version, onDelete }) => {
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(`/version/${version.id}`)}>
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
        <div>
          <EditButton />
          <DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              onDelete(version.id);
            }}
          />
        </div>
      </div>
    </a>
  );
};

