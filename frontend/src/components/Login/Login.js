import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { login } from '../../services/user';
import { PrimaryButton } from '../Button/Button';
import { Input } from '../Common/Form';

const ErrorMessage = ({ className, children }) => (
  <p className={`text-red-600 my-1 ${className}`}>{children}</p>
);

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser, setIsAuthenticated } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      login(email, password)
        .then((response) => {
          setIsAuthenticated(true);
          setUser(response.data);
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => setError(error.response.data));
    }
  };

  return (
    <div className="my-4 w-3/4 mx-auto p-4">
      {error.credentials !== '' && (
        <ErrorMessage className="text-center">{error.credentials}</ErrorMessage>
      )}
      <form onSubmit={onSubmit}>
        <div className="my-4">
          <label>Email</label>
          <Input
            type={'text'}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
        </div>
        <div className="my-4">
          <label>Password</label>
          <Input
            type={'password'}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-4">
          <PrimaryButton type={'submit'}>Login</PrimaryButton>
        </div>
      </form>
    </div>
  );
};
