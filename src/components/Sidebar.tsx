import React from 'react';
import Avatar from '@/components/Avatar';
import PageLink from '@/components/PageLink';

const Sidebar = ({ userDetails }) => {
  return (
    <div className="sidebar w-1/4 p-8">
      <Avatar url={userDetails.avatar} placeholder="/images/avatar-placeholder.png" />
      <div className="text-lg mb-8">{userDetails.name}</div>
      <div className="text-sm">
        <PageLink icon={'👤'} label={'Profile'} href={'/profile'} />
        <PageLink icon={'⚙️'} label={'Settings'} href={'/settings'} />
      </div>
    </div>
  );
};

export default Sidebar;
