import { FC } from 'react';
import PageLink from '@/components/PageLink';

const PageList: FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Your pages</h2>
    <PageLink icon="⚛️" label="Physics" colorClass="text-blue-400" />
    <PageLink icon="🧪" label="Chemistry" colorClass="text-green-400" />
    <PageLink icon="🧬" label="Biology" colorClass="text-red-400" />
  </div>
);

export default PageList;
