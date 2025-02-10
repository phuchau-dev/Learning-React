import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconSearch,
  IconSearchActive,
} from '../../components/Icons';
import IconCreate from '../../components/Icons/icon_create';
import IconCreateActive from '../../components/Icons/icon_create_active';
import IconExplore from '../../components/Icons/icon_explore';
import IconExploreActive from '../../components/Icons/icon_explore_active';
import IconMessages from '../../components/Icons/icon_messages';
import IconMessagesActive from '../../components/Icons/icon_messages_active';
import IconMore from '../../components/Icons/icon_more';
import IconMoreActive from '../../components/Icons/icon_more_active';
import IconNotifications from '../../components/Icons/icon_notifications';
import IconNotificationsActive from '../../components/Icons/icon_notifications_active';
import IconReels from '../../components/Icons/icon_reels';
import IconReelsActive from '../../components/Icons/icon_reels_active';
import { InstagramLogo } from '../../components/Images';
import MenuAvatar from '../../components/Menu_Avatar';
import NavItem from '../../components/Nav-Item';
import styles from './style.module.css';

const Sidebar: React.FC = () => {
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
          isActive={true}
          title="Home"
          onClick={() => console.log('Home Tab')}
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
          isActive={false}
          title="Explore"
          onClick={() => console.log('Explore Tab')}
        />
        <NavItem
          activeIcon={<IconReelsActive />}
          icon={<IconReels />}
          isActive={false}
          title="Reels"
          onClick={() => console.log('Reels Tab')}
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
              isActive={false}
            />
          }
          isActive={false}
          title="Profile"
          onClick={() => console.log('Profile Tab')}
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
