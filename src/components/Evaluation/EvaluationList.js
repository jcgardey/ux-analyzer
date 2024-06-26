import { Grid, GridHeader, GridItem } from '../Common/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteButton, EditButton } from '../Button/Button';

export const EvaluationList = ({ evaluations, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Grid>
      <GridHeader>
        <p className="w-1/3 mx-2">Evaluation Name</p>
        <p className="w-1/3 mx-2">Created</p>
        <div className="w-1/3"></div>
      </GridHeader>
      {evaluations.map((evaluation, i) => (
        <Link
          to={`/evaluation/${evaluation.id}`}
          className="hover:cursor-pointer"
        >
          <GridItem>
            <p className="w-1/3 mx-2">{evaluation.evaluation_name}</p>
            <p className="w-1/3 mx-2">
              {new Date(evaluation.creation_date).toLocaleDateString()}
            </p>
            <div className="w-1/3">
              <EditButton />
              <DeleteButton
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(evaluation.id);
                }}
              />
            </div>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
