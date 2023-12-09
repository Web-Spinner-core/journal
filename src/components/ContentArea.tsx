import React from 'react';

interface ContentAreaProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = ({ title, subtitle, children }) => {
  return (
    <div className="content w-3/4 p-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-12">{subtitle}</p>
      {children}
    </div>
  );
};

export default ContentArea;
