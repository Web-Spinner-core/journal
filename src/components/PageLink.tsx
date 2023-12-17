import * as React from 'react';

interface PageLinkProps {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

export function PageLink({ icon, title, colorClass }: PageLinkProps) {
  return (
    <div className={`page-link ${colorClass} mb-2`}> 
      <span>{icon}</span> 
      <span>{title}</span> 
    </div>
  );
}
