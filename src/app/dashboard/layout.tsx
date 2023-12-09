import React from 'react';
import RootLayout from '@/app/layout';

const DashboardLayout = ({ children }) => (
  <RootLayout>
    <main className="flex h-screen">
      {children}
    </main>
  </RootLayout>
);

export default DashboardLayout;
