import React from 'react';
import Link from 'next/link';

function Sidebar() {
  return (
    <div className="sidebar w-1/4 p-6 bg-gray-800">
      <div className="avatar w-16 h-16 mb-6 bg-gray-500 rounded-full"></div>
      <div className="text-2xl font-bold mb-6 text-white">Gram Liu</div>
      <div className="sidebar-heading uppercase text-xs mb-4 text-gray-400">Navigation</div>
      <Link href="/profile">
        <a className="sidebar-item mb-2 block text-white hover:text-gray-300 transition-colors cursor-pointer">Profile</a>
      </Link>
      <Link href="/settings">
        <a className="sidebar-item mb-2 block text-white hover:text-gray-300 transition-colors cursor-pointer">Settings</a>
      </Link>
    </div>
  );
}

export default Sidebar;
