import { createVersion } from '@/services/versions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateVersion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createVersion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['versions'] });
      queryClient.invalidateQueries({ queryKey: ['evaluations'] });
    },
  });
};
