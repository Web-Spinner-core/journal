"use client"

import React from 'react';

interface SidebarItemProps {
  children: React.ReactNode;
}

function SidebarItem({ children }: SidebarItemProps) {
  return (
    <div className="sidebar-item mb-2">
      {children}
    </div>
  );
}

export default SidebarItem;
