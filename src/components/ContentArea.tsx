import React from 'react';
import PageLink from '@/components/PageLink';

interface ContentAreaProps {
  title: string;
  subtitle: string;
  pages: { icon: string; color: string; name: string; }[];
}

export default function ContentArea({ title, subtitle, pages }: ContentAreaProps) {
  return (
    <div className="content w-3/4 p-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-12">{subtitle}</p>
      <h2 className="text-2xl font-semibold mb-4">Your pages</h2>
      <div>
        {pages.map(page => (
          <PageLink
            key={page.name}
            icon={page.icon}
            color={page.color}
            name={page.name}
          />
        ))}
      </div>
    </div>
  );
}
