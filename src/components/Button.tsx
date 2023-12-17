import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export function Button({ label, onClick, className = '' }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
