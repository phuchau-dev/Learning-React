export interface MenuAvatarAvatarProps {
  src: string;  // URL of the avatar image
  alt?: string;  // Alternative text for the image
  size?: 'sm' | 'md' | 'lg' | 'xl';  // Size of the avatar
  borderColor?: string;  // Border color of the avatar
  borderWidth?: number;  // Border width of the avatar
  isActive?: boolean;  // Active state of the avatar
  onClick?: () => void;  // Click event handler
}
