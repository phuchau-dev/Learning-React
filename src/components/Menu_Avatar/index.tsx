import React from 'react';
import { MenuAvatarAvatarProps } from './types';
import styles from './style.module.css';

const MenuAvatar: React.FC<MenuAvatarAvatarProps> = ({
  src,
  alt = 'avatar',
  size = 'md',
  borderColor = 'black',
  borderWidth = 3,
  isActive = false,
  onClick,
}) => {
  const sizeClass =
    size === 'sm'
      ? styles['size-sm']
      : size === 'md'
      ? styles['size-md']
      : size === 'lg'
      ? styles['size-lg']
      : styles['size-xl'];

  const customStyles = {
    borderColor: borderColor,
    borderWidth: `${borderWidth}px`,
    borderStyle: 'solid',
  };

  return (
    <div
      className={`${styles.avatar} ${isActive ? styles.active : ''} ${sizeClass}`}
      style={customStyles}
      onClick={onClick}
    >
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

export default MenuAvatar;
