import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar/NavBar';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

export const RootPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-4/5 mx-auto p-8" style={{ minHeight: '70vh' }}>
        <Outlet />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};
