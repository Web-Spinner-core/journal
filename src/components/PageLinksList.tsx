import React from 'react';
import { PageLinkItem } from './PageLinkItem';

interface PageLinksProps {
  pages: Array<{ icon: string; label: string; colorClassName: string; }>;
}

export default function PageLinksList({ pages }: PageLinksProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Your pages</h2>
      {pages.map((page, index) => (
        <PageLinkItem
          key={index}
          icon={page.icon}
          label={page.label}
          colorClassName={page.colorClassName}
        />
      ))}
    </div>
  );
}
