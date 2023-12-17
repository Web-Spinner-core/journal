import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Content } from '@/components/Content';

export default function DashboardPage() {
  // Replace with actual username, possibly fetched from a user context or via props
  const username = 'Gram Liu';

  return (
    <div className="flex h-screen text-white">
      <Sidebar username={username} />
      <Content />
    </div>
  );
}