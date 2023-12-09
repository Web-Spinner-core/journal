import React from 'react';

const PageLink = ({ icon, label, href }) => {
  return (
    <a href={href} className="page-link text-blue-400 mb-2 flex items-center gap-2">
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
};

export default PageLink;
