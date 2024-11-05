import { updateWidgetsSettings } from '@/services/versions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../use-toast';

export const useUpdateWidgetSettings = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: updateWidgetsSettings,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['versions', variables.versionId],
      });
      toast({ description: 'Widgets updated successfully.' });
    },
  });
};
