import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Content from '../../layout/Content';
import Sidebar from '../../layout/Sidebar';
import styles from './style.module.css';

const RootPage: React.FC = () => {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState<string>('');
  useEffect(() => {
    handleNavigate(tabActive);
  }, [tabActive]);

  const handleNavigate = useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate],
  );
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
