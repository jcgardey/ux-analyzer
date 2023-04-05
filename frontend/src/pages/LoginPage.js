import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/Button/Button';
import { UserContext } from '../context/UserContext';
import { login } from '../services/user';

const Input = ({ type, ...props }) => (
  <input type={type} {...props} className={'w-full rounded h-8'} />
);

const ErrorMessage = ({ className, children }) => (
  <p className={`text-red-600 my-1 ${className}`}>{children}</p>
);

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      login(email, password)
        .then((response) => {
          setUser(response.data);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        })
        .catch((error) => setError(error.response.data));
    }
  };

  return (
    <div className="my-4 w-1/3 mx-auto bg-gray-100 p-4">
      <h1 className="text-center text-2xl">Login</h1>
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
