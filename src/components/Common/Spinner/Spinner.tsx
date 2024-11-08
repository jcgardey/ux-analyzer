import { ReloadIcon } from '@radix-ui/react-icons';

export const Spinner = () => (
  <div className="h-full flex justify-center items-center">
    <ReloadIcon className="h-8 w-8 animate-spin" />
  </div>
);
