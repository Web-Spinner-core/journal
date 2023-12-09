import React from 'react';

interface PageLinkProps {
  icon: string;
  colorClass: string;
  label: string;
}

const PageLink: React.FC<PageLinkProps> = ({ icon, colorClass, label }) => {
  return (
    <div className={`page-link ${colorClass} mb-2`}> 
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default PageLink;
