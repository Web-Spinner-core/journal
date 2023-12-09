import React from 'react';

const Avatar = ({ url, placeholder }) => {
  return (
    <div 
      className={`avatar-placeholder w-16 h-16 mb-4 rounded-full ${!url ? 'bg-gray-400' : ''}`}
      style={{ backgroundImage: url ? `url(${url})` : '' }}
    />
  );
};

export default Avatar;
