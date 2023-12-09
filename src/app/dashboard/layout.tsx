import React from 'react';
import { RootLayout } from '@/app/layout';

export const layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout>
    {children}
  </RootLayout>
);
