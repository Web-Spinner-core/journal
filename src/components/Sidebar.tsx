import { FC } from 'react';
import Avatar from '@/components/ui/avatar';

interface SidebarProps {
  userName?: string;
}

const Sidebar: FC<SidebarProps> = ({ userName }) => {
  return (
    <div className="sidebar w-1/4 p-6">
      <Avatar className="w-16 h-16 mb-6" />
      <div className="text-2xl font-bold mb-6">{userName || 'User'}</div>
      <SidebarHeading />
      <SidebarItem text="Profile" />
      <SidebarItem text="Settings" />
    </div>
  );
};

export default Sidebar;
