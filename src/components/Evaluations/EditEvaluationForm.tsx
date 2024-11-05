import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Evaluation } from '@/types/common';
import { useCreateEvaluation } from '@/hooks/evaluations/useCreateEvaluation';
import { UXButton } from '../Button/UXButton';
import { DialogClose } from '../ui/dialog';

interface EditEvaluationFormProps {
  onSuccess: (e: Evaluation) => void;
}

export const EditEvaluationForm: React.FC<EditEvaluationFormProps> = ({
  onSuccess,
}) => {
  const [evaluationName, setEvaluationName] = useState('');

  const createEvaluation = useCreateEvaluation();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createEvaluation.mutate(
      { evaluation_name: evaluationName },
      {
        onSuccess: (data) => {
          onSuccess(data);
        },
      }
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="my-4">
        <Label>Name</Label>
        <Input
          type={'text'}
          value={evaluationName}
          onChange={(e) => setEvaluationName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <DialogClose asChild>
          <UXButton loading={createEvaluation.isPending} type="submit">
            Create
          </UXButton>
        </DialogClose>
      </div>
    </form>
  );
};
