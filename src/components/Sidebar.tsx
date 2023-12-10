import React from 'react';
import Image from 'next/image';

interface SidebarProps {
    userName: string;
    menuItems: { label: string; }[];
}

export function Sidebar({ userName, menuItems }: SidebarProps): JSX.Element {
    return (
        <div className="sidebar w-1/4 p-8">
            <div className="avatar-placeholder w-16 h-16 mb-4"></div>
            <div className="text-lg mb-8">{userName}</div>
            <div className="text-sm">
                {menuItems.map((item, index) => (
                    <div key={index} className="mb-4">
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}
