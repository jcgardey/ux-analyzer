import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components/Common/Loading';
import { UserContext } from '../context/UserContext';

export const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useContext(UserContext);
  if (isAuthenticated && user === null) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
