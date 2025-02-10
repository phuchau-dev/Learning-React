import React from 'react';
import { CircleAvatarProps } from './types';
import styles from './style.module.css'; 

const CircleAvatar: React.FC<CircleAvatarProps> = ({
  src,
  alt = 'avatar',
  size = 'md',
  borderColor = 'black',
  borderWidth = 2,
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
    width: `${size}px`,
    height: `${size}px`,
    borderColor: borderColor,
    borderWidth: `${borderWidth}px`,
    borderStyle: 'solid',
  };

  return (
    <div
      className={`${styles.avatar} ${sizeClass}`}
      style={customStyles}
      onClick={onClick}
    >
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

export default CircleAvatar;
