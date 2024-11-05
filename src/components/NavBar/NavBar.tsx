import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import logo from '../../media/logo.png';
import { LoggedUser } from './LoggedUser';
import { AnonymousUser } from './AnonymousUser';

export const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav
      className={`w-full h-24 shadow flex justify-between items-center px-16 py-1`}
    >
      <div>
        <Link to="/" className="text-2xl text-white font-semibold px-1.5">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {user ? <LoggedUser /> : <AnonymousUser />}
    </nav>
  );
};
