import { NavBar } from './components/NavBar';
import { EvaluationPage } from './pages/EvaluationPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { VersionPage } from './pages/VersionPage';
import { getVersion } from './services/version';
import { EvaluationListPage } from './pages/EvaluationListPage';
import { Footer } from './components/Footer';
import { getEvaluation } from './services/evaluation';
import { createContext, useState } from 'react';

export const NavigationContext = createContext({});

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <EvaluationListPage />,
    },
    {
      path: '/evaluation/:evaluationId',
      element: <EvaluationPage />,
      loader: ({ params }) =>
        getEvaluation(params.evaluationId).then((res) => res.data),
    },
    {
      path: '/version/:id',
      element: <VersionPage />,
      loader: ({ params }) => getVersion(params.id).then((res) => res.data),
    },
  ]);

  const [navigation, setNavigation] = useState([]);

  return (
    <>
      <NavBar />
      <div className="w-4/5 mx-auto" style={{ minHeight: '70vh' }}>
        <NavigationContext.Provider value={{ navigation, setNavigation }}>
          <RouterProvider router={router} />
        </NavigationContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
