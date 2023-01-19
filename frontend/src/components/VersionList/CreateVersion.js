import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createVersion } from '../../services/version';
import { PrimaryButton } from '../Button/Button';

export const CreateVersion = ({ onVersionCreated }) => {
  const [versionName, setVersionName] = useState('');

  const { evaluationId } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    createVersion(evaluationId, versionName).then((res) =>
      onVersionCreated(res.data)
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="my-4">
        <label className="text-gray-700 font-medium block text-lg">Name</label>
        <input
          type={'text'}
          value={versionName}
          className="w-full h-10 border border-sky-700 rounded text-gray-700 px-2 py-0.5"
          onChange={(e) => setVersionName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <PrimaryButton type="submit">Create</PrimaryButton>
      </div>
    </form>
  );
};

