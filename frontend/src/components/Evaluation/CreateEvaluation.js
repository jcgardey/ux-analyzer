import { useState } from 'react';
import { createEvaluation } from '../../services/evaluation';
import { PrimaryButton } from '../Button/Button';

export const CreateEvaluation = ({ onEvaluationCreated }) => {
  const [evaluationName, setEvaluationName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createEvaluation(evaluationName).then((response) =>
      onEvaluationCreated(response.data)
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="my-4">
        <label className="text-gray-700 font-medium block text-lg">Name</label>
        <input
          type={'text'}
          value={evaluationName}
          className="w-full h-10 border border-sky-700 rounded text-gray-700 px-2 py-0.5"
          onChange={(e) => setEvaluationName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <PrimaryButton type="submit">Create</PrimaryButton>
      </div>
    </form>
  );
};

