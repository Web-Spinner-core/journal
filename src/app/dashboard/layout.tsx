import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardWelcome from '@/components/DashboardWelcome';
import YourPages from '@/components/YourPages';

const Layout = ({ children }) => {
  const userDetails = { name: 'John Smith', avatar: '/images/john-smith-avatar.png' };
  const pages = [
    { icon: '⚛️', label: 'Physics', href: '/physics' },
    { icon: '🧪', label: 'Chemistry', href: '/chemistry' },
    { icon: '🧬', label: 'Biology', href: '/biology' }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar userDetails={userDetails} />
      <div className="content w-3/4 p-8">
        <DashboardWelcome />
        <YourPages pages={pages} />
      </div>
    </div>
  );
};

export default Layout;
