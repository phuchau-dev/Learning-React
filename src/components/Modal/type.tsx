export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  position?: 'top' | 'bottom' | 'center' | 'top-center' | 'bottom-center';
  title?: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode; 
}
