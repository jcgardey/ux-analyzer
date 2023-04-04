import { useState } from 'react';
import { PrimaryButton } from '../components/Button/Button';
import { login } from '../services/user';

const Input = ({ type, ...props }) => (
  <input type={type} {...props} className={'w-full rounded h-8'} />
);

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      login(username, password);
    }
  };

  return (
    <div className="my-4 w-1/3 mx-auto bg-gray-100 p-4">
      <h1 className="text-center text-2xl">Login</h1>
      <form onSubmit={onSubmit}>
        <div className="my-4">
          <label>Username</label>
          <Input
            type={'text'}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
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
