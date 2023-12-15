import React from 'react';

interface SidebarItemProps {
  title: string;
}

export default function SidebarItem({ title }: SidebarItemProps) {
  return (
    <div className="sidebar-item mb-2">{title}</div>
  );
}
