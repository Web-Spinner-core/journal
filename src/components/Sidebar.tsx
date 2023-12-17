import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { SidebarHeading } from './SidebarHeading';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  username: string;
}

export function Sidebar({ username }: SidebarProps) {
  return (
    <div className="sidebar w-1/4 p-6">
      <Avatar className="w-16 h-16 mb-6" />
      <div className="text-2xl font-bold mb-6">{username}</div>
      <SidebarHeading>Navigation</SidebarHeading>
      <SidebarItem>Profile</SidebarItem>
      <SidebarItem>Settings</SidebarItem>
    </div>
  );
}