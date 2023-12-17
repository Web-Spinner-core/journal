import React from 'react';
import { PageLink } from './PageLink';

export function Content() {
  return (
    <div className="content w-3/4 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-lg mb-8">to your private space on the web</p>
      <h2 className="text-3xl font-bold mb-4">Your pages</h2>
      <PageLink color="text-blue-400" emoji={'
'} title="Physics" />
      <PageLink color="text-green-400" emoji={'
'} title="Chemistry" />
      <PageLink color="text-red-400" emoji={'
'} title="Biology" />
    </div>
  );
}