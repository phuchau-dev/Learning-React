import React from 'react';
import styles from './style.module.css';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className={styles.container_feed}>
        div left
      </div>
      <div className={styles.suggestions}>
        div right
      </div>
    </div>
  );
};

export default HomePage;
