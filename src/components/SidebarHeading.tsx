import * as React from 'react';

interface SidebarHeadingProps {
  title: string;
}

export function SidebarHeading({ title }: SidebarHeadingProps) {
  return (
    <div className="sidebar-heading uppercase text-xs mb-4">{title}</div>
  );
}
