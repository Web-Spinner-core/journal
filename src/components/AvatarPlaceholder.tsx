import React from 'react';
import { AvatarFallback } from '@/components/ui/avatar';

const AvatarPlaceholder = ({ name }) => (
  <AvatarFallback className="bg-gray-600 text-white font-bold text-xl flex items-center justify-center w-16 h-16 rounded-full">
    {name[0]}
  </AvatarFallback>
);

export default AvatarPlaceholder;
