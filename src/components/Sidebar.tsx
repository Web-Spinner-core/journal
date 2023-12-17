import React from 'react';
import Avatar from '@/components/ui/avatar';

interface SidebarProps {
  username: string;
}

export default function Sidebar({ username }: SidebarProps) {
  return (
    <div className="sidebar w-1/4 p-6">
      <Avatar className="w-16 h-16 mb-6" />
      <div className="text-2xl font-bold mb-6">{username}</div>
      <div className="sidebar-heading uppercase text-xs mb-4">Navigation</div>
      <div className="sidebar-item mb-2">Profile</div>
      <div className="sidebar-item mb-2">Settings</div>
    </div>
  );
}
