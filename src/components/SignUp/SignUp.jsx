import { useForm } from 'react-hook-form';
import { FieldError, Input, Label } from '../Common/Form';
import { PrimaryButton } from '../Button/Button';
import { signUpUser } from '../../services/user';

export const SignUp = ({ onFinish }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    signUpUser(data)
      .then((response) => {
        onFinish();
      })
      .catch((error) => {
        if (error.response?.data.email) {
          setError('email', { type: 'already_exists' });
        }
      });
  };

  return (
    <div className="my-4 w-3/4 mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <Label>Name</Label>
          <Input {...register('name', { required: true })} />
          {errors.name && <FieldError>Name is required</FieldError>}
        </div>
        <div className="my-4">
          <Label>Email</Label>
          <Input
            {...register('email', {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <FieldError>Email is required</FieldError>
          )}
          {errors.email?.type === 'pattern' && (
            <FieldError>Invalid email address</FieldError>
          )}
          {errors.email?.type === 'already_exists' && (
            <FieldError>User with this email already exists</FieldError>
          )}
        </div>
        <div className="my-4">
          <Label>Password</Label>
          <Input
            type={'password'}
            {...register('password', { required: true })}
          />
          {errors.password && <FieldError>Password is required</FieldError>}
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
            <FieldError>Passwords do not match</FieldError>
          )}
        </div>
        <div className="my-4">
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </form>
    </div>
  );
};
