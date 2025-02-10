import React from 'react';
import { NavItemProps } from './types';
import styles from './style.module.css';

const NavItem: React.FC<NavItemProps> = ({
  activeIcon,
  isActive,
  title,
  icon,
  onClick,
}) => {
  return (
    <div
      className={`${styles.nav_item} ${
        isActive ? styles.active : ''
      }`}
      onClick={onClick}
    >
      {isActive ? activeIcon : icon}
      <p className={`text-balance pl-4`} style={{fontWeight: isActive? '600':'normal'}}>{title}</p>
    </div>
  );
};

export default NavItem;
