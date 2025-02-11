import React from 'react';
import { listStories } from '../../common/data/list_stories';
import UserAvatarStory from '../User_Avatar_Story';

const UserStories: React.FC = () => {
  return (
    <div className="mt-6 bg-white border-[1px] cursor-pointer rounded-lg whitespace-nowrap overflow-hidden">
      {listStories.map((e) => {
        return (
          <div
            className="py-4 px-[6px] first:pl-3 last:pr-6 inline-block"
            key={e.id}
          >
            <div className="flex flex-col justify-center items-center">
              <UserAvatarStory
                size={56}
                src={e.avatar}
                haveSeenBefore={e.haveSeenBefore}
              />
              <p
                className="text-ellipsis overflow-hidden max-w-[74px] text-xs pt-[6px] px-[6px]"
                style={{
                  color: e.haveSeenBefore
                    ? 'gray'
                    : 'black',
                }}
              >
                {e.userName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserStories;
