import React from 'react';

interface PageLinkProps {
  icon: string;
  label: string;
  color: string;
}

export function PageLink({ icon, label, color }: PageLinkProps) {
  return (
    <div className={`page-link text-${color}-400 mb-2`}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
