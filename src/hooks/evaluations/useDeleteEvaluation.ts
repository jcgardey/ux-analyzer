import { deleteEvaluation } from '@/services/evaluations';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['evaluations'] });
    },
  });
};
