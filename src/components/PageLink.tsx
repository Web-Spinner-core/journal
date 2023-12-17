"use client"

import React from 'react';

interface PageLinkProps {
  icon: string;
  label: string;
  colorClassName: string;
}

function PageLink({ icon, label, colorClassName }: PageLinkProps) {
  return (
    <div className={`page-link ${colorClassName} mb-2`}> 
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default PageLink;
