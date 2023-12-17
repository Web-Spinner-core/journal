import React from 'react';

interface PageLinkProps {
  color: string;
  emoji: string;
  title: string;
}

export function PageLink({ color, emoji, title }: PageLinkProps) {
  return (
    <div className={`page-link ${color} mb-2`}> 
      <span>{emoji}</span>
      <span>{title}</span>
    </div>
  );
}