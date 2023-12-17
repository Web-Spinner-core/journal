import * as React from 'react';

interface ContentHeadingProps {
  title: string;
  className?: string;
}

export function ContentHeading({ title, className }: ContentHeadingProps) {
  return (
    <h1 className={`text-4xl font-bold mb-4 ${className}`}>{title}</h1>
  );
}
