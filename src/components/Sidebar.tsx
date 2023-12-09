import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  username: string;
  menuItems: { name: string; href: string }[];
}

export default function Sidebar({ username, menuItems }: SidebarProps) {
  const router = useRouter();

  return (
    <aside className="sidebar w-1/4 p-8">
      <div className="avatar-placeholder w-16 h-16 mb-4"></div>
      <div className="text-lg mb-8">{username}</div>
      <div className="text-sm">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              className={`mb-4 ${router.pathname === item.href ? 'text-blue-500' : 'text-white'}`}
              aria-current={router.pathname === item.href ? 'page' : undefined}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
}
