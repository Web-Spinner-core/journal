"use client"

import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <div className="content w-3/4 p-6">
      {children}
    </div>
  );
}

export default Content;
