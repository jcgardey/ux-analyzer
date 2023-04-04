import { NavBar } from './components/NavBar';
import { EvaluationPage } from './pages/EvaluationPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { VersionPage } from './pages/VersionPage';
import { getVersion } from './services/version';
import { EvaluationListPage } from './pages/EvaluationListPage';
import { Footer } from './components/Footer';
import { getEvaluation } from './services/evaluation';
import { createContext, useState } from 'react';
import { VersionListPage } from './pages/VersionListPage';
import { LoginPage } from './pages/LoginPage';
import { LoggedUserPage } from './pages/LoggedUserPage';
import { UserContext } from './context/UserContext';

export const NavigationContext = createContext({});

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <LoggedUserPage />,
      children: [
        {
          path: '',
          element: <EvaluationListPage />,
        },
        {
          path: 'evaluation/:evaluationId/',
          element: <EvaluationPage />,
          loader: ({ params }) =>
            getEvaluation(params.evaluationId).then((res) => res.data),
          children: [
            {
              path: '',
              element: <VersionListPage />,
              loader: ({ params }) =>
                getEvaluation(params.evaluationId).then((res) => res.data),
            },
            {
              path: 'version/:id',
              element: <VersionPage />,
              loader: ({ params }) =>
                getVersion(params.id).then((res) => res.data),
            },
          ],
        },
      ],
    },
  ]);

  const [user, setUser] = useState({});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
