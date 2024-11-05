import { createEvaluation } from '@/services/evaluations';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['evaluations'] });
    },
  });
};
