import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconHome,
  IconHomeActive,
  IconSearch,
  IconSearchActive,
  IconCreate,
  IconCreateActive,
  IconMessages,
  IconMessagesActive,
  IconNotifications,
  IconNotificationsActive,
  IconExplore,
  IconExploreActive,
  IconMore,
  IconMoreActive,
  IconReels,
  IconReelsActive,
} from '../../components/Icons';

import { InstagramLogo } from '../../components/Images';
import MenuAvatar from '../../components/Menu_Avatar';
import NavItem from '../../components/Nav_Item';
import styles from './style.module.css';
import { SidebarProps } from './type';

const Sidebar: React.FC<SidebarProps> = ({ tabActive, onClickTab }) => {
  const navigate = useNavigate(); 
  const handleTabClick = (tab: string) => {
    onClickTab(tab);
    navigate(`/${tab}`); 
  };
  return (
    <div className={styles.sidebar}>
      <div
        className={`cursor-pointer mb-2 mt-5 px-3 pt-5 pb-4`}
      >
        <InstagramLogo />
      </div>
      <div className={`grow`}>
        <NavItem
          activeIcon={<IconHomeActive />}
          icon={<IconHome />}
          isActive={tabActive ===""}
          title="Home"
          onClick={() => handleTabClick("")}
        />
        <NavItem
          activeIcon={<IconSearchActive />}
          icon={<IconSearch />}
          isActive={false}
          title="Search"
          onClick={() => console.log('Search Tab')}
        />
        <NavItem
          activeIcon={<IconExploreActive />}
          icon={<IconExplore />}
          isActive={tabActive ==="explore"}
          title="Explore"
          onClick={() => handleTabClick("explore")}
        />
        <NavItem
          activeIcon={<IconReelsActive />}
          icon={<IconReels />}
          isActive={tabActive ==="reels"}
          title="Reels"
          onClick={() => handleTabClick("reels")} 
        />
        <NavItem
          activeIcon={<IconMessagesActive />}
          icon={<IconMessages />}
          isActive={false}
          title="Messages"
          onClick={() => console.log('Messages Tab')}
        />
        <NavItem
          activeIcon={<IconNotificationsActive />}
          icon={<IconNotifications />}
          isActive={false}
          title="Notifications"
          onClick={() => console.log('Notifications Tab')}
        />
        <NavItem
          activeIcon={<IconCreateActive />}
          icon={<IconCreate />}
          isActive={false}
          title="Create"
          onClick={() => console.log('Create Tab')}
        />
        <NavItem
          activeIcon={
            <MenuAvatar
              src="https://cdn-icons-png.flaticon.com/512/18499/18499151.png"
              alt="User Avatar"
              size="sm"
              borderColor="#ff0000"
              borderWidth={2}
              isActive={true}
            />
          }
          icon={
            <MenuAvatar
              src="https://cdn-icons-png.flaticon.com/512/18499/18499151.png"
              alt="User Avatar"
              size="sm"
              borderColor="#ff0000"
              borderWidth={2}
              isActive={true}
            />
          }
          isActive={tabActive ==="profile"}
          title="Profile"
          onClick={() => onClickTab("profile")}
        />
      </div>
      <div className={`mb-6`}>
        <NavItem
          activeIcon={<IconMoreActive />}
          icon={<IconMore />}
          isActive={false}
          title="More"
          onClick={() => console.log('More Tab')}
        />
      </div>
    </div>
  );
};

export default Sidebar;
