import { Grid, GridHeader, GridItem } from '../Common/Grid';
import { Link } from 'react-router-dom';

export const EvaluationList = ({ evaluations, onDelete }) => {
  return (
    <Grid>
      <GridHeader>
        <p className="w-1/3 mx-2">Evaluation Name</p>
        <p className="w-1/3 mx-2">Created</p>
        <div className="w-1/3"></div>
      </GridHeader>
      {evaluations.map((evaluation, i) => (
        <Link to={`/versions`}>
          <GridItem key={i}>
            <p className="w-1/3 mx-2">{evaluation.evaluation_name}</p>
            <p className="w-1/3 mx-2">
              {new Date(evaluation.creation_date).toLocaleDateString()}
            </p>
            <div className="w-1/3">
              <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-2xl text-gray-700 mx-2">
                <i className="fa-solid fa-lg fa-pencil"></i>
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 p-2 rounded-2xl text-white mx-2"
                onClick={() => onDelete(evaluation.id)}
              >
                <i className="fa-solid fa-lg fa-trash"></i>
              </button>
            </div>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};

