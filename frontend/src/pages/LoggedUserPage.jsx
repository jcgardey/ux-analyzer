import { Outlet } from 'react-router-dom';

export const LoggedUserPage = () => (
  <div className="w-4/5 mx-auto" style={{ minHeight: '70vh' }}>
    <Outlet />
  </div>
);
