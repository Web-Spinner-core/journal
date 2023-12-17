"use client"

import React from 'react';
import { Avatar as BaseAvatar, AvatarFallback } from '@/components/ui/avatar';

interface AvatarProps {
  initials?: string;
}

function Avatar({ initials }: AvatarProps) {
  return (
    <BaseAvatar className="avatar w-16 h-16 mb-6">
      <AvatarFallback>{initials}</AvatarFallback>
    </BaseAvatar>
  );
}

export default Avatar;
