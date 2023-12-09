import React from 'react';
import PageLink from '@/components/PageLink';

const DashboardPage: React.FC = () => {
  const pages = [
    { icon: '⚛️', colorClass: 'text-blue-400', label: 'Physics' },
    { icon: '🧪', colorClass: 'text-green-400', label: 'Chemistry' },
    { icon: '🧬', colorClass: 'text-red-400', label: 'Biology' },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Your pages</h2>
      <div>
        {pages.map((page, index) => (
          <PageLink key={index} icon={page.icon} colorClass={page.colorClass} label={page.label} />
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
