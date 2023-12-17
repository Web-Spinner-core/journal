import * as React from 'react';

interface SidebarItemProps {
  title: string;
}

export function SidebarItem({ title }: SidebarItemProps) {
  return (
    <div className="sidebar-item mb-2">{title}</div>
  );
}
