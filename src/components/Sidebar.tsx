import React from 'react';
import Avatar from '@/components/ui/avatar';

interface SidebarProps {
  username: string;
}

export function Sidebar({ username }: SidebarProps) {
  return (
    <div className="sidebar w-1/4 p-8">
      <Avatar size="large" />
      <div className="text-lg mb-8">{username}</div>
      <div className="text-sm">
        <div className="mb-4">Profile</div>
        <div>Settings</div>
      </div>
    </div>
  );
}
