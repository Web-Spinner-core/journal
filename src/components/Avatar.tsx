import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 16 }) => {
  const avatarSize = `${size}rem`;
  return (
    <div
      className="avatar-placeholder"
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        backgroundColor: src ? 'transparent' : '#6B7280',
      }}
    >
      {src ? <img src={src} alt={alt} className="rounded-full" /> : null}
    </div>
  );
};

export default Avatar;
