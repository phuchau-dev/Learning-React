
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [cookies] = useCookies(['user']);
  const location = useLocation();
  const publicPages = ["explore", "reels", "profile"];

  if (!cookies.user && !publicPages.includes(location.pathname.substring(1))) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
