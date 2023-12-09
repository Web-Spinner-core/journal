import React from 'react';
import PageLink from '@/components/PageLink';

const ContentArea = ({ title, welcomeMessage, pages }) => (
  <div className="content w-3/4 p-8">
    <h1 className="text-4xl font-bold mb-6">{title}</h1>
    <p className="text-lg mb-12">{welcomeMessage}</p>
    <h2 className="text-2xl font-semibold mb-4">Your pages</h2>
    {pages.map(page => (
      <PageLink key={page.title} icon={page.icon} color={page.color} title={page.title} />
    ))}
  </div>
);

export default ContentArea;
