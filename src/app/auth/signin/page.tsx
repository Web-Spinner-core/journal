import React from 'react';
import { SignInForm } from '@/components';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xs">
        <SignInForm />
      </div>
    </div>
  );
}
