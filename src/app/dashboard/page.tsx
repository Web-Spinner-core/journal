import React from 'react';
import { NextPage } from 'next';
import Layout from '@/app/layout';
import Sidebar from '@/components/Sidebar';
import WelcomeSection from '@/components/WelcomeSection';
import PagesSection from '@/components/PagesSection';

const Dashboard: NextPage = () => {
  // TODO: Fetch the actual username from the user's session or state
  const username = 'Gram Liu'; // Placeholder username

  return (
    <Layout>
      <div className="flex h-screen text-white">
        <Sidebar username={username} />
        <div className="content w-3/4 p-6">
          <WelcomeSection />
          <PagesSection />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
