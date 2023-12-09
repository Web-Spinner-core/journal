import React from 'react';

const PageLink = ({ icon, color, title }) => (
  <div className={`page-link text-${color}-400 mb-2`}> 
    <span>{icon}</span>
    <span>{title}</span>
  </div>
);

export default PageLink;
