import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export const VersionRoot = () => {
  const navigate = useNavigate();
  const version = useOutletContext();

  useEffect(() => {
    navigate(version.user_sessions_count > 0 ? 'stats' : 'setup');
  }, [navigate, version]);
};

