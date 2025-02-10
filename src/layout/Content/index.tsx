import React from 'react';
import { ContentProps } from './type';
import styles from './style.module.css';
const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className={`${styles.content}`}>
      {children}
    </div>
  );
};

export default Content;
