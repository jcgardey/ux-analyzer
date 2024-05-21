import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoutIcon } from '../Icons/LogoutIcon';
import { logout } from '../../services/user';
import { UserContext } from '../../context/UserContext';

export const LoggedUser = () => {
  const { user, setIsAuthenticated } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const onLogout = () => {
    logout().then(() => localStorage.removeItem('token'));
    setIsAuthenticated(false);
  };

  return (
    <>
      <span
        className="text-red text-lg font-medium text-right block"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {user.name ? user.name : 'Annonymous User'}{' '}
        <i className="fa-solid fa-caret-down"></i>
      </span>
      {showDropdown && (
        <div className="absolute bg-white w-full p-2 rounded border border-gray-300">
          <Link
            to="/"
            onClick={onLogout}
            className="block font-medium text-orange hover:text-yellow p-1"
          >
            <LogoutIcon /> Logout
          </Link>
        </div>
      )}
    </>
  );
};
