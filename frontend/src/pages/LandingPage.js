import { useState } from 'react';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <p>Landing Page</p>
      <Footer />
    </div>
  );
};
