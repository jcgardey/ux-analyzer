import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return <p>Cargando usuario..</p>;
  }
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
};
