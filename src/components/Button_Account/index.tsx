// index.tsx
import React from 'react';
import { ButtonAccountProps } from './type';
import styles from './style.module.css';

const ButtonAccount: React.FC<ButtonAccountProps> = ({
  size,
  onClick,
  label,
  variant = 'primary',
  disabled = false,
  fullWidth = false 
}) => {
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

  let variantClass = variant === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary;
  let disabledClass = disabled ? styles.buttonDisabled : '';
  let fullWidthClass = fullWidth ? styles.buttonFullWidth : '';

  return (
    <button
      className={`${styles.button} ${sizeClass} ${variantClass} ${disabledClass} ${fullWidthClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonAccount;
