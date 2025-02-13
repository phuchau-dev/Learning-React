import React from 'react';
import { UserAvatarStoryProps } from './types';
import CircleAvatar from '../Circle_Avatar';

const UserAvatarStory: React.FC<UserAvatarStoryProps> = ({
  size,
  src,
  haveSeenBefore,
}) => {
  return (
    <div
      className={
        !haveSeenBefore
          ? 'p-[2px] bg-gradient-to-tr from-amber-400 to-fuchsia-600 rounded-full flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none '
          : 'border-[1px] rounded-full'
      }
    >
      <div className="p-[2px] bg-white rounded-full">
        <CircleAvatar
          src={src}
          alt="User Avatar"
          size="md"
          onClick={() => console.log('')}
        />
      </div>
    </div>
  );
};

export default UserAvatarStory;
