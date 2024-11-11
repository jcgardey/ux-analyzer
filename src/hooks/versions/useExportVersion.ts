import { exportVersion } from '@/services/versions';
import { useMutation } from '@tanstack/react-query';

export const useExportVersion = () => {
  return useMutation({
    mutationFn: exportVersion,
  });
};
