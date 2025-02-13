// index.tsx
import React from 'react';
import { AlertProps } from './type';
import styles from './style.module.css';

const Alert: React.FC<AlertProps> = ({ message, type, icon }) => {
  let typeClass;

  switch (type) {
    case 'success':
      typeClass = styles.alertSuccess;
      break;
    case 'error':
      typeClass = styles.alertError;
      break;
    case 'warning':
      typeClass = styles.alertWarning;
      break;
    case 'info':
      typeClass = styles.alertInfo;
      break;
    default:
      typeClass = styles.alertInfo;
      break;
  }

  return (
    <div className={`${styles.alert} ${typeClass}`} role="alert">
      <span className={styles.icon}>{icon}</span>
      <span className={styles.fontBold}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
      {message}
    </div>
  );
};

export default Alert;
