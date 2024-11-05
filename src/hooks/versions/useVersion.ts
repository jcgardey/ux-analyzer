import { getVersionById } from '@/services/versions';
import { useQuery } from '@tanstack/react-query';

export const useVersion = (id: number) => {
  return useQuery({
    queryKey: ['versions', id],
    queryFn: () => getVersionById(id),
  });
};
