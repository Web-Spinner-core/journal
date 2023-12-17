import * as React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Content } from '@/components/Content';
import { ContentHeading } from '@/components/ContentHeading';
import { ContentParagraph } from '@/components/ContentParagraph';
import { PageLink } from '@/components/PageLink';
import { Avatar } from '@/components/Avatar';

export default function DashboardPage() {
  return (
    <div className="flex h-screen text-white">
      <Sidebar username="Gram Liu" />
      <Content>
        <ContentHeading title="Welcome" />
        <ContentParagraph>to your private space on the web</ContentParagraph>
        <ContentHeading title="Your pages" className="text-3xl font-bold mb-4" />
        <PageLink icon="⚛️" title="Physics" colorClass="text-blue-400" />
        <PageLink icon="🧪" title="Chemistry" colorClass="text-green-400" />
        <PageLink icon="🧬" title="Biology" colorClass="text-red-400" />
      </Content>
    </div>
  );
}
