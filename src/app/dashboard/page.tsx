"use client"

import React from 'react';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import SidebarHeading from '@/components/SidebarHeading';
import Content from '@/components/Content';
import PageLink from '@/components/PageLink';
import Avatar from '@/components/Avatar';

function DashboardPage() {
  return (
    <div className="flex h-screen text-white">
      <Sidebar>
        <Avatar initials="GL" />
        <div className="text-2xl font-bold mb-6">Gram Liu</div>
        <SidebarHeading text="Navigation" />
        <SidebarItem>Profile</SidebarItem>
        <SidebarItem>Settings</SidebarItem>
      </Sidebar>
      <Content>
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg mb-8">to your private space on the web</p>
        <h2 className="text-3xl font-bold mb-4">Your pages</h2>
        <PageLink icon="⚛️" label="Physics" colorClassName="text-blue-400" />
        <PageLink icon="🧪" label="Chemistry" colorClassName="text-green-400" />
        <PageLink icon="🧬" label="Biology" colorClassName="text-red-400" />
      </Content>
    </div>
  );
}

export default DashboardPage;
