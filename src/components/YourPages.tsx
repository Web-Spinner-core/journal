import React from 'react';
import PageLink from '@/components/PageLink';

const YourPages = ({ pages }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your pages</h2>
      {pages.map((page, index) => (
        <PageLink key={index} icon={page.icon} label={page.label} href={page.href} />
      ))}
    </div>
  );
};

export default YourPages;
