import { Link } from 'react-router-dom';
import { Evaluation } from '@/types/common';
import { Grid, GridHeader, GridItem } from '../common/Grid/Grid';
import { Button } from '../ui/button';
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import { useDeleteEvaluation } from '@/hooks/evaluations/useDeleteEvaluation';

interface EvaluationListProps {
  evaluations: Evaluation[];
}

export const EvaluationList: React.FC<EvaluationListProps> = ({
  evaluations,
}) => {
  const deleteEvaluation = useDeleteEvaluation();

  const handleDelete = useCallback(
    (id: number) => {
      deleteEvaluation.mutate(id);
    },
    [deleteEvaluation]
  );

  return (
    <Grid>
      <GridHeader>
        <p className="w-1/3 mx-2">Evaluation Name</p>
        <p className="w-1/3 mx-2">Created</p>
        <div className="w-1/3"></div>
      </GridHeader>
      {evaluations.map((evaluation) => (
        <GridItem key={evaluation.id}>
          <p className="w-1/3 mx-2">{evaluation.evaluation_name}</p>
          <p className="w-1/3 mx-2">
            {new Date(evaluation.creation_date).toLocaleDateString()}
          </p>
          <div className="w-1/3 flex gap-3">
            <Link
              key={evaluation.id}
              to={`/evaluations/${evaluation.id}`}
              className="hover:cursor-pointer"
            >
              <Button variant="outline" size="icon">
                <EyeOpenIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="icon">
              <Pencil1Icon className="h-4 w-4" />
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(evaluation.id);
              }}
              variant="destructive"
              size="icon"
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>
        </GridItem>
      ))}
    </Grid>
  );
};
