import React from 'react';

interface PageLinkItemProps {
  icon: string;
  label: string;
  colorClassName: string;
}

export function PageLinkItem({ icon, label, colorClassName }: PageLinkItemProps) {
  return (
    <div className={`page-link ${colorClassName} mb-2`}> 
      <span>{icon}</span> 
      <span>{label}</span> 
    </div>
  );
}
