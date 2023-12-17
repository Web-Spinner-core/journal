"use client"

import React from 'react';

interface SidebarHeadingProps {
  text: string;
}

function SidebarHeading({ text }: SidebarHeadingProps) {
  return (
    <div className="sidebar-heading uppercase text-xs mb-4">
      {text}
    </div>
  );
}

export default SidebarHeading;
