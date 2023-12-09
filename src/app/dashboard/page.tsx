import React from 'react';
import Sidebar from '@/components/Sidebar';
import ContentArea from '@/components/ContentArea';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';

const DashboardPage = () => {
  // This data would typically come from an API or a global state
  const user = { name: 'John Smith' };
  const pages = [
    { icon: '⚛️', color: 'blue', title: 'Physics' },
    { icon: '🧪', color: 'green', title: 'Chemistry' },
    { icon: '🧬', color: 'red', title: 'Biology' }
  ];

  return (
    <div className="flex">
      <Sidebar user={user} />
      <ContentArea
        title="Welcome"
        welcomeMessage="to your private space on the web"
        pages={pages}
      />
    </div>
  );
};

export default DashboardPage;
