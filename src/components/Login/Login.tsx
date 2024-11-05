import { useState } from 'react';
import { LoginError } from '../../services/users';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useLogin } from '@/hooks/users/useLogin';
import { isAxiosError } from 'axios';
import { UXButton } from '../Button/UXButton';

interface ErrorMessageProps {
  className: string;
  text: string;
}

const ErrorMessage = ({ className, text }: ErrorMessageProps) => (
  <p className={`text-red-600 my-1 ${className}`}>{text}</p>
);

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<LoginError | null>(null);

  const login = useLogin();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      login.mutate(
        { email, password },
        {
          onError: (error) => {
            if (isAxiosError(error) && error.response?.data) {
              setError(error.response.data);
            }
          },
        }
      );
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      {error?.credentials && (
        <ErrorMessage className="text-center" text={error.credentials} />
      )}
      <form onSubmit={onSubmit}>
        <div className="my-4">
          <Label>Email</Label>
          <Input
            type={'text'}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error?.email && <ErrorMessage className="" text={error.email} />}
        </div>
        <div className="my-4">
          <Label>Password</Label>
          <Input
            type={'password'}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-4">
          <UXButton loading={login.isPending} type={'submit'}>
            Login
          </UXButton>
        </div>
      </form>
    </div>
  );
};
