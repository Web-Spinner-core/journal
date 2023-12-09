import React from 'react';
import Link from 'next/link';

const PageLink = ({ icon, label, href }) => {
  return (
    <Link href={href}>
      <a className="page-link flex items-center gap-2 mb-2 text-sm hover:underline">
        <span>{icon}</span>
        <span>{label}</span>
      </a>
    </Link>
  );
};

export default PageLink;
