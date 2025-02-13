import React from 'react';
import { AccountLinkProps } from './type';
import styles from './style.module.css';

const AccountLink: React.FC<AccountLinkProps> = ({ message, linkText, linkHref, size = 'md' }) => {
  let textSizeClass = styles.textMd;

  switch (size) {
    case 'sm':
      textSizeClass = styles.textSm;
      break;
    case 'md':
      textSizeClass = styles.textMd;
      break;
    case 'lg':
      textSizeClass = styles.textLg;
      break;
    case 'xl':
      textSizeClass = styles.textXl;
      break;
  }

  return (
    <div className={`${styles.accountLinkContainer} ${textSizeClass}`}>
      <p>
        {message}{' '}
        <a href={linkHref} className={styles.link}>
          {linkText}
        </a>
      </p>
    </div>
  );
};

export default AccountLink;
