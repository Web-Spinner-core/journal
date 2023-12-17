import React from 'react';
import Link from 'next/link';

interface PageLinkProps {
  icon: string;
  label: string;
  color: string;
}

function PageLink({ icon, label, color }: PageLinkProps) {
  return (
    <div className={`page-link mb-2 text-${color}-400`}> 
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content w-3/4 p-6 bg-gray-700 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-lg mb-8">to your private space on the web</p>
      <h2 className="text-3xl font-bold mb-4">Your pages</h2>
      <PageLink icon="⚛️" label="Physics" color="blue" />
      <PageLink icon="🧪" label="Chemistry" color="green" />
      <PageLink icon="🧬" label="Biology" color="red" />
    </div>
  );
}

export default ContentArea;
