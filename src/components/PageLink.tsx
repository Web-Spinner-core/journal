import React from 'react';

interface PageLinkProps {
    icon: string;
    color: string;
    label: string;
}

export function PageLink({ icon, color, label }: PageLinkProps): JSX.Element {
    return (
        <div className="page-link" style={{ color }}>
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    );
}
