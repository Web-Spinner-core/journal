import * as React from 'react';

interface ContentParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentParagraph({ children, className }: ContentParagraphProps) {
  return (
    <p className={`text-lg mb-8 ${className}`}>{children}</p>
  );
}
