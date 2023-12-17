import * as React from 'react';
import Avatar from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface SidebarProps {
  username: string;
}

export function Sidebar({ username }: SidebarProps) {
  return (
    <Card className="sidebar w-1/4 p-6">
      <Avatar className="w-16 h-16 mb-6" />
      <div className="text-2xl font-bold mb-6">{username}</div>
      <SidebarHeading title="Navigation" />
      <SidebarItem title="Profile" />
      <SidebarItem title="Settings" />
    </Card>
  );
}
