import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/users';
import { UserContext } from '../../context/UserContext';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../ui/dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useQueryClient } from '@tanstack/react-query';

export const LoggedUser = () => {
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onLogout = () => {
    logout().then(() => {
      localStorage.removeItem('token');
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.setQueryData(['user'], null);
      navigate('/');
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        {user?.name ? user.name : 'Annonymous User'} <CaretDownIcon />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/" onClick={onLogout} className=" p-1">
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
