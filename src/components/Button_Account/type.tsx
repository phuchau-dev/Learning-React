// type.tsx
export interface ButtonAccountProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  onClick: () => void;
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  fullWidth?: boolean; // Thêm thuộc tính fullWidth
}
