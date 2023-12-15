import React from 'react';
import SidebarItem from '@/components/SidebarItem';
import ProfileAvatar from '@/components/ProfileAvatar';

interface SidebarProps {
  username: string;
}

export default function Sidebar({ username }: SidebarProps) {
  return (
    <div className="sidebar w-1/4 p-6">
      <ProfileAvatar />
      <div className="text-2xl font-bold mb-6">{username}</div>
      <div className="sidebar-heading uppercase text-xs mb-4">Navigation</div>
      <SidebarItem title="Profile" />
      <SidebarItem title="Settings" />
    </div>
  );
}
