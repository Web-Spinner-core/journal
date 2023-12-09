import React from 'react';

const Sidebar = ({ userDetails }) => {
  return (
    <aside className="sidebar w-1/4 p-8">
      <div className="avatar-placeholder w-16 h-16 mb-4"></div>
      <div className="text-lg mb-8">{userDetails.name}</div>
      <nav className="text-sm">
        <a href="/profile" className="block mb-4">Profile</a>
        <a href="/settings">Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
