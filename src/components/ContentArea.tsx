import React from 'react';

interface ContentAreaProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export function ContentArea({ title, subtitle, children }: ContentAreaProps): JSX.Element {
    return (
        <div className="content w-3/4 p-8">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-lg mb-12">{subtitle}</p>
            {children}
        </div>
    );
}
