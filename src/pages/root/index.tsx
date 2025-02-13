// src/pages/root/index.tsx
import React, { useEffect, useCallback, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Content from '../../layout/Content';
import Sidebar from '../../layout/Sidebar';
import styles from './style.module.css';
import LoginPage from '../Login';

const RootPage: React.FC = () => {
  const publicPages = ["explore", "reels", "profile"];
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies] = useCookies(['user']);
  const [tabActive, setTabActive] = useState<string>(location.pathname.substring(1) || '');

  const handleNavigate = useCallback(
    (url: string) => {
      if (location.pathname !== `/${url}`) {
        navigate(url, { replace: true });
      }
    },
    [navigate, location.pathname],
  );

  useEffect(() => {
    const currentPath = location.pathname.substring(1);
  
    if (!cookies.user) {
      if (!publicPages.includes(currentPath) && location.pathname !== "/") {
        navigate('/');
      }
    } 
  }, [cookies.user, location.pathname, navigate]); 
  
  
  if (!cookies.user && !publicPages.includes(location.pathname.substring(1)) && location.pathname === "/") {
    return <LoginPage />;
  }

  return (
    <div className={`${styles.layout}`}>
      <Sidebar
        tabActive={tabActive}
        onClickTab={setTabActive}
      />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default RootPage;
