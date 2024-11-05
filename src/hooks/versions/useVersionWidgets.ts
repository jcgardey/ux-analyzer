import { getVersionWidgets } from '@/services/versions';
import { useQuery } from '@tanstack/react-query';

export const useVersionWidgets = (id: string) => {
  return useQuery({
    queryKey: ['versions', id, 'widgets'],
    queryFn: () => getVersionWidgets(id),
  });
};
