import * as React from 'react';
import { Card } from '@/components/ui/card';

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <Card className="content w-3/4 p-6">
      {children}
    </Card>
  );
}
