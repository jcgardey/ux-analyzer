import { UserContext } from '@/context/UserContext';
import { useLoggedUser } from '@/hooks/users/useLoggedUser';
import { LoadingPage } from '@/pages/LoadingPage';
import React, { useEffect } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { data: user, isFetching, isError } = useLoggedUser();

  useEffect(() => {
    if (isError && localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }, [isError]);

  if (isFetching) {
    return <LoadingPage />;
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
