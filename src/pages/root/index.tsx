import React from 'react';
import Sidebar from '../../layout/sidebar';
import styles from './style.module.css';


const RootPage: React.FC = () => {
  return (
    <div className={styles.rootPage}>
      <Sidebar/>
      <div>Main layout</div>
    </div>
  );
};

export default RootPage;
