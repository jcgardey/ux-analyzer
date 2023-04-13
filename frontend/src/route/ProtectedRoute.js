import { useContext } from 'react';
import { Loading } from '../components/Common/Loading';
import { UserContext } from '../context/UserContext';
import { LandingPage } from '../pages/LandingPage';

export const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useContext(UserContext);
  if (isAuthenticated && user === null) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  return children;
};
