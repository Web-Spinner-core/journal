import React from 'react';
import Image from 'next/image';

interface SidebarProps {
  username: string;
  menuItems: { name: string; link: string; }[];
}

const Sidebar: React.FC<SidebarProps> = ({ username, menuItems }) => {
  return (
    <aside className="sidebar w-1/4 p-8">
      <div className="avatar-placeholder w-16 h-16 mb-4">
        {/* Placeholder for user avatar. Use Image component if avatar URL is available. */}
      </div>
      <div className="text-lg mb-8">{username}</div>
      <div className="text-sm">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-4">
            {item.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
