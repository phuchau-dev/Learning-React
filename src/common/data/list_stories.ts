

import { Story, User } from "../models";
export type UserStory = User & Story;

export const listStories: UserStory[] = [
  {
    id: "1",
    userName: "john_doe",
    displayName: "John Doe", 
    haveSeenBefore: false,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: "2",
    userName: "jane_smith",
    displayName: "Jane Smith", 
    haveSeenBefore: false,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    userName: "michael_brown",
    displayName: "Michael Brown", 
    haveSeenBefore: false,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: "4",
    userName: "emma_jones",
    displayName: "Emma Jones",
    haveSeenBefore: true,
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: "5",
    userName: "william_taylor",
    displayName: "William Taylor", 
    haveSeenBefore: false,
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },

];
