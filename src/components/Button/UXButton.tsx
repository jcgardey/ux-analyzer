import React from 'react';
import { ButtonProps, Button } from '../ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

interface UXButtonProps extends ButtonProps {
  loading?: boolean;
}

export const UXButton: React.FC<UXButtonProps> = ({
  loading = false,
  ...others
}) => (
  <Button {...others} disabled={loading}>
    {loading && <ReloadIcon className="animate-spin" />}
    {others.children}
  </Button>
);
