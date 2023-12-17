import React from 'react';
import Sidebar from '@/components/Sidebar';
import WelcomeMessage from '@/components/WelcomeMessage';
import PageLinksList from '@/components/PageLinksList';

export default function DashboardPage() {
  // Define a list of pages with their respective icons and color classes
  const pages = [
    { icon: '⚛️', label: 'Physics', colorClassName: 'text-blue-400' },
    { icon: '🧪', label: 'Chemistry', colorClassName: 'text-green-400' },
    { icon: '🧬', label: 'Biology', colorClassName: 'text-red-400' },
  ];

  return (
    <div className="flex h-screen text-white">
      <Sidebar username="Gram Liu" />
      <div className="content w-3/4 p-6">
        <WelcomeMessage />
        <PageLinksList pages={pages} />
      </div>
    </div>
  );
}
