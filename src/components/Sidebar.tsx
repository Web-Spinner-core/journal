import React from 'react';
import Link from 'next/link';

const Sidebar = ({ user }) => (
  <div className="sidebar w-1/4 p-8">
    <div className="avatar-placeholder w-16 h-16 mb-4"></div>
    <div className="text-lg mb-8">{user.name}</div>
    <div className="text-sm">
      <Link href="/profile">
        <a className="mb-4">Profile</a>
      </Link>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
    </div>
  </div>
);

export default Sidebar;
