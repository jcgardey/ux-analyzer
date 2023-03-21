import { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

export const EvaluationPage = () => {
  const evaluation = useLoaderData();

  return (
    <>
      <div className="my-6 text-gray-700">
        <Link className="hover:underline" to={'/'}>
          Evaluations
        </Link>{' '}
        / <span className="font-semibold">{evaluation.evaluation_name}</span>
      </div>
      <Outlet />
    </>
  );
};
