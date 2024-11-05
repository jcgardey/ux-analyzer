import { Button } from '../ui/button';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

export const AnonymousUser = () => {
  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Login</Button>
        </DialogTrigger>
        <DialogContent aria-describedby="Login">
          <DialogTitle>Login</DialogTitle>
          <Login />
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Sign Up</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Sign Up</DialogTitle>
          <SignUp onFinish={() => {}} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
