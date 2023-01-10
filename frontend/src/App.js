import { NavBar } from './components/NavBar';
import { VersionsPage } from './pages/VersionsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <VersionsPage />,
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

