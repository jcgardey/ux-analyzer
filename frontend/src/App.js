import { NavBar } from './components/NavBar';
import { VersionListPage } from './pages/VersionListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <VersionListPage />,
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

