import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { logout } from '../services/user';

export const NavBar = () => {
  const { user, setIsAuthenticated } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const onLogout = () => {
    logout().then(() => localStorage.removeItem('token'));
    setIsAuthenticated(false);
  };

  return (
    <div
      className={`w-full h-16 bg-sky-900 flex justify-between items-center px-4 py-0.25`}
    >
      <div>
        <Link
          to="/"
          className="text-2xl text-white font-semibold border-r border-white px-1.5"
        >
          UX-Analyzer
        </Link>
        <Link to="/" className="text-white text-lg font-medium mx-4">
          Evaluations
        </Link>
      </div>
      <div className="relative w-56 hover:cursor-pointer">
        <span
          className="text-white text-md font-medium text-right block"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {user.name ? user.name : 'Annonymous User'}{' '}
          <i className="fa-solid fa-caret-down"></i>
        </span>
        {showDropdown && (
          <div className="absolute bg-white w-full p-2 rounded border border-gray-300">
            <Link
              to="/login"
              onClick={onLogout}
              className="block hover:bg-slate-200 p-1"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

