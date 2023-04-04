import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export const LoggedUserPage = () => (
  <>
    <NavBar />
    <div className="w-4/5 mx-auto" style={{ minHeight: '70vh' }}>
      <Outlet />
    </div>
    <Footer />
  </>
);
