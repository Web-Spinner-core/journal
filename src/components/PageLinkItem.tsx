import React from 'react';

interface PageLinkItemProps {
  icon: string;
  label: string;
  color: string;
}

export default function PageLinkItem({ icon, label, color }: PageLinkItemProps) {
  return (
    <div className={`page-link text-${color}-400 mb-2`}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
