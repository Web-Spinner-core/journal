import React from 'react';

interface AvatarProps {
  imageUrl?: string;
  size: number;
}

export default function Avatar({ imageUrl, size }: AvatarProps) {
  const placeholderStyle = {
    backgroundColor: '#6B7280',
    borderRadius: '50%',
    width: size,
    height: size,
  };

  return (
    <div className="avatar-placeholder" style={placeholderStyle}>
      {imageUrl ? <img src={imageUrl} alt="Avatar" className="rounded-full" /> : null}
    </div>
  );
}
