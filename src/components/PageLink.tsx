import { FC } from 'react';

interface PageLinkProps {
  icon: string;
  label: string;
  colorClass: string;
}

const PageLink: FC<PageLinkProps> = ({ icon, label, colorClass }) => (
  <div className={`page-link ${colorClass} mb-2`}> 
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

export default PageLink;
