export interface NavItemProps {
  activeIcon: React.ReactNode;  // Icon được hiển thị khi item active
  icon: React.ReactNode;  // Icon được hiển thị khi item không active
  isActive: boolean;  // Trạng thái active của item
  title: string;  // Tiêu đề của item
  onClick: () => void;  // Hàm xử lý khi item được click
}
