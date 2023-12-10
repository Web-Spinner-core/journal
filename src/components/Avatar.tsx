import React from 'react';

interface AvatarProps {
    size: number;
}

export function Avatar({ size }: AvatarProps): JSX.Element {
    return (
        <div className="avatar-placeholder" style={{ width: size, height: size, borderRadius: '50%', backgroundColor: '#6B7280' }} />
    );
}
