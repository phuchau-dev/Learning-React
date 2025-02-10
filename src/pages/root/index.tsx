import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className={styles.rootPage}>
      <Sidebar
        tabActive={tabActive}
        onClickTab={setTabActive}
      />
      <div>Main layout</div>
    </div>
  );
};

export default RootPage;
