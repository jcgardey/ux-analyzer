import { getLoggedUser } from '@/services/users';
import { useQuery } from '@tanstack/react-query';

export const useLoggedUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getLoggedUser,
    enabled: localStorage.getItem('token') !== null,
    retry: false,
  });
};
