export interface SidebarProps {
  tabActive?: string;  // Tên của tab đang active
  onClickTab: (tabName: string) => void;  // Hàm xử lý khi một tab được click
}
