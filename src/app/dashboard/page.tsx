import React from 'react';
import Sidebar from '@/components/Sidebar';
import ContentArea from '@/components/ContentArea';

export default function DashboardPage() {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <ContentArea />
    </div>
  );
}
