import React from 'react';

interface ContentHeaderProps {
  title: string;
  subtitle: string;
}

export function ContentHeader({ title, subtitle }: ContentHeaderProps) {
  return (
    <div className="w-full p-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-12">{subtitle}</p>
    </div>
  );
}
