import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const BreadCrumbs = ({ breadcrumbs }) =>
  breadcrumbs.map((crumb, i) => (
    <span className="mx-1 font-bold">
      {breadcrumbs.length - 1 !== i ? (
        <>
          <Link className="hover:underline font-normal" to={crumb.href}>
            {crumb.text}
          </Link>{' '}
          /
        </>
      ) : (
        crumb.text
      )}
    </span>
  ));

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

