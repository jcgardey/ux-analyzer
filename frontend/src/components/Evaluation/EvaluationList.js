import { Grid, GridHeader, GridItem } from '../Common/Grid';

export const EvaluationList = ({ evaluations }) => (
  <Grid>
    <GridHeader>
      <p className="w-1/3 mx-2">Evaluation Name</p>
      <p className="w-1/3 mx-2">Created</p>
    </GridHeader>
    {evaluations.map((evaluation, i) => (
      <GridItem key={i}>
        <p className="w-1/3 mx-2">{evaluation.evaluation_name}</p>
        <p className="w-1/3 mx-2">
          {new Date(evaluation.creation_date).toLocaleDateString()}
        </p>
      </GridItem>
    ))}
  </Grid>
);

