import { PageLink } from '@/components/PageLink';

export default function DashboardPage() {
  const pageLinks = [
    { icon: '⚛️', color: 'text-blue-400', label: 'Physics' },
    { icon: '🧪', color: 'text-green-400', label: 'Chemistry' },
    { icon: '🧬', color: 'text-red-400', label: 'Biology' }
  ];

  return (
    <>
      {pageLinks.map((link, index) => (
        <PageLink key={index} {...link} />
      ))}
    </>
  );
}
