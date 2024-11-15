import { joinWidgets } from '@/services/versions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../use-toast';

export const useMergeWidgets = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: joinWidgets,
    onSuccess: (_, params) => {
      queryClient.invalidateQueries({
        queryKey: ['versions', params.versionId],
      });
      toast({ description: 'Widgets merged successfully.' });
    },
  });
};
