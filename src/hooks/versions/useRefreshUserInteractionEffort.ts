import { refreshUserInteractionEffort } from '@/services/versions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useRefreshUserInteractionEffort = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: refreshUserInteractionEffort,
    onSuccess: (data, params) => {
      queryClient.invalidateQueries({
        queryKey: ['versions', params.versionId],
      });
      queryClient.setQueryData(['versions', params.versionId], data);
    },
  });
};
