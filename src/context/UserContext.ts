import { User } from '@/types/common';
import { createContext } from 'react';

interface UserContextType {
  user?: User;
}

export const UserContext = createContext<UserContextType>({});
