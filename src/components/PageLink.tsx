import React from 'react';

interface PageLinkProps {
  icon: string;
  color: string;
  name: string;
}

export default function PageLink({ icon, color, name }: PageLinkProps) {
  return (
    <div className={`page-link text-${color}-400 mb-2`}> 
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
}
