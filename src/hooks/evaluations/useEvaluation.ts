import { getEvaluationById } from '@/services/evaluations';
import { useQuery } from '@tanstack/react-query';

export const useEvaluation = (id: string) => {
  return useQuery({
    queryKey: ['evaluations', id],
    queryFn: () => getEvaluationById(id),
  });
};
