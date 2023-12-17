import React from 'react';

export function SidebarHeading({ children }: { children: React.ReactNode }) {
  return <div className="sidebar-heading uppercase text-xs mb-4">{children}</div>;
}