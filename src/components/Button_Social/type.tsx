// type.tsx
export interface ButtonProps {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}
