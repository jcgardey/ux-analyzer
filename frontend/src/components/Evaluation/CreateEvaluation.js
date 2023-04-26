import { useState } from 'react';
import { createEvaluation } from '../../services/evaluation';
import { PrimaryButton } from '../Button/Button';
import { Input, Label } from '../Common/Form';

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
        <Label className="text-gray-700 font-medium block text-lg">Name</Label>
        <Input
          type={'text'}
          value={evaluationName}
          onChange={(e) => setEvaluationName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <PrimaryButton type="submit">Create</PrimaryButton>
      </div>
    </form>
  );
};
