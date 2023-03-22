import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const BreadCrumbs = ({ breadcrumbs }) =>
  breadcrumbs.map((crumb, i) => {
    return breadcrumbs.length - 1 !== i ? (
      <span>
        <Link className="mx-1 hover:underline" to={crumb.href}>
          {crumb.text}
        </Link>{' '}
        /
      </span>
    ) : (
      <span className="mx-2">{crumb.text}</span>
    );
  });

export const EvaluationPage = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return (
    <>
      <div className="my-6 text-gray-700">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <Outlet context={[breadcrumbs, setBreadcrumbs]} />
    </>
  );
};
