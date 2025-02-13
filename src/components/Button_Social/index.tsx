// index.tsx
import React from 'react';
import { ButtonProps } from './type';
import styles from './style.module.css';

const Button: React.FC<ButtonProps> = ({ label, onClick, icon, size = 'md', fullWidth = false }) => {
  let sizeClass = styles.buttonMd; 

  switch (size) {
    case 'sm':
      sizeClass = styles.buttonSm;
      break;
    case 'md':
      sizeClass = styles.buttonMd;
      break;
    case 'lg':
      sizeClass = styles.buttonLg;
      break;
    case 'xl':
      sizeClass = styles.buttonXl;
      break;
  }

  let fullWidthClass = fullWidth ? styles.buttonFullWidth : '';

  return (
    <div className={`w-full lg:w-1/2 mb-2 m-2`}>
      <button
        type="button"
        className={`${styles.button} ${sizeClass} ${fullWidthClass}`}
        onClick={onClick}
      >
        <span className={styles.icon}>{icon}</span>
        {label}
      </button>
    </div>
  );
};

export default Button;
