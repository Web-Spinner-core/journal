import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ContentHeader } from '@/components/ContentHeader';
import { PageLink } from '@/components/PageLink';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar username="John Smith" />
      <div className="content w-3/4">
        <ContentHeader title="Welcome" subtitle="to your private space on the web" />
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Your pages</h2>
          <PageLink icon="⚛️" label="Physics" color="blue" />
          <PageLink icon="🧪" label="Chemistry" color="green" />
          <PageLink icon="🧬" label="Biology" color="red" />
        </div>
      </div>
    </div>
  );
}
