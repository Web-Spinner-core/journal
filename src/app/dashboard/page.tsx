import { NextPage } from 'next';
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';
import WelcomeBanner from '@/components/WelcomeBanner';
import PageList from '@/components/PageList';

const DashboardPage: NextPage = () => {
  return (
    <div className="flex h-screen text-white">
      <Sidebar userName="Gram Liu" />
      <Content>
        <WelcomeBanner />
        <PageList />
      </Content>
    </div>
  );
};

export default DashboardPage;
