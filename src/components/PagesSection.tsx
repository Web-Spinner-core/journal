import React from 'react';
import PageLinkItem from '@/components/PageLinkItem';

export default function PagesSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Your pages</h2>
      <PageLinkItem icon="⚛️" label="Physics" color="blue" />
      <PageLinkItem icon="🧪" label="Chemistry" color="green" />
      <PageLinkItem icon="🧬" label="Biology" color="red" />
    </div>
  );
}
