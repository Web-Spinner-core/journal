import { ContentArea } from '@/components/ContentArea';
import { Sidebar } from '@/components/Sidebar';
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Sidebar userName="John Smith" menuItems={[{label: 'Profile'}, {label: 'Settings'}]} />
      <ContentArea title="Welcome" subtitle="to your private space on the web">
        {children}
      </ContentArea>
    </>
  );
}
