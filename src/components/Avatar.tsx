import * as React from 'react';
import { Avatar as BaseAvatar, AvatarFallback } from '@/components/ui/avatar';

interface AvatarProps {
  initials?: string;
  imageUrl?: string;
  sizeClass?: string;
}

export function Avatar({ initials, imageUrl, sizeClass = 'w-16 h-16' }: AvatarProps) {
  return (
    <BaseAvatar className={`avatar ${sizeClass} mb-6`}> 
      {imageUrl ? <img src={imageUrl} alt="Avatar" /> : <AvatarFallback>{initials}</AvatarFallback>} 
    </BaseAvatar>
  );
}
