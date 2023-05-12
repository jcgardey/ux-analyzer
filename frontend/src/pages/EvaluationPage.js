import { Link, Outlet, useMatches } from 'react-router-dom';

const BreadCrumbs = () => {
  const patterns = [
    { path: /^\/evaluation\/\d+$/, text: (data) => data.evaluation_name },
    {
      path: /^\/evaluation\/\d+\/version\/\d+$/,
      text: (data) => data.version_name,
    },
  ];
  const matches = useMatches();

  const findPattern = (path) =>
    patterns.find((pattern) => pattern.path.test(path));

  const breadcrumbs = [
    { href: '/', text: 'Evaluations' },
    ...matches
      .filter((match) => findPattern(match.pathname))
      .map((match) => ({
        href: match.pathname,
        text: findPattern(match.pathname).text(match.data),
      })),
  ];

  return breadcrumbs.map((crumb, i) => (
    <span key={i} className="mx-1 font-bold">
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
};

export const EvaluationPage = () => {
  return (
    <>
      <div className="my-6 text-gray-700">
        <BreadCrumbs />
      </div>
      <Outlet />
    </>
  );
};

