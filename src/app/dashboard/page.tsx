import React from 'react';
import Sidebar from '@/components/Sidebar';
import ContentArea from '@/components/ContentArea';
import Avatar from '@/components/Avatar';

const DashboardPage = () => {
  const user = {
    name: 'John Smith',
    avatarUrl: '',
    pages: [
      { icon: '⚛️', color: 'blue', name: 'Physics' },
      { icon: '🧪', color: 'green', name: 'Chemistry' },
      { icon: '🧬', color: 'red', name: 'Biology' }
    ],
    menuItems: [
      { name: 'Profile', href: '/profile' },
      { name: 'Settings', href: '/settings' }
    ]
  };

  return (
    <div className="flex h-screen">
      <Sidebar username={user.name} menuItems={user.menuItems} />
      <ContentArea title="Welcome" subtitle="to your private space on the web" pages={user.pages} />
    </div>
  );
};

export default DashboardPage;
