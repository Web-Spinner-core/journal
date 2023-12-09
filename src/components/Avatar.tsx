import React from 'react';

const Avatar = ({ url, placeholder }) => {
  return (
    <div className="avatar-placeholder w-16 h-16 mb-4" style={{ backgroundImage: `url(${url || placeholder})`, backgroundSize: 'cover', borderRadius: '50%' }} />
  );
};

export default Avatar;
