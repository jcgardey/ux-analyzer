import { deleteVersion } from '@/services/versions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteVersion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteVersion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['evaluations'] });
    },
  });
};
