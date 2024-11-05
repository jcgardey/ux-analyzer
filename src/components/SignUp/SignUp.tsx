import { SubmitHandler, useForm } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSignUp } from '@/hooks/users/useSignUp';
import { isAxiosError } from 'axios';
import { ReloadIcon } from '@radix-ui/react-icons';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  repeat_password: string;
}

interface SignUpProps {
  onFinish: () => void;
}

export const SignUp = ({ onFinish }: SignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpForm>();

  const signUp = useSignUp();

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    signUp.mutate(data, {
      onSuccess: () => {
        onFinish();
      },
      onError: (error) => {
        if (isAxiosError(error) && error.response?.data.email) {
          setError('email', { type: 'already_exists' });
        }
      },
    });
  };

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <Label>Name</Label>
          <Input {...register('name', { required: true })} />
          {errors.name && <p>Name is required</p>}
        </div>
        <div className="my-4">
          <Label>Email</Label>
          <Input
            {...register('email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === 'required' && <p>Email is required</p>}
          {errors.email?.type === 'pattern' && <p>Invalid email address</p>}
          {errors.email?.type === 'already_exists' && (
            <p>User with this email already exists</p>
          )}
        </div>
        <div className="my-4">
          <Label>Password</Label>
          <Input
            type={'password'}
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password is required</p>}
        </div>
        <div className="my-4">
          <Label>Repeat Password</Label>
          <Input
            type={'password'}
            {...register('repeat_password', {
              required: true,
              validate: (value, formValues) => value === formValues.password,
            })}
          />
          {errors.repeat_password?.type === 'validate' && (
            <p>Passwords do not match</p>
          )}
        </div>
        <div className="my-4">
          <Button disabled={signUp.isPending}>
            {' '}
            {signUp.isPending && <ReloadIcon className="animate-spin" />} Sign
            Up
          </Button>
        </div>
      </form>
    </div>
  );
};
