import React from 'react';
import UserStories from '../../components/User_Stories';
import styles from './style.module.css';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-row justify-center whitespace-normal">
      <div className={styles.container_feed}>
        {/* list stories */}
        <UserStories />
      </div>
      <div className={styles.suggestions}>div right</div>
    </div>
  );
};

export default HomePage;
