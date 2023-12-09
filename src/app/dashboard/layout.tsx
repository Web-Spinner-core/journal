import React from 'react';
import Sidebar from '@/components/Sidebar';
import ContentArea from '@/components/ContentArea';
import PageLink from '@/components/PageLink';
import Avatar from '@/components/Avatar';

const menuItems = [
  { name: 'Profile', link: '/profile' },
  { name: 'Settings', link: '/settings' },
];

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar username="John Smith" menuItems={menuItems} />
      <ContentArea title="Welcome" subtitle="to your private space on the web">
        {children}
      </ContentArea>
    </div>
  );
};

export default DashboardLayout;
