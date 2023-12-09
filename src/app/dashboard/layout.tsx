import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardWelcome from '../components/DashboardWelcome';
import YourPages from '../components/YourPages';

const DashboardLayout = ({ children }) => {
  const userDetails = {
    name: 'John Smith',
    // Placeholder avatar url
    avatar: 'https://via.placeholder.com/150'
  };

  const pages = [
    { icon: '⚛️', label: 'Physics', href: '/physics' },
    { icon: '🧪', label: 'Chemistry', href: '/chemistry' },
    { icon: '🧬', label: 'Biology', href: '/biology' }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar userDetails={userDetails} />
      <main className="content w-3/4 p-8">
        <DashboardWelcome />
        <YourPages pages={pages} />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
