import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';

export const AnonymousUser = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowLogin(true)}
        className="mx-2 bg-red p-3 text-white rounded-full"
      >
        Login
      </button>
      <button
        onClick={() => setShowSignUp(true)}
        className="mx-2 border p-3 rounded-full text-red border-red"
      >
        Sign Up
      </button>
      {showLogin && (
        <Modal handleClose={() => setShowLogin(false)} title="Login">
          <Login />
        </Modal>
      )}
      {showSignUp && (
        <Modal handleClose={() => setShowSignUp(false)} title="Sign Up">
          <SignUp />
        </Modal>
      )}
    </>
  );
};

