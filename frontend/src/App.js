import { NavBar } from './components/NavBar';
import { VersionListPage } from './pages/VersionListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { VersionPage } from './pages/VersionPage';
import { getEvaluationVersions, getVersion } from './services/version';
import { EvaluationListPage } from './pages/EvaluationListPage';
import { Footer } from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <EvaluationListPage />,
    },
    {
      path: '/evaluation/:evaluationId/version',
      element: <VersionListPage />,
      loader: ({ params }) =>
        getEvaluationVersions(params.evaluationId).then((res) => res.data),
    },
    {
      path: '/version/:id',
      element: <VersionPage />,
      loader: ({ params }) => getVersion(params.id).then((res) => res.data),
    },
  ]);

  return (
    <>
      <NavBar />
      <div className="w-4/5 mx-auto" style={{ minHeight: '70vh' }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;

