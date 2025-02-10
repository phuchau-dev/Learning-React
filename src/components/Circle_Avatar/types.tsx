export interface CircleAvatarProps {
  src: string;  // URL of the avatar image
  alt?: string;  // Alternative text for the image
  size?: 'sm' | 'md' | 'lg' | 'xl'; 
  borderColor?: string;  // Border color of the avatar
  borderWidth?: number;  // Border width of the avatar
  onClick?: () => void;  // Click event handler
}
