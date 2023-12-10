import { RootLayout } from '@/app/layout';
import { ContentArea } from '@/components/ContentArea';
import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <RootLayout>
      <Sidebar userName="John Smith" menuItems={[{label: 'Profile'}, {label: 'Settings'}]} />
      <ContentArea title="Welcome" subtitle="to your private space on the web">
        {children}
      </ContentArea>
    </RootLayout>
  );
}
