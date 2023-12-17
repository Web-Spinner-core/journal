"use client"

import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="sidebar w-1/4 p-6">
      {children}
    </div>
  );
}

export default Sidebar;
