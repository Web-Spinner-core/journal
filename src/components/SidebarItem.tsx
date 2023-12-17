import React from 'react';

interface SidebarItemProps {
  children: React.ReactNode;
}

export function SidebarItem({ children }: SidebarItemProps) {
  return <div className="sidebar-item mb-2">{children}</div>;
}