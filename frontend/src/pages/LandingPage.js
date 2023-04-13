import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';

export const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div className="flex justify-between mx-4 my-2">
        <div>
          <h2 className="text-4xl">UX-Analyzer</h2>
        </div>
        <div>
          <button
            onClick={() => setShowLogin(true)}
            className="mx-2 bg-sky-700 p-3 text-white rounded-full"
          >
            Login
          </button>
          <button className="mx-2 border p-3 rounded-full text-sky-900 border-sky-900">
            Sign Up
          </button>
        </div>
      </div>
      {showLogin && (
        <Modal handleClose={() => setShowLogin(false)} title="Login"></Modal>
      )}
    </div>
  );
};
