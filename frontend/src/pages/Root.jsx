import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer';

export const Root = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
