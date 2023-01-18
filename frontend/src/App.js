import { NavBar } from './components/NavBar';
import { VersionListPage } from './pages/VersionListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { VersionPage } from './pages/VersionPage';
import { getVersion } from './services/version';
import { EvaluationListPage } from './pages/EvaluationListPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <EvaluationListPage />,
    },
    {
      path: '/versions',
      element: <VersionListPage />,
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
      <div className="w-4/5 mx-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

