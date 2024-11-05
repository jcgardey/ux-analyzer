import { getVersionUserSessions } from '@/services/versions';
import { useQuery } from '@tanstack/react-query';

export const useVersionUserSessions = (id: string) => {
  return useQuery({
    queryKey: ['versions', id, 'user_sessions'],
    queryFn: () => getVersionUserSessions(id),
  });
};
